import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    displayName: {
      type: String,
      default: 'Learner',
      trim: true,
    },
    photoURL: {
      type: String,
      default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    targetLanguage: {
      type: String,
      default: 'french',
    },
    currentLevel: {
      type: String,
      default: 'A1',
    },
    totalXp: {
      type: Number,
      default: 0,
    },
    streak: {
      type: Number,
      default: 1,
    },
    hearts: {
      type: Number,
      default: 5,
    },
    gems: {
      type: Number,
      default: 100,
    },
    dailyGoalXp: {
      type: Number,
      default: 50,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    plan: {
      type: String,
      enum: ['free', 'premium'],
      default: 'free',
    },
    interfaceLanguage: {
      type: String,
      enum: ['english', 'hindi'],
      default: 'english',
    },
    hasCompletedOnboarding: {
      type: Boolean,
      default: false,
    },
    studyGoal: {
      type: String,
      default: 'travel',
    },
    dailyStudyMinutes: {
      type: Number,
      default: 15,
    },
    completedLessons: {
      type: [String],
      default: [],
    },
    purchasedMaterials: {
      type: [String],
      default: [],
    },
    unlockedLanguages: {
      type: [String],
      default: ['french', 'german', 'japanese', 'korean', 'spanish'],
    },
    lastActiveDate: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare password helper
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Safe JSON profile without password
userSchema.methods.toProfileJSON = function () {
  return {
    userId: this._id.toString(),
    email: this.email,
    displayName: this.displayName,
    photoURL: this.photoURL,
    targetLanguage: this.targetLanguage,
    currentLevel: this.currentLevel,
    totalXp: this.totalXp,
    streak: this.streak,
    hearts: this.hearts,
    gems: this.gems,
    dailyGoalXp: this.dailyGoalXp,
    role: this.role,
    plan: this.plan,
    interfaceLanguage: this.interfaceLanguage,
    hasCompletedOnboarding: this.hasCompletedOnboarding,
    studyGoal: this.studyGoal,
    dailyStudyMinutes: this.dailyStudyMinutes,
    completedLessons: this.completedLessons || [],
    purchasedMaterials: this.purchasedMaterials || [],
    unlockedLanguages: this.unlockedLanguages || [],
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    lastActiveDate: this.lastActiveDate,
  };
};

export const User = mongoose.models.User || mongoose.model('User', userSchema);
