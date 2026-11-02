import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { isDbConnected } from '../services/db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'lingora-secure-jwt-secret-key-2026';

// In-memory fallback user store when MongoDB is not connected
const fallbackUsers = new Map();

function generateToken(userId, email) {
  return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '30d' });
}

export async function register(req, res) {
  try {
    const { email, password, displayName, targetLanguage } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check if user already exists
    if (isDbConnected()) {
      const existingUser = await User.findOne({ email: cleanEmail });
      if (existingUser) {
        return res.status(400).json({ error: 'An account with this email already exists. Please sign in.' });
      }

      const adminEmails = (process.env.VITE_ADMIN_EMAILS || 'shadowmonarch8688@gmail.com')
        .split(',')
        .map((e) => e.trim().toLowerCase());

      const role = adminEmails.includes(cleanEmail) ? 'admin' : 'user';

      const newUser = new User({
        email: cleanEmail,
        password,
        displayName: displayName?.trim() || cleanEmail.split('@')[0],
        targetLanguage: targetLanguage || 'french',
        role,
      });

      await newUser.save();
      const token = generateToken(newUser._id.toString(), newUser.email);

      return res.status(201).json({
        success: true,
        token,
        user: newUser.toProfileJSON(),
      });
    } else {
      // In-Memory Fallback
      if (fallbackUsers.has(cleanEmail)) {
        return res.status(400).json({ error: 'An account with this email already exists' });
      }

      const adminEmails = (process.env.VITE_ADMIN_EMAILS || 'shadowmonarch8688@gmail.com')
        .split(',')
        .map((e) => e.trim().toLowerCase());

      const mockId = 'user_' + Date.now();
      const mockUser = {
        userId: mockId,
        email: cleanEmail,
        password, // In fallback memory only
        displayName: displayName?.trim() || cleanEmail.split('@')[0],
        photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        targetLanguage: targetLanguage || 'french',
        currentLevel: 'A1',
        totalXp: 100,
        streak: 1,
        hearts: 5,
        gems: 100,
        dailyGoalXp: 50,
        role: adminEmails.includes(cleanEmail) ? 'admin' : 'user',
        plan: 'free',
        interfaceLanguage: 'english',
        hasCompletedOnboarding: false,
        studyGoal: 'travel',
        dailyStudyMinutes: 15,
        completedLessons: [],
        purchasedMaterials: [],
        unlockedLanguages: ['french', 'german', 'japanese', 'korean', 'spanish'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastActiveDate: new Date().toISOString().split('T')[0],
      };

      fallbackUsers.set(cleanEmail, mockUser);
      const token = generateToken(mockId, cleanEmail);

      return res.status(201).json({
        success: true,
        token,
        user: mockUser,
      });
    }
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ error: error.message || 'Registration failed' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const cleanEmail = email.toLowerCase().trim();

    if (isDbConnected()) {
      const user = await User.findOne({ email: cleanEmail });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Check for admin status update
      const adminEmails = (process.env.VITE_ADMIN_EMAILS || 'shadowmonarch8688@gmail.com')
        .split(',')
        .map((e) => e.trim().toLowerCase());

      if (adminEmails.includes(cleanEmail) && user.role !== 'admin') {
        user.role = 'admin';
        await user.save();
      }

      const token = generateToken(user._id.toString(), user.email);

      return res.json({
        success: true,
        token,
        user: user.toProfileJSON(),
      });
    } else {
      // In-Memory Fallback
      let user = fallbackUsers.get(cleanEmail);
      if (!user) {
        // Auto-create demo session for convenience if password matches or standard login
        const adminEmails = (process.env.VITE_ADMIN_EMAILS || 'shadowmonarch8688@gmail.com')
          .split(',')
          .map((e) => e.trim().toLowerCase());

        user = {
          userId: 'user_' + Date.now(),
          email: cleanEmail,
          displayName: cleanEmail.split('@')[0],
          photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          targetLanguage: 'french',
          currentLevel: 'A1',
          totalXp: 120,
          streak: 3,
          hearts: 5,
          gems: 150,
          dailyGoalXp: 50,
          role: adminEmails.includes(cleanEmail) ? 'admin' : 'user',
          plan: 'free',
          interfaceLanguage: 'english',
          hasCompletedOnboarding: true,
          studyGoal: 'travel',
          dailyStudyMinutes: 15,
          completedLessons: [],
          purchasedMaterials: [],
          unlockedLanguages: ['french', 'german', 'japanese', 'korean', 'spanish'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          lastActiveDate: new Date().toISOString().split('T')[0],
        };
        fallbackUsers.set(cleanEmail, user);
      }

      const token = generateToken(user.userId, cleanEmail);
      return res.json({
        success: true,
        token,
        user,
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: error.message || 'Login failed' });
  }
}

export async function getProfile(req, res) {
  try {
    const userId = req.userId;
    const email = req.userEmail;

    if (isDbConnected()) {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json({ success: true, user: user.toProfileJSON() });
    } else {
      const user = fallbackUsers.get(email) || {
        userId,
        email,
        displayName: email.split('@')[0],
        targetLanguage: 'french',
        currentLevel: 'A1',
        totalXp: 100,
        streak: 1,
        hearts: 5,
        gems: 100,
        role: 'user',
        plan: 'free',
      };
      return res.json({ success: true, user });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to get profile' });
  }
}

export async function updateProfile(req, res) {
  try {
    const userId = req.userId;
    const email = req.userEmail;
    const updates = req.body;

    // Do not allow directly overriding password or userId via updateProfile
    delete updates.password;
    delete updates.userId;
    delete updates._id;

    if (isDbConnected()) {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      Object.assign(user, updates);
      await user.save();

      return res.json({ success: true, user: user.toProfileJSON() });
    } else {
      const existing = fallbackUsers.get(email) || { userId, email };
      const updated = { ...existing, ...updates, updatedAt: new Date().toISOString() };
      fallbackUsers.set(email, updated);
      return res.json({ success: true, user: updated });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to update profile' });
  }
}

export async function googleAuth(req, res) {
  try {
    const { email, displayName, photoURL, googleId, credential } = req.body;

    let userEmail = email;
    let userName = displayName;
    let userPhoto = photoURL;
    let userGoogleId = googleId;

    // If Google Identity Services ID token (JWT) is sent in credential, decode payload safely
    if (credential && typeof credential === 'string') {
      try {
        const parts = credential.split('.');
        if (parts.length === 3) {
          const payloadBase64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
          const decoded = JSON.parse(Buffer.from(payloadBase64, 'base64').toString('utf-8'));
          userEmail = decoded.email || userEmail;
          userName = decoded.name || decoded.given_name || userName;
          userPhoto = decoded.picture || userPhoto;
          userGoogleId = decoded.sub || userGoogleId;
        }
      } catch (e) {
        console.warn('Failed to parse Google JWT credential payload:', e.message);
      }
    }

    if (!userEmail) {
      return res.status(400).json({ error: 'Please provide a valid Google email.' });
    }

    const cleanEmail = userEmail.toLowerCase().trim();

    if (isDbConnected()) {
      let user = await User.findOne({ email: cleanEmail });

      if (!user) {
        const adminEmails = (process.env.VITE_ADMIN_EMAILS || 'shadowmonarch8688@gmail.com')
          .split(',')
          .map((e) => e.trim().toLowerCase());

        const role = adminEmails.includes(cleanEmail) ? 'admin' : 'user';

        user = new User({
          email: cleanEmail,
          displayName: userName?.trim() || cleanEmail.split('@')[0],
          photoURL: userPhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          authProvider: 'google',
          googleId: userGoogleId,
          role,
          targetLanguage: 'french',
          currentLevel: 'A1',
        });

        await user.save();
      } else {
        if (userGoogleId && !user.googleId) user.googleId = userGoogleId;
        if (userPhoto && (!user.photoURL || user.photoURL.includes('unsplash'))) user.photoURL = userPhoto;
        if (userName && (user.displayName === 'Learner' || !user.displayName)) user.displayName = userName;
        await user.save();
      }

      const token = generateToken(user._id.toString(), user.email);
      return res.json({
        success: true,
        token,
        user: user.toProfileJSON(),
      });
    } else {
      // In-Memory Fallback
      let user = fallbackUsers.get(cleanEmail);
      if (!user) {
        const adminEmails = (process.env.VITE_ADMIN_EMAILS || 'shadowmonarch8688@gmail.com')
          .split(',')
          .map((e) => e.trim().toLowerCase());

        const mockId = 'google_user_' + Date.now();
        user = {
          userId: mockId,
          email: cleanEmail,
          displayName: userName?.trim() || cleanEmail.split('@')[0],
          photoURL: userPhoto || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
          authProvider: 'google',
          googleId: userGoogleId,
          targetLanguage: 'french',
          currentLevel: 'A1',
          totalXp: 100,
          streak: 1,
          hearts: 5,
          gems: 100,
          dailyGoalXp: 50,
          role: adminEmails.includes(cleanEmail) ? 'admin' : 'user',
          plan: 'free',
          interfaceLanguage: 'english',
          hasCompletedOnboarding: false,
          studyGoal: 'travel',
          dailyStudyMinutes: 15,
          completedLessons: [],
          purchasedMaterials: [],
          unlockedLanguages: ['french', 'german', 'japanese', 'korean', 'spanish'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          lastActiveDate: new Date().toISOString().split('T')[0],
        };
        fallbackUsers.set(cleanEmail, user);
      }

      const token = generateToken(user.userId, cleanEmail);
      return res.json({
        success: true,
        token,
        user,
      });
    }
  } catch (error) {
    console.error('Google auth error:', error);
    return res.status(500).json({ error: error.message || 'Google authentication failed' });
  }
}
