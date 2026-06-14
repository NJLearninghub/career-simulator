// API key validation middleware
// Key is stored in Vercel Environment Variables (never in code)

function validateRequest(req, res) {
  const apiKey = req.headers['x-api-key'];
  const validKey = process.env.CAREER_API_KEY;

  if (!validKey) {
    // If env var not set, allow requests (dev mode)
    return true;
  }

  if (apiKey !== validKey) {
    res.status(403).json({ error: 'Unauthorized' });
    return false;
  }
  return true;
}

function setCors(req, res) {
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['*'];

  const origin = req.headers.origin || '';

  if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return false; // Signal: handled, don't proceed
  }
  return true; // Proceed
}

module.exports = { validateRequest, setCors };
