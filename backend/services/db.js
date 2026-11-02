import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false;

export async function connectDB() {
  if (isConnected) return true;

  const mongoUri = process.env.MONGODB_URI?.trim();

  if (!mongoUri || mongoUri === 'your_mongodb_atlas_uri_here') {
    console.warn(
      '⚠️ [MongoDB Atlas] MONGODB_URI not configured in .env. Running with fast in-memory user sessions. Add your MongoDB Atlas connection string to .env to persist to MongoDB Atlas.'
    );
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    isConnected = true;
    console.log(`✅ [MongoDB Atlas] Connected to database: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error('❌ [MongoDB Atlas] Connection failed:', error.message);
    console.warn('⚠️ Falling back to local session store. Please verify your MONGODB_URI.');
    return false;
  }
}

export function isDbConnected() {
  return isConnected && mongoose.connection.readyState === 1;
}
