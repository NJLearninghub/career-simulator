const TREE = require('../lib/tree-data.js');
const TREE_GU = require('../lib/tree-gu.js');
const { validateRequest, setCors } = require('../lib/auth.js');

module.exports = function handler(req, res) {
  if (!setCors(req, res)) return;
  if (!validateRequest(req, res)) return;

  const { node, lang } = req.query;
  if (!node) return res.status(400).json({ error: 'Missing ?node= parameter' });

  const data = TREE[node];
  if (!data) return res.status(404).json({ error: 'Node not found' });

  if (data.outcome) return res.json({ type: 'outcome', key: data.outcome });

  const useGu = lang === 'gu';
  const guNode = useGu ? TREE_GU[node] : null;

  const sanitized = {
    type: 'question',
    q: (guNode && guNode.q) || data.q,
    sub: (guNode && guNode.sub) || data.sub || '',
    label: (guNode && guNode.label) || data.label || '',
    opts: data.opts.map((opt, i) => {
      const guOpt = guNode && guNode.opts && guNode.opts[i];
      return {
        label: (guOpt && guOpt.label) || opt.label,
        sub: (guOpt && guOpt.sub) || opt.sub || '',
        icon: opt.icon || '',
        tag: opt.tag || '',
        next: opt.next
      };
    })
  };

  res.json(sanitized);
};
