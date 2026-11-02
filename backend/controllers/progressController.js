import { Progress } from '../models/Progress.js';
import { User } from '../models/User.js';
import { isDbConnected } from '../services/db.js';

export async function recordLesson(req, res) {
  try {
    const userId = req.userId;
    const { lessonId, languageId, level, score, xpEarned } = req.body;

    if (!lessonId || !languageId) {
      return res.status(400).json({ error: 'lessonId and languageId are required' });
    }

    if (isDbConnected()) {
      await Progress.findOneAndUpdate(
        { userId, lessonId },
        {
          userId,
          lessonId,
          languageId,
          level: level || 'A1',
          score: Number(score) || 100,
          xpEarned: Number(xpEarned) || 20,
          completedAt: new Date().toISOString(),
        },
        { upsert: true, new: true }
      );

      // Update User totalXp and completedLessons array
      const user = await User.findById(userId);
      if (user) {
        if (!user.completedLessons.includes(lessonId)) {
          user.completedLessons.push(lessonId);
        }
        user.totalXp = (user.totalXp || 0) + (Number(xpEarned) || 20);
        user.lastActiveDate = new Date().toISOString().split('T')[0];
        await user.save();
        return res.json({ success: true, user: user.toProfileJSON() });
      }
    }

    return res.json({ success: true, message: 'Progress saved' });
  } catch (error) {
    console.error('Record lesson error:', error);
    return res.status(500).json({ error: error.message || 'Failed to record lesson' });
  }
}

export async function getLeaderboard(_req, res) {
  try {
    if (isDbConnected()) {
      const topUsers = await User.find({})
        .sort({ totalXp: -1 })
        .limit(20)
        .select('displayName photoURL targetLanguage totalXp streak plan');

      return res.json({ success: true, users: topUsers });
    }

    return res.json({ success: true, users: [] });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to get leaderboard' });
  }
}
