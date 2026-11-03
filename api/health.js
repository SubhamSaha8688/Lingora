import { connectDB, isDbConnected } from '../backend/services/db.js';
import mongoose from 'mongoose';
import { User } from '../backend/models/User.js';

export default async function handler(_req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  try {
    await connectDB();
    const connected = isDbConnected();
    let count = 0;
    if (connected) {
      count = await User.countDocuments();
    }
    return res.status(200).json({
      status: 'ok',
      dbConnected: connected,
      readyState: mongoose.connection.readyState,
      userCount: count,
      platform: 'Vercel Serverless',
    });
  } catch (err) {
    return res.status(500).json({ error: err.message, status: 'error' });
  }
}
