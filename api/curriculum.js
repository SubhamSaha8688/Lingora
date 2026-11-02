import { connectDB } from '../backend/services/db.js';
import mongoose from 'mongoose';

const CurriculumSchema = new mongoose.Schema(
  {
    key: { type: String, default: 'global_curriculum', unique: true },
    languages: { type: Array, default: [] },
    curriculum: { type: Object, default: {} },
    studyMaterials: { type: Array, default: [] },
    paymentConfig: { type: Object, default: {} },
  },
  { timestamps: true }
);

let DynamicCurriculum;
try {
  DynamicCurriculum = mongoose.model('DynamicCurriculum');
} catch (_) {
  DynamicCurriculum = mongoose.model('DynamicCurriculum', CurriculumSchema);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();

    if (req.method === 'GET') {
      const record = await DynamicCurriculum.findOne({ key: 'global_curriculum' });
      if (record) {
        return res.status(200).json({
          languages: record.languages,
          curriculum: record.curriculum,
          studyMaterials: record.studyMaterials,
          paymentConfig: record.paymentConfig,
        });
      }
      return res.status(200).json({ languages: [], curriculum: {}, studyMaterials: [] });
    }

    if (req.method === 'POST') {
      const { languages, curriculum, studyMaterials, paymentConfig } = req.body;
      const updated = await DynamicCurriculum.findOneAndUpdate(
        { key: 'global_curriculum' },
        {
          languages,
          curriculum,
          studyMaterials,
          paymentConfig,
        },
        { upsert: true, new: true }
      );
      return res.status(200).json({ success: true, updated });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err) {
    // Return empty payload cleanly if database is not reachable
    return res.status(200).json({ languages: [], curriculum: {}, studyMaterials: [] });
  }
}
