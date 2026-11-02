import { connectDB } from '../backend/services/db.js';
import { recordLesson, getLeaderboard } from '../backend/controllers/progressController.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'lingora-secure-jwt-secret-key-2026';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  await connectDB();

  const url = req.url || '';

  if (url.includes('leaderboard') || req.query?.action === 'leaderboard') {
    return getLeaderboard(req, res);
  }

  // Token authentication check for lesson record
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.userId = decoded.userId;
      req.userEmail = decoded.email;
    } catch (_) {}
  }

  if (req.method === 'POST') {
    return recordLesson(req, res);
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
