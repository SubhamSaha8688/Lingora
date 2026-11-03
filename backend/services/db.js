import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_MONGODB_URI =
  'mongodb+srv://lingora_admin:lingora_admin%40monarch@cluster0.6zii5do.mongodb.net/lingora?retryWrites=true&w=majority';

// Global cache for serverless environments (Vercel) to reuse open connection
let cached = global._mongooseCache;
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return true;
  }

  const mongoUri = process.env.MONGODB_URI?.trim() || DEFAULT_MONGODB_URI;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoUri, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      })
      .then((m) => {
        console.log(`✅ [MongoDB Atlas] Connected to database: ${m.connection.host}`);
        return m;
      })
      .catch((err) => {
        cached.promise = null;
        console.error('❌ [MongoDB Atlas] Connection error:', err.message);
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
    return true;
  } catch (_) {
    return false;
  }
}

export function isDbConnected() {
  return mongoose.connection.readyState === 1;
}
