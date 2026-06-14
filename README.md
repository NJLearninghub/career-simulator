# Career Path Simulator — Gujarat Science Stream (Bilingual)

Interactive career decision simulator with 37 career outcomes, salary data, AI impact analysis, and risk assessments. Available in **English** and **Gujarati**.

## Architecture

```
Frontend (public/index.html)     Backend (api/ + lib/)
┌───────────────────────┐       ┌──────────────────────────┐
│  Pure UI shell         │  ──►  │  /api/tree?node=root     │
│  Zero career data      │       │  /api/tree?node=root&lang=gu
│  Language toggle       │  ◄──  │  /api/outcome?key=cse&lang=gu
│  CSS + fetch() only    │ JSON  │  All data lives here     │
└───────────────────────┘       └──────────────────────────┘
```

- `public/index.html` — Frontend with all styling, language toggle, zero data
- `api/tree.js` — Returns one decision tree node per request (EN or GU)
- `api/outcome.js` — Returns one career outcome per request (EN or GU)
- `lib/tree-data.js` + `tree-gu.js` — English + Gujarati tree translations
- `lib/outcomes-data.js` + `outcomes-gu.js` — English + Gujarati outcome translations
- `lib/auth.js` — API key + CORS validation

## Translation Policy (Option 2)

Translated to Gujarati: questions, navigation labels, descriptions, industry trends, AI insight paragraphs, and risk assessment text.

Kept in English (as Gujarati speakers naturally use them): career titles, salary figures (₹4-8 LPA), job role names (Software Engineer, etc.), college names (IIT Bombay, NID Ahmedabad), exam names (JEE, NEET, CLAT), and skill names (Python, React, ML).

## Deployment (Vercel — Free Tier)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Career simulator with Gujarati support"
git remote add origin https://github.com/YOUR_USERNAME/career-simulator.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Framework Preset: **Other**
4. Click **Deploy**

### Step 3: Set Environment Variables

In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**:

| Variable | Value |
|---|---|
| `CAREER_API_KEY` | `cps_2025_guj_science_v1` |
| `ALLOWED_ORIGINS` | `https://your-project.vercel.app` |

After adding env vars, **redeploy** for them to take effect.

## Security Layers

| Layer | Protection |
|---|---|
| Backend separation | Data never in browser source |
| API key header | Requests without key rejected |
| CORS restriction | Only your domain can call API |
| No bulk endpoint | One career per API call |

## Language Toggle

The toggle in the top-right corner switches the entire UI between English and Gujarati. Changes apply instantly to both navigation and currently-displayed career details. The selected language is also passed to API calls so the server returns the appropriate translation.
