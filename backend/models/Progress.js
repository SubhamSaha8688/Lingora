import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    lessonId: {
      type: String,
      required: true,
    },
    languageId: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      default: 'A1',
    },
    score: {
      type: Number,
      default: 100,
    },
    xpEarned: {
      type: Number,
      default: 20,
    },
    completedAt: {
      type: String,
      default: () => new Date().toISOString(),
    },
  },
  {
    timestamps: true,
  }
);

progressSchema.index({ userId: 1, lessonId: 1 }, { unique: true });

export const Progress = mongoose.models.Progress || mongoose.model('Progress', progressSchema);
