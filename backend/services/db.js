import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Direct Atlas replica set connection string (bypasses DNS SRV lookup issues on AWS Lambda/Vercel)
const DIRECT_MONGODB_URI =
  'mongodb://lingora_admin:lingora_admin%40monarch@ac-mk4ofwv-shard-00-00.6zii5do.mongodb.net:27017,ac-mk4ofwv-shard-00-01.6zii5do.mongodb.net:27017,ac-mk4ofwv-shard-00-02.6zii5do.mongodb.net:27017/lingora?ssl=true&replicaSet=atlas-np7vmi-shard-0&authSource=admin&retryWrites=true&w=majority';

// Global cache for serverless environments (Vercel) to reuse open connection
let cached = global._mongooseCache;
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return true;
  }

  // Use configured environment variable or fallback to reliable direct replica set URI
  let mongoUri = process.env.MONGODB_URI?.trim() || DIRECT_MONGODB_URI;

  // If password in URI contains unencoded '@', fix it automatically
  if (mongoUri.includes('lingora_admin:lingora_admin@monarch')) {
    mongoUri = mongoUri.replace(
      'lingora_admin:lingora_admin@monarch',
      'lingora_admin:lingora_admin%40monarch'
    );
  }

  // Ensure authSource=admin is specified
  if (!mongoUri.includes('authSource=')) {
    const sep = mongoUri.includes('?') ? '&' : '?';
    mongoUri = `${mongoUri}${sep}authSource=admin`;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoUri, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 8000,
        socketTimeoutMS: 45000,
      })
      .then((m) => {
        console.log(`✅ [MongoDB Atlas] Connected to database: ${m.connection.host}`);
        return m;
      })
      .catch(async (err) => {
        console.warn('⚠️ [MongoDB Atlas] Primary connection attempt failed:', err.message);
        // Fallback to direct replica set if SRV fails
        if (mongoUri !== DIRECT_MONGODB_URI) {
          console.log('🔄 Trying direct replica set fallback URI...');
          return mongoose.connect(DIRECT_MONGODB_URI, {
            bufferCommands: false,
            serverSelectionTimeoutMS: 8000,
          });
        }
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
    return true;
  } catch (err) {
    cached.promise = null;
    console.error('❌ [MongoDB Atlas] Final connection failed:', err.message);
    return false;
  }
}

export function isDbConnected() {
  return mongoose.connection.readyState === 1;
}
