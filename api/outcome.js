const OUTCOMES = require('../lib/outcomes-data.js');
const OUTCOMES_GU = require('../lib/outcomes-gu.js');
const { validateRequest, setCors } = require('../lib/auth.js');

module.exports = function handler(req, res) {
  if (!setCors(req, res)) return;
  if (!validateRequest(req, res)) return;

  const { key, lang } = req.query;
  if (!key) return res.status(400).json({ error: 'Missing ?key= parameter' });

  const data = OUTCOMES[key];
  if (!data) return res.status(404).json({ error: 'Career not found' });

  const useGu = lang === 'gu';
  const gu = useGu ? OUTCOMES_GU[key] : null;

  // Per Option 2: desc, trends, ai and risk.text translated. Title, salary,
  // jobs, skills, topColleges, satisfaction, salaryPct, icons, isCreator,
  // and risk levels stay shared from English source.
  let merged = { type: 'outcome', key, ...data };
  if (gu) {
    if (gu.desc) merged.desc = gu.desc;
    if (gu.trends) merged.trends = gu.trends;
    if (gu.ai) merged.ai = gu.ai;
    if (gu.risks && data.risks) {
      merged.risks = data.risks.map((r, i) => ({
        level: r.level,
        icon: r.icon,
        text: gu.risks[i] || r.text
      }));
    }
  }

  res.json(merged);
};
