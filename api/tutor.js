import { handleTutorInteraction, getDiagnosticInfo } from '../backend/services/tutorService.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const diag = await getDiagnosticInfo();
      res.status(200).json(diag);
    } catch (err) {
      res.status(500).json({ error: err?.message || 'Diagnostic failed' });
    }
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const result = await handleTutorInteraction(body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Vercel API tutor error:', error);
    res.status(500).json({ error: error.message || 'Internal error' });
  }
}
