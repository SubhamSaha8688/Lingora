import { connectDB } from '../backend/services/db.js';
import { register, login, googleAuth, getProfile, updateProfile } from '../backend/controllers/authController.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'lingora-secure-jwt-secret-key-2026';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  await connectDB();

  const url = req.url || '';

  if (url.includes('register') || req.body?.action === 'register') {
    return register(req, res);
  }

  if (url.includes('google') || req.body?.action === 'google') {
    return googleAuth(req, res);
  }

  if (url.includes('login') || req.body?.action === 'login') {
    return login(req, res);
  }

  // Token authentication check for protected requests
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.userId = decoded.userId;
      req.userEmail = decoded.email;
    } catch (_) {}
  }

  if (req.method === 'GET' && (url.includes('me') || req.query?.action === 'me')) {
    if (!req.userId) return res.status(401).json({ error: 'Unauthorized' });
    return getProfile(req, res);
  }

  if (req.method === 'PUT' || req.body?.action === 'update') {
    if (!req.userId) return res.status(401).json({ error: 'Unauthorized' });
    return updateProfile(req, res);
  }

  // Default: support login action
  return login(req, res);
}
