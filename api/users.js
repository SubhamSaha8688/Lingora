import { connectDB, isDbConnected } from '../backend/services/db.js';
import { User } from '../backend/models/User.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  await connectDB();

  // 1. GET ALL REGISTERED USERS (for Admin Dashboard)
  if (req.method === 'GET') {
    try {
      if (isDbConnected()) {
        const users = await User.find({}, '-password').sort({ createdAt: -1 });
        const userList = users.map((u) => u.toProfileJSON());
        return res.status(200).json({ success: true, users: userList });
      }
      return res.status(200).json({ success: true, users: [] });
    } catch (err) {
      console.warn('Get users error:', err.message);
      return res.status(200).json({ success: true, users: [] });
    }
  }

  // 2. CREATE A NEW USER / ADMIN (with Email & Password)
  if (req.method === 'POST') {
    try {
      const { email, password, displayName, role, plan } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      const cleanEmail = email.toLowerCase().trim();

      if (isDbConnected()) {
        let existingUser = await User.findOne({ email: cleanEmail });

        if (existingUser) {
          // Update existing account
          if (role) existingUser.role = role;
          if (plan) existingUser.plan = plan;
          if (displayName) existingUser.displayName = displayName;
          if (password && password.length >= 6) {
            existingUser.password = password;
          }
          await existingUser.save();
          return res.status(200).json({
            success: true,
            user: existingUser.toProfileJSON(),
            message: 'User updated successfully',
          });
        }

        const newUser = new User({
          email: cleanEmail,
          password,
          displayName: displayName?.trim() || cleanEmail.split('@')[0],
          role: role || 'user',
          plan: plan || 'free',
          authProvider: 'local',
          targetLanguage: 'french',
          currentLevel: 'A1',
        });

        await newUser.save();
        return res.status(201).json({
          success: true,
          user: newUser.toProfileJSON(),
          message: 'User created successfully',
        });
      }

      // Memory fallback return
      return res.status(201).json({
        success: true,
        user: {
          userId: `u_${Date.now()}`,
          email: cleanEmail,
          displayName: displayName?.trim() || cleanEmail.split('@')[0],
          role: role || 'user',
          plan: plan || 'free',
        },
      });
    } catch (err) {
      console.error('Create user error:', err);
      return res.status(500).json({ error: err.message || 'Failed to create user' });
    }
  }

  // 3. UPDATE USER ROLE OR PLAN
  if (req.method === 'PUT') {
    try {
      const { email, role, plan, displayName } = req.body;
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }

      const cleanEmail = email.toLowerCase().trim();

      if (isDbConnected()) {
        const user = await User.findOne({ email: cleanEmail });
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }

        if (role) user.role = role;
        if (plan) user.plan = plan;
        if (displayName) user.displayName = displayName;
        await user.save();

        return res.status(200).json({ success: true, user: user.toProfileJSON() });
      }

      return res.status(200).json({ success: true, message: 'Updated locally' });
    } catch (err) {
      return res.status(500).json({ error: err.message || 'Failed to update user' });
    }
  }

  // 4. DELETE USER
  if (req.method === 'DELETE') {
    try {
      const email = req.query?.email || req.body?.email;
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }

      const cleanEmail = email.toLowerCase().trim();
      if (isDbConnected()) {
        await User.findOneAndDelete({ email: cleanEmail });
      }

      return res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
      return res.status(500).json({ error: err.message || 'Failed to delete user' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
