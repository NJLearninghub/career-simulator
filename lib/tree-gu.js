// Gujarati translations for the decision-tree nodes.
// Option 2 policy: questions, sub-text, labels and the human-readable card
// labels/subs are translated. Technical terms, exam names, degree names and
// proper nouns are kept in English exactly as Gujarati speakers use them.
// Keyed by node id; opts arrays are index-aligned with tree-data.js.

module.exports = {
  root: {
    q: "તમે અત્યારે ક્યાં છો?",
    sub: "શરૂ કરવા માટે તમારું વર્તમાન શૈક્ષણિક સ્તર પસંદ કરો.",
    label: "પગલું ૧ — શરૂઆત",
    opts: [
      { label: "ધોરણ ૧૦ નો વિદ્યાર્થી", sub: "સ્ટ્રીમ પસંદગી માટે આગોતરું આયોજન" },
      { label: "ધોરણ ૧૨ — Science", sub: "PCM (Group A) અથવા PCB (Group B)" },
      { label: "ધોરણ ૧૨ — Commerce", sub: "Science stream તરફના વિકલ્પો જોવા" },
      { label: "Science સ્નાતક / Engineer", sub: "B.Sc. / B.Tech પૂર્ણ અથવા ચાલુ" },
      { label: "કાર્યરત વ્યાવસાયિક", sub: "કારકિર્દી બદલાવ અથવા કૌશલ્ય વૃદ્ધિ" },
      { label: "આધુનિક અને Creator કારકિર્દી 🌟", sub: "YouTube, Influencer, AI Consulting, Algo Trading…" },
    ]
  },
  from10: {
    q: "ધોરણ ૧૧–૧૨ માટે તમે કઈ સ્ટ્રીમ વિચારી રહ્યા છો?",
    sub: "આ તમારી આગામી ૪–૫ વર્ષની શૈક્ષણિક યાત્રાને આકાર આપશે.",
    label: "સ્ટ્રીમ પસંદગી",
    opts: [
      { label: "Science — PCM (Group A)", sub: "Physics, Chemistry, Maths" },
      { label: "Science — PCB (Group B)", sub: "Physics, Chemistry, Biology" },
      { label: "Science — PCMB (બંને)", sub: "ચારેય મુખ્ય વિષયો — મહત્તમ સુગમતા" },
      { label: "Commerce", sub: "Accounting, Economics, Business Studies" },
      { label: "Arts / Humanities", sub: "History, Political Science, Sociology, વગેરે" },
    ]
  },
  sci12_group: {
    q: "તમે કયા Science group માં છો?",
    sub: "ગુજરાતની Science stream Group A (PCM) અને Group B (PCB) માં વહેંચાયેલી છે. તમારું group નક્કી કરે છે કે કયા પ્રવેશ પરીક્ષાઓ અને અભ્યાસક્રમો તમારા માટે ઉપલબ્ધ છે.",
    label: "Science Group",
    opts: [
      { label: "Group A — PCM", sub: "Physics · Chemistry · Mathematics" },
      { label: "Group B — PCB", sub: "Physics · Chemistry · Biology" },
      { label: "PCMB — બંને Groups", sub: "ચારેય વિષયો — બધી streams માટે પાત્ર" },
    ]
  },
  pcmb12: {
    q: "તમે PCMB કરી રહ્યા છો — તમારી પાસે મહત્તમ વિકલ્પો છે!",
    sub: "PCMB વિદ્યાર્થીઓ engineering (JEE), medicine (NEET), અને બધી non-science paths માટે અરજી કરી શકે છે. કઈ દિશા તમને આકર્ષે છે?",
    label: "PCMB — દિશા પસંદ કરો",
    opts: [
      { label: "Engineering / Technology બાજુ (PCM)", sub: "JEE Main, JEE Advanced, GUJCET" },
      { label: "Medical / Biological બાજુ (PCB)", sub: "NEET-UG, ICAR, Agriculture" },
      { label: "Non-Science Paths (બધા માટે ખુલ્લા)", sub: "Law, Management, Design, CA, Media…" },
    ]
  },
  sci12: {
    q: "તમે Science (PCM) માં છો. કઈ path તમને રસ પડે છે?",
    sub: "Group A engineering, pure sciences, અને બધા non-science વિકલ્પો પણ ખોલે છે.",
    label: "PCM — મુખ્ય Path",
    opts: [
      { label: "Engineering (B.Tech)", sub: "JEE Main / JEE Advanced / GUJCET" },
      { label: "Pure Sciences (B.Sc.)", sub: "Physics, Maths, Statistics — સંશોધન અને ઉદ્યોગ" },
      { label: "Computer Science / Data Science", sub: "BCA, B.Sc. CS, AI&DS" },
      { label: "Merchant Navy", sub: "B.Sc. Nautical Science / B.E. Marine Engineering" },
      { label: "Defence Services (NDA)", sub: "Army, Navy, Air Force Officer" },
      { label: "Commercial Pilot (CPL)", sub: "DGCA licence — IndiGo, Air India" },
      { label: "Architecture (B.Arch)", sub: "NATA / JEE Paper 2 — CEPT, SPA Delhi" },
      { label: "Non-Science Paths", sub: "Law, Management, Design, CA, Media…" },
    ]
  },
  pcb12: {
    q: "તમે Science (PCB) માં છો. કઈ path તમને રસ પડે છે?",
    sub: "Group B medical, biological, અને ઘણી non-science કારકિર્દી paths ખોલે છે.",
    label: "PCB — મુખ્ય Path",
    opts: [
      { label: "Medicine (MBBS)", sub: "NEET-UG — ડોક્ટરની path" },
      { label: "Pharmacy (B.Pharm)", sub: "NEET / Merit — pharmaceutical sciences" },
      { label: "Nursing (B.Sc. Nursing)", sub: "NEET / Merit — clinical + આંતરરાષ્ટ્રીય" },
      { label: "Biotechnology / B.Tech Biotech", sub: "JEE / Merit — bio-engineering frontier" },
      { label: "Agriculture (B.Sc. Agriculture)", sub: "ICAR-AIEEA / GUJCET — AgriTech + સંશોધન" },
      { label: "Non-Science Paths", sub: "Law, Management, Design, CA, Media…" },
    ]
  },
  eng_branch: {
    q: "કઈ engineering branch?",
    sub: "દરેક branch અલગ કારકિર્દી ecosystem તરફ દોરી જાય છે. સાચા રસના આધારે પસંદ કરો.",
    label: "Engineering Branch",
    opts: [
      { label: "Computer Science (CSE)", sub: "Software, AI, Cloud, Cybersecurity" },
      { label: "AI & Data Science", sub: "ML, Deep Learning, Generative AI" },
      { label: "Electronics & Communication (ECE)", sub: "VLSI, Embedded, 5G, Semiconductors" },
      { label: "Electrical Engineering (EE)", sub: "Power, EVs, Renewable Energy" },
      { label: "Mechanical Engineering", sub: "Manufacturing, Automotive, Aerospace" },
      { label: "Civil Engineering", sub: "Infrastructure, Smart Cities, સરકારી" },
      { label: "Chemical Engineering", sub: "Petroleum, Pharma, Specialty Chemicals" },
    ]
  },
  bsc_pure: {
    q: "તમે કયું pure science ભણવા માંગો છો?",
    sub: "Pure sciences સંશોધન, ઉદ્યોગ, અને વધતી જતી high-tech કારકિર્દી paths તરફ દોરી જાય છે.",
    label: "Pure Science Branch",
    opts: [
      { label: "B.Sc. Mathematics", sub: "Actuarial, Quant Finance, AI Research, શિક્ષણ" },
      { label: "B.Sc. Statistics", sub: "Data Science, Actuarial, Biostatistics, Finance" },
      { label: "B.Sc. Physics", sub: "Quantum Computing, સંશોધન, Engineering crossover" },
    ]
  },
  cs_ds: {
    q: "Computer Science કે Data Science pathway?",
    sub: "બંને high-demand છે — પસંદગી તમારી specialisation ની ઊંડાઈ નક્કી કરે છે.",
    label: "CS / Data Science",
    opts: [
      { label: "BCA / B.Sc. Computer Science", sub: "Software development, web, systems" },
      { label: "B.Sc. Statistics → Data Science", sub: "Statistical ML, Analytics, Actuarial" },
      { label: "B.Tech AI & Data Science", sub: "સીધી AI engineering — સૌથી hot branch" },
    ]
  },
  non_sci: {
    q: "કઈ non-science path તમને રસ પડે છે?",
    sub: "Science વિદ્યાર્થીઓ આ બધા ક્ષેત્રોમાં પાત્ર છે — અને ઘણીવાર ફાયદામાં હોય છે.",
    label: "Non-Science Path",
    opts: [
      { label: "Law (BA LLB / BBA LLB)", sub: "CLAT / AILET — NLUs અને ટોચની law schools" },
      { label: "Management (BBA / IIM IPM)", sub: "IPMAT / NPAT — IIMs અને ટોચની B-schools" },
      { label: "CA / CMA / CS", sub: "ICAI / ICMAI / ICSI professional qualifications" },
      { label: "Design (NID / NIFT / UCEED)", sub: "DAT / NIFT Exam / UCEED — creative-tech" },
      { label: "Mass Communication / Journalism", sub: "IIMC / Symbiosis / MICA — media અને PR" },
      { label: "Hotel Management (NCHMCT JEE)", sub: "IHM — hospitality, culinary, cruise lines" },
      { label: "Civil Services (UPSC / GPSC)", sub: "IAS / IPS / IFS — જાહેર વહીવટ" },
      { label: "Psychology (B.Sc. / B.A.)", sub: "Clinical, Org, સંશોધન — માનસિક સ્વાસ્થ્ય" },
      { label: "Liberal Arts", sub: "Ashoka / FLAME / Jindal — આંતરશાખાકીય" },
      { label: "Commercial Pilot (CPL)", sub: "DGCA CPL — airlines અને aviation" },
    ]
  },
  comm12: {
    q: "Commerce background — તમે ક્યાં જવા માંગો છો?",
    sub: "Commerce વિદ્યાર્થીઓ આ high-growth ક્ષેત્રોમાં જઈ શકે છે.",
    label: "Commerce Crossover Paths",
    opts: [
      { label: "CA / CMA / CS", sub: "ICAI professional qualification — પ્રવેશ પરીક્ષા નહીં" },
      { label: "Management (BBA / IPM)", sub: "IIMs માટે IPMAT; NMIMS માટે NPAT" },
      { label: "Law (BA LLB)", sub: "CLAT — corporate law, tax law, financial law" },
      { label: "Liberal Arts / Economics", sub: "Ashoka / FLAME / Delhi School of Economics" },
      { label: "Civil Services (UPSC)", sub: "Commerce optional — economics, accounting" },
    ]
  },
  arts12: {
    q: "Arts background — કારકિર્દી paths શોધી રહ્યા છીએ.",
    sub: "Arts stream વિદ્યાર્થીઓ પાસે આ વિષયોમાં ઉત્તમ વિકલ્પો છે.",
    label: "Arts Stream Paths",
    opts: [
      { label: "Law (BA LLB)", sub: "CLAT — litigation, corporate, human rights law" },
      { label: "Civil Services (UPSC)", sub: "Humanities optional — History, PolSci, Sociology" },
      { label: "Liberal Arts", sub: "Ashoka / FLAME / Jindal — બહુશાખાકીય ઊંડાઈ" },
      { label: "Mass Communication / Journalism", sub: "IIMC / SIMC — reporting, PR, media" },
      { label: "Psychology", sub: "B.A. Psychology — counselling, HR, સંશોધન" },
    ]
  },
  scigrad: {
    q: "તમે Science સ્નાતક છો. તમારું આગલું પગલું શું છે?",
    sub: "B.Sc. કે B.Tech સ્નાતકો પાસે ઘણા શક્તિશાળી આગલા પગલાં છે.",
    label: "Post-Graduation Path",
    opts: [
      { label: "M.Tech / M.Sc. → સંશોધન / ઉદ્યોગ", sub: "GATE / IIT / IISER — ઊંડી specialisation" },
      { label: "MBA (IIM / ISB / MDI)", sub: "CAT / GMAT — management + tech combo" },
      { label: "Civil Services (UPSC)", sub: "Technical optional: Physics, Maths, Chemistry" },
      { label: "AI / Data Science (bootcamp / PG)", sub: "ઝડપી ML/DS specialisation" },
      { label: "Law (LLB — 3 વર્ષ, સ્નાતક પછી)", sub: "IP, tech, કે environmental law માં specialise" },
      { label: "Startup / Entrepreneurship", sub: "Product કે કંપની બનાવવી" },
    ]
  },
  working: {
    q: "કાર્યરત વ્યાવસાયિક તરીકે, તમારું લક્ષ્ય શું છે?",
    sub: "અનુભવી વ્યક્તિઓ માટે કારકિર્દી પરિવર્તન અને upskilling paths.",
    label: "Professional Transition",
    opts: [
      { label: "AI / Data Science તરફ સંક્રમણ", sub: "સૌથી high-growth tech ક્ષેત્ર તરફ upskill" },
      { label: "Executive MBA (EMBA / Weekend MBA)", sub: "કામ કરતાં કરતાં IIM / ISB EMBA" },
      { label: "Civil Services (UPSC)", sub: "જાહેર વહીવટમાં કારકિર્દી" },
      { label: "Law (LLB 3-વર્ષ, સાંજે)", sub: "કામ સાથે technical law specialisation" },
      { label: "Design / UX (online PG)", sub: "Product design કે UX તરફ સંક્રમણ" },
    ]
  },
  modern_careers: {
    q: "કઈ આધુનિક કારકિર્દી path તમને રસ પડે છે?",
    sub: "વાસ્તવિક આવક સંભાવના — અને વાસ્તવિક જોખમો સાથેની નવા-યુગની કારકિર્દીઓ. દરેક card સંપૂર્ણ ચિત્ર બતાવે છે.",
    label: "આધુનિક અને Creator કારકિર્દી",
    opts: [
      { label: "YouTube Creator", sub: "Educational, entertainment, tech, finance content" },
      { label: "Social Media Influencer", sub: "Instagram, Reels, LinkedIn, X — brand partnerships" },
      { label: "Podcaster / Audio Creator", sub: "Long-form audio; અવાજ દ્વારા brand building" },
      { label: "Gaming Streamer / Esports Creator", sub: "Live streaming, pro gaming, esports commentary" },
      { label: "EdTech Creator / Online Course Seller", sub: "નિપુણતાને courses, cohorts, communities તરીકે વેચવી" },
      { label: "Digital Marketer / Performance Marketer", sub: "SEO, Meta Ads, growth hacking — હંમેશા demand માં" },
      { label: "Algo / Quant Trader", sub: "Automated trading strategies — institutional કે retail" },
      { label: "AI Tools Consultant", sub: "વ્યવસાયોને AI implement અને automate કરવામાં મદદ" },
      { label: "Freelance Developer / No-Code Builder", sub: "વૈશ્વિક clients માટે સ્વતંત્ર રીતે software બનાવવું" },
    ]
  },
};
