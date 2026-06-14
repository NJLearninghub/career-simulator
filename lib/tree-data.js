// Decision tree data — NOT served as static file
// Only accessible via /api/tree serverless function

module.exports = {
  root: {
    q: "Where are you right now?",
    sub: "Select your current academic level to begin.",
    label: "Step 1 — Starting Point",
    opts: [
      { label: "Class 10th Student", sub: "Planning ahead for stream selection", icon: "📘", tag: "tag-sci", next: "from10" },
      { label: "Class 12th — Science", sub: "PCM (Group A) or PCB (Group B)", icon: "⚗️", tag: "tag-sci", next: "sci12_group" },
      { label: "Class 12th — Commerce", sub: "Exploring science stream crossovers", icon: "📊", tag: "tag-comm", next: "comm12" },
      { label: "Science Graduate / Engineer", sub: "B.Sc. / B.Tech completed or ongoing", icon: "🎓", tag: "tag-sci", next: "scigrad" },
      { label: "Working Professional", sub: "Career change or upskilling", icon: "💼", tag: "tag-prof", next: "working" },
      { label: "Modern & Creator Careers 🌟", sub: "YouTube, Influencer, AI Consulting, Algo Trading…", icon: "✨", tag: "tag-creator", next: "modern_careers" },
    ]
  },

  from10: {
    q: "Which stream are you considering for Class 11–12?",
    sub: "This will shape the next 4–5 years of your educational journey.",
    label: "Stream Choice",
    opts: [
      { label: "Science — PCM (Group A)", sub: "Physics, Chemistry, Maths", icon: "🔬", tag: "tag-sci", next: "sci12" },
      { label: "Science — PCB (Group B)", sub: "Physics, Chemistry, Biology", icon: "🧬", tag: "tag-med", next: "pcb12" },
      { label: "Science — PCMB (Both)", sub: "All four core subjects — maximum flexibility", icon: "⚗️", tag: "tag-sci", next: "sci12_group" },
      { label: "Commerce", sub: "Accounting, Economics, Business Studies", icon: "📊", tag: "tag-comm", next: "comm12" },
      { label: "Arts / Humanities", sub: "History, Political Science, Sociology, etc.", icon: "🎨", tag: "tag-arts", next: "arts12" },
    ]
  },

  sci12_group: {
    q: "Which Science group are you in?",
    sub: "Gujarat Science stream is split into Group A (PCM) and Group B (PCB). Your group determines which entrance exams and undergraduate programmes are available to you.",
    label: "Science Group",
    opts: [
      { label: "Group A — PCM", sub: "Physics · Chemistry · Mathematics", icon: "📐", tag: "tag-sci", next: "sci12" },
      { label: "Group B — PCB", sub: "Physics · Chemistry · Biology", icon: "🧬", tag: "tag-med", next: "pcb12" },
      { label: "PCMB — Both Groups", sub: "All four subjects — eligible for all streams", icon: "⚗️", tag: "tag-sci", next: "pcmb12" },
    ]
  },

  pcmb12: {
    q: "You're doing PCMB — you have maximum options!",
    sub: "PCMB students can apply for engineering (JEE), medicine (NEET), and all non-science paths. Which direction calls to you?",
    label: "PCMB — Choose Direction",
    opts: [
      { label: "Engineering / Technology side (PCM)", sub: "JEE Main, JEE Advanced, GUJCET", icon: "⚙️", tag: "tag-sci", next: "sci12" },
      { label: "Medical / Biological side (PCB)", sub: "NEET-UG, ICAR, Agriculture", icon: "🧬", tag: "tag-med", next: "pcb12" },
      { label: "Non-Science Paths (open to all)", sub: "Law, Management, Design, CA, Media…", icon: "🌐", tag: "tag-comm", next: "non_sci" },
    ]
  },

  sci12: {
    q: "You're in Science (PCM). What path interests you?",
    sub: "Group A opens engineering, pure sciences, and all non-science options too.",
    label: "PCM — Major Path",
    opts: [
      { label: "Engineering (B.Tech)", sub: "JEE Main / JEE Advanced / GUJCET", icon: "⚙️", tag: "tag-sci", next: "eng_branch" },
      { label: "Pure Sciences (B.Sc.)", sub: "Physics, Maths, Statistics — research & industry", icon: "🔭", tag: "tag-sci", next: "bsc_pure" },
      { label: "Computer Science / Data Science", sub: "BCA, B.Sc. CS, AI&DS", icon: "💻", tag: "tag-sci", next: "cs_ds" },
      { label: "Merchant Navy", sub: "B.Sc. Nautical Science / B.E. Marine Engineering", icon: "🚢", tag: "tag-prof", next: "out_merchant" },
      { label: "Defence Services (NDA)", sub: "Army, Navy, Air Force Officer", icon: "🎖️", tag: "tag-prof", next: "out_defence" },
      { label: "Commercial Pilot (CPL)", sub: "DGCA licence — IndiGo, Air India", icon: "✈️", tag: "tag-prof", next: "out_pilot" },
      { label: "Architecture (B.Arch)", sub: "NATA / JEE Paper 2 — CEPT, SPA Delhi", icon: "🏛️", tag: "tag-arts", next: "out_arch" },
      { label: "Non-Science Paths", sub: "Law, Management, Design, CA, Media…", icon: "🌐", tag: "tag-comm", next: "non_sci" },
      { label: "Modern & Creator Careers 🌟", sub: "YouTube, EdTech Creator, AI Consulting, Freelance Dev…", icon: "✨", tag: "tag-creator", next: "modern_careers" },
    ]
  },

  pcb12: {
    q: "You're in Science (PCB). What path interests you?",
    sub: "Group B opens medical, biological, and many non-science career paths.",
    label: "PCB — Major Path",
    opts: [
      { label: "Medicine (MBBS)", sub: "NEET-UG — doctor's path", icon: "🩺", tag: "tag-med", next: "out_mbbs" },
      { label: "Pharmacy (B.Pharm)", sub: "NEET / Merit — pharmaceutical sciences", icon: "💊", tag: "tag-med", next: "out_pharmacy" },
      { label: "Nursing (B.Sc. Nursing)", sub: "NEET / Merit — clinical + international", icon: "🏥", tag: "tag-med", next: "out_nursing" },
      { label: "Biotechnology / B.Tech Biotech", sub: "JEE / Merit — bio-engineering frontier", icon: "🧬", tag: "tag-sci", next: "out_biotech" },
      { label: "Agriculture (B.Sc. Agriculture)", sub: "ICAR-AIEEA / GUJCET — AgriTech + research", icon: "🌾", tag: "tag-comm", next: "out_agriculture" },
      { label: "Non-Science Paths", sub: "Law, Management, Design, CA, Media…", icon: "🌐", tag: "tag-comm", next: "non_sci" },
    ]
  },

  eng_branch: {
    q: "Which engineering branch?",
    sub: "Each branch leads to distinct career ecosystems. Choose based on genuine interest.",
    label: "Engineering Branch",
    opts: [
      { label: "Computer Science (CSE)", sub: "Software, AI, Cloud, Cybersecurity", icon: "💻", tag: "tag-sci", next: "out_cse" },
      { label: "AI & Data Science", sub: "ML, Deep Learning, Generative AI", icon: "🤖", tag: "tag-sci", next: "out_ai" },
      { label: "Electronics & Communication (ECE)", sub: "VLSI, Embedded, 5G, Semiconductors", icon: "📡", tag: "tag-sci", next: "out_ece" },
      { label: "Electrical Engineering (EE)", sub: "Power, EVs, Renewable Energy", icon: "⚡", tag: "tag-sci", next: "out_elec" },
      { label: "Mechanical Engineering", sub: "Manufacturing, Automotive, Aerospace", icon: "⚙️", tag: "tag-sci", next: "out_mech" },
      { label: "Civil Engineering", sub: "Infrastructure, Smart Cities, Government", icon: "🏗️", tag: "tag-sci", next: "out_civil" },
      { label: "Chemical Engineering", sub: "Petroleum, Pharma, Specialty Chemicals", icon: "🧪", tag: "tag-sci", next: "out_chem" },
    ]
  },

  bsc_pure: {
    q: "Which pure science do you want to study?",
    sub: "Pure sciences lead to research, industry, and increasingly high-tech career paths.",
    label: "Pure Science Branch",
    opts: [
      { label: "B.Sc. Mathematics", sub: "Actuarial, Quant Finance, AI Research, Academia", icon: "📐", tag: "tag-sci", next: "out_bsc_maths" },
      { label: "B.Sc. Statistics", sub: "Data Science, Actuarial, Biostatistics, Finance", icon: "📉", tag: "tag-sci", next: "out_bsc_stats" },
      { label: "B.Sc. Physics", sub: "Quantum Computing, Research, Engineering crossover", icon: "⚛️", tag: "tag-sci", next: "out_bsc_physics" },
    ]
  },

  cs_ds: {
    q: "Computer Science or Data Science pathway?",
    sub: "Both are high-demand — the choice shapes your specialisation depth.",
    label: "CS / Data Science",
    opts: [
      { label: "BCA / B.Sc. Computer Science", sub: "Software development, web, systems", icon: "💾", tag: "tag-sci", next: "out_cse" },
      { label: "B.Sc. Statistics → Data Science", sub: "Statistical ML, Analytics, Actuarial", icon: "📊", tag: "tag-sci", next: "out_bsc_stats" },
      { label: "B.Tech AI & Data Science", sub: "Direct AI engineering — hottest branch", icon: "🤖", tag: "tag-sci", next: "out_ai" },
    ]
  },

  non_sci: {
    q: "Which non-science path interests you?",
    sub: "Science students are eligible — and often advantaged — in all of these fields.",
    label: "Non-Science Path",
    opts: [
      { label: "Law (BA LLB / BBA LLB)", sub: "CLAT / AILET — NLUs and top law schools", icon: "⚖️", tag: "tag-arts", next: "out_law" },
      { label: "Management (BBA / IIM IPM)", sub: "IPMAT / NPAT — IIMs and top B-schools", icon: "📈", tag: "tag-comm", next: "out_mgt" },
      { label: "CA / CMA / CS", sub: "ICAI / ICMAI / ICSI professional qualifications", icon: "💰", tag: "tag-comm", next: "out_ca" },
      { label: "Design (NID / NIFT / UCEED)", sub: "DAT / NIFT Exam / UCEED — creative-tech", icon: "🎨", tag: "tag-arts", next: "out_design" },
      { label: "Mass Communication / Journalism", sub: "IIMC / Symbiosis / MICA — media & PR", icon: "📰", tag: "tag-arts", next: "out_media" },
      { label: "Hotel Management (NCHMCT JEE)", sub: "IHM — hospitality, culinary, cruise lines", icon: "🏨", tag: "tag-comm", next: "out_hotel" },
      { label: "Civil Services (UPSC / GPSC)", sub: "IAS / IPS / IFS — public administration", icon: "🏛️", tag: "tag-prof", next: "out_ics" },
      { label: "Psychology (B.Sc. / B.A.)", sub: "Clinical, Org, Research — mental health", icon: "🧠", tag: "tag-arts", next: "out_psy" },
      { label: "Liberal Arts", sub: "Ashoka / FLAME / Jindal — interdisciplinary", icon: "📚", tag: "tag-arts", next: "out_la" },
      { label: "Commercial Pilot (CPL)", sub: "DGCA CPL — airlines and aviation", icon: "✈️", tag: "tag-prof", next: "out_pilot" },
      { label: "Modern & Creator Careers 🌟", sub: "YouTube, Influencer, EdTech Creator, AI Consulting…", icon: "✨", tag: "tag-creator", next: "modern_careers" },
    ]
  },

  comm12: {
    q: "Commerce background — where do you want to go?",
    sub: "Commerce students can cross over into these high-growth areas.",
    label: "Commerce Crossover Paths",
    opts: [
      { label: "CA / CMA / CS", sub: "ICAI professional qualification — no entrance", icon: "💰", tag: "tag-comm", next: "out_ca" },
      { label: "Management (BBA / IPM)", sub: "IPMAT for IIMs; NPAT for NMIMS", icon: "📈", tag: "tag-comm", next: "out_mgt" },
      { label: "Law (BA LLB)", sub: "CLAT — corporate law, tax law, financial law", icon: "⚖️", tag: "tag-arts", next: "out_law" },
      { label: "Liberal Arts / Economics", sub: "Ashoka / FLAME / Delhi School of Economics", icon: "📚", tag: "tag-arts", next: "out_la" },
      { label: "Civil Services (UPSC)", sub: "Commerce optional — economics, accounting", icon: "🏛️", tag: "tag-prof", next: "out_ics" },
    ]
  },

  arts12: {
    q: "Arts background — exploring career paths.",
    sub: "Arts stream students have excellent options in these disciplines.",
    label: "Arts Stream Paths",
    opts: [
      { label: "Law (BA LLB)", sub: "CLAT — litigation, corporate, human rights law", icon: "⚖️", tag: "tag-arts", next: "out_law" },
      { label: "Civil Services (UPSC)", sub: "Humanities optional — History, PolSci, Sociology", icon: "🏛️", tag: "tag-prof", next: "out_ics" },
      { label: "Liberal Arts", sub: "Ashoka / FLAME / Jindal — multidisciplinary depth", icon: "📚", tag: "tag-arts", next: "out_la" },
      { label: "Mass Communication / Journalism", sub: "IIMC / SIMC — reporting, PR, media", icon: "📰", tag: "tag-arts", next: "out_media" },
      { label: "Psychology", sub: "B.A. Psychology — counselling, HR, research", icon: "🧠", tag: "tag-arts", next: "out_psy" },
    ]
  },

  scigrad: {
    q: "You're a science graduate. What's your next move?",
    sub: "B.Sc. or B.Tech graduates have multiple powerful next steps.",
    label: "Post-Graduation Path",
    opts: [
      { label: "M.Tech / M.Sc. → Research / Industry", sub: "GATE / IIT / IISER — deep specialisation", icon: "🔬", tag: "tag-sci", next: "out_cse" },
      { label: "MBA (IIM / ISB / MDI)", sub: "CAT / GMAT — management + tech combo", icon: "📈", tag: "tag-comm", next: "out_mgt" },
      { label: "Civil Services (UPSC)", sub: "Technical optional: Physics, Maths, Chemistry", icon: "🏛️", tag: "tag-prof", next: "out_ics" },
      { label: "AI / Data Science (bootcamp / PG)", sub: "Fast-track ML/DS specialisation", icon: "🤖", tag: "tag-sci", next: "out_ai" },
      { label: "Law (LLB — 3 year, post-graduation)", sub: "Specialise in IP, tech, or environmental law", icon: "⚖️", tag: "tag-arts", next: "out_law" },
      { label: "Startup / Entrepreneurship", sub: "Building a product or company", icon: "🚀", tag: "tag-prof", next: "out_startup" },
    ]
  },

  working: {
    q: "As a working professional, what's your goal?",
    sub: "Career pivots and upskilling paths for experienced individuals.",
    label: "Professional Transition",
    opts: [
      { label: "Transition to AI / Data Science", sub: "Upskill to highest-growth tech field", icon: "🤖", tag: "tag-sci", next: "out_ai" },
      { label: "Executive MBA (EMBA / Weekend MBA)", sub: "IIM / ISB EMBA while working", icon: "📈", tag: "tag-comm", next: "out_mgt" },
      { label: "Civil Services (UPSC)", sub: "Career in public administration", icon: "🏛️", tag: "tag-prof", next: "out_ics" },
      { label: "Law (LLB 3-year, evening)", sub: "Technical law specialisation alongside work", icon: "⚖️", tag: "tag-arts", next: "out_law" },
      { label: "Design / UX (online PG)", sub: "Transition to product design or UX", icon: "🎨", tag: "tag-arts", next: "out_design" },
      { label: "Modern & Creator Careers 🌟", sub: "YouTube, AI Consulting, Algo Trading, Freelance Dev…", icon: "✨", tag: "tag-creator", next: "modern_careers" },
    ]
  },

  // ── OUTCOME REDIRECTS ──
  out_cse:       { outcome: "eng_cse" },
  out_startup:   { outcome: "startup_entrepreneurship" },
  out_mech:      { outcome: "eng_mech" },
  out_civil:     { outcome: "eng_civil" },
  out_elec:      { outcome: "eng_elec" },
  out_ece:       { outcome: "eng_ece" },
  out_chem:      { outcome: "eng_chem" },
  out_ai:        { outcome: "eng_ai" },
  out_bsc_maths: { outcome: "bsc_maths" },
  out_bsc_stats: { outcome: "bsc_stats" },
  out_bsc_physics:{ outcome: "bsc_physics" },
  out_merchant:  { outcome: "merchant_navy" },
  out_defence:   { outcome: "defence" },
  out_pilot:     { outcome: "pilot_cpl" },
  out_arch:      { outcome: "eng_civil" }, // closest proxy
  out_mbbs:      { outcome: "mbbs" },
  out_pharmacy:  { outcome: "pharmacy" },
  out_nursing:   { outcome: "nursing" },
  out_biotech:   { outcome: "biotech" },
  out_agriculture:{ outcome: "agriculture" },
  out_law:       { outcome: "law" },
  out_mgt:       { outcome: "management" },
  out_ca:        { outcome: "ca_cma" },
  out_design:    { outcome: "design" },
  out_media:     { outcome: "mass_media" },
  out_hotel:     { outcome: "hotel_mgmt" },
  out_ics:       { outcome: "civil_services" },
  out_psy:       { outcome: "psychology" },
  out_la:        { outcome: "liberal_arts" },
  modern_careers: {
    q: "Which modern career path interests you?",
    sub: "New-age careers with real income potential — and real risks. Each card shows the full picture.",
    label: "Modern & Creator Careers",
    opts: [
      { label: "YouTube Creator", sub: "Educational, entertainment, tech, finance content", icon: "🎬", tag: "tag-creator", next: "out_youtube" },
      { label: "Social Media Influencer", sub: "Instagram, Reels, LinkedIn, X — brand partnerships", icon: "📸", tag: "tag-creator", next: "out_influencer" },
      { label: "Podcaster / Audio Creator", sub: "Long-form audio; brand building via voice", icon: "🎙️", tag: "tag-creator", next: "out_podcaster" },
      { label: "Gaming Streamer / Esports Creator", sub: "Live streaming, pro gaming, esports commentary", icon: "🎮", tag: "tag-creator", next: "out_streamer" },
      { label: "EdTech Creator / Online Course Seller", sub: "Selling expertise as courses, cohorts, communities", icon: "🎓", tag: "tag-creator", next: "out_edtech_creator" },
      { label: "Digital Marketer / Performance Marketer", sub: "SEO, Meta Ads, growth hacking — always in demand", icon: "📊", tag: "tag-comm", next: "out_digital_marketer" },
      { label: "Algo / Quant Trader", sub: "Automated trading strategies — institutional or retail", icon: "📉", tag: "tag-prof", next: "out_algo_trader" },
      { label: "AI Tools Consultant", sub: "Helping businesses implement and automate with AI", icon: "🤖", tag: "tag-sci", next: "out_ai_consultant" },
      { label: "Freelance Developer / No-Code Builder", sub: "Building software for global clients independently", icon: "💻", tag: "tag-sci", next: "out_freelancer" },
    ]
  },

  // Outcome redirects for modern careers
  out_youtube:          { outcome: "modern_youtube" },
  out_influencer:       { outcome: "modern_influencer" },
  out_podcaster:        { outcome: "modern_podcaster" },
  out_streamer:         { outcome: "modern_streamer" },
  out_edtech_creator:   { outcome: "modern_edtech_creator" },
  out_digital_marketer: { outcome: "modern_digital_marketer" },
  out_algo_trader:      { outcome: "modern_algo_trader" },
  out_ai_consultant:    { outcome: "modern_ai_consultant" },
  out_freelancer:       { outcome: "modern_freelancer" },


};