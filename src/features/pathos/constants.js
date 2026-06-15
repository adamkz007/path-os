/* ─── demo (hardcoded) AI outputs — used in place of live API calls for the prototype ─── */
export const DEMO_ANALYSIS = {
  journey_title: "From Account Lead to Creative Director",
  start_label: "Account Lead",
  destination_label: "Creative Director",
  readiness_score: 58,
  readiness_summary: "You bring strong client and team leadership experience, with a growing portfolio of brand work. The main gap is hands-on creative direction at scale and a sharper personal portfolio.",
  transition_verdict: "Realistically 9-14 months with focused upskilling. The hardest part will be building a portfolio of original creative direction work, not just managing it.",
  strengths: [
    { skill: "Client management", reason: "Years of direct client-facing experience build trust quickly with stakeholders." },
    { skill: "Team leadership", reason: "Proven ability to coordinate cross-functional creative teams under deadline pressure." },
    { skill: "Brand strategy", reason: "Solid grounding in positioning and brand narrative work." },
    { skill: "Project delivery", reason: "Track record of shipping campaigns on time and on budget." },
  ],
  gaps: [
    { name: "Creative direction portfolio", description: "Limited first-author creative work to showcase original vision.", priority: "high" },
    { name: "Visual design fluency", description: "Needs stronger working knowledge of design tools and visual systems.", priority: "medium" },
    { name: "Pitch storytelling", description: "Big-pitch narrative craft is less developed than account-side skills.", priority: "medium" },
    { name: "Team mentorship", description: "Limited experience formally mentoring junior creatives.", priority: "low" },
  ],
  cert_recommendations: [
    { name: "Creative Direction Foundations", provider: "School of Motion", why: "Closes the creative direction portfolio gap with structured projects." },
    { name: "Design Systems for Brand Teams", provider: "Coursera", why: "Builds visual design fluency for cross-team collaboration." },
    { name: "Advanced Pitch Storytelling", provider: "AdHouse Academy", why: "Sharpens pitch storytelling for bigger accounts." },
  ],
  milestones: [
    { name: "The Brief Room", scene_type: "office", action: "Lead a creative brief workshop end-to-end", detail: "Run discovery sessions and translate client goals into a creative brief. Practice framing problems the way a creative director would.", timeline: "0-2 months", skill_unlocked: "Creative briefing", gap_closed: "Pitch storytelling", cert: "" },
    { name: "Studio of Systems", scene_type: "studio", action: "Complete a design systems course", detail: "Get hands-on with visual design tools and component-based thinking. Apply it to a real brand refresh.", timeline: "1-3 months", skill_unlocked: "Visual systems thinking", gap_closed: "Visual design fluency", cert: "Design Systems for Brand Teams, Coursera" },
    { name: "The Mentor's Bridge", scene_type: "bridge", action: "Mentor two junior designers on a live project", detail: "Take on informal mentorship of junior creatives, reviewing their work and giving direction.", timeline: "2-4 months", skill_unlocked: "Creative mentorship", gap_closed: "Team mentorship", cert: "" },
    { name: "Portfolio Workshop", scene_type: "workshop", action: "Build 3 original creative direction case studies", detail: "Develop a portfolio of self-directed creative concepts, from mood boards to final assets.", timeline: "3-6 months", skill_unlocked: "Creative direction craft", gap_closed: "Creative direction portfolio", cert: "Creative Direction Foundations, School of Motion" },
    { name: "The Pitch Tower", scene_type: "tower", action: "Lead a pitch for a new business opportunity", detail: "Co-lead a pitch presentation, owning the creative narrative and visual direction.", timeline: "6-9 months", skill_unlocked: "Pitch leadership", gap_closed: "Pitch storytelling", cert: "" },
    { name: "Creative Director's Gallery", scene_type: "gallery", action: "Step into a Creative Director role on a project", detail: "Own creative direction for a full campaign, from concept to execution, with a team reporting to you.", timeline: "9-14 months", skill_unlocked: "Creative direction", gap_closed: "Creative direction portfolio", cert: "" },
  ],
  branches: [
    { from_milestone: 1, alt_role: "Brand Strategy Director", label: "The Strategist's Atrium", scene_type: "office", transferable_skills: ["Brand strategy", "Client management"], rationale: "Your strategic and client skills transfer directly into a strategy-led leadership role, trading hands-on creative craft for narrative and positioning depth.", extra_steps: ["Build 2 brand strategy case studies"] },
    { from_milestone: 3, alt_role: "Art Director", label: "The Art Director's Loft", scene_type: "studio", transferable_skills: ["Visual systems thinking", "Creative direction craft"], rationale: "A narrower, more visual-craft-focused path that builds on the same portfolio work but emphasises art direction over overall creative leadership.", extra_steps: ["Deepen typography and layout fundamentals"] },
  ],
};

export const DEMO_ASSESS_OUT = {
  summary: "You combine a steady, dependable work rhythm with deep introspective thinking and a strong sense of purpose — a profile that thrives when given autonomy and meaningful work rather than constant oversight.",
  work_style: "You work best with quiet, focused blocks of time, especially later in the day, and prefer to think things through deeply before acting.",
  ideal_environment: "A purpose-driven team with room for independent thinking, where collaboration happens in smaller, intentional settings rather than constant open-plan noise.",
  watchouts: "Without clear boundaries you may take on too much emotional labour for a team, and high-pressure, fast-pivoting environments can drain your energy quickly.",
  fit_for_target: "For your target role, your combination of empathy, strategic thinking, and night-owl focus suits work that involves deep creative or analytical output with periodic, well-structured collaboration.",
};

export const DEMO_PROFILE = {
  name: "Aisyah Rahman",
  headline: "Senior Brand Strategist",
  location: "Kuala Lumpur, Malaysia",
  email: "aisyah.rahman@email.com",
  summary: "Senior brand strategist with 7+ years building brand narratives and go-to-market campaigns for FMCG and lifestyle clients across Southeast Asia. Known for turning research into sharp creative briefs and leading cross-functional teams to deliver award-winning work.",
  skills: ["Brand strategy", "Copywriting", "Client management", "Campaign planning", "Market research", "Presentation design", "Team leadership", "Stakeholder management"],
  certificates: [
    { name: "Brand Strategy Certification", provider: "General Assembly", year: "2022" },
    { name: "Google Analytics Certified", provider: "Google", year: "2021" },
  ],
  achievements: [
    { title: "Regional Campaign of the Year", story: "Led the brand strategy for a regional FMCG launch that won 'Campaign of the Year' at the local marketing awards.", metric: "+32% brand awareness" },
    { title: "Client Retention Streak", story: "Maintained a 100% client renewal rate across 3 major accounts over 4 years through proactive strategy reviews.", metric: "3 accounts, 4 years" },
    { title: "Mentorship Program Lead", story: "Set up and ran an internal mentorship program pairing senior strategists with junior associates.", metric: "8 mentees" },
  ],
  experience: [
    { role: "Senior Brand Strategist", company: "Hatch & Co (Agency)", period: "2021 - Present", highlights: ["Lead brand strategy for 4 key accounts across FMCG and retail", "Manage a team of 3 junior strategists", "Pitch new business worth RM 2M+ in annual billings"] },
    { role: "Brand Strategist", company: "Ember Creative", period: "2018 - 2021", highlights: ["Developed brand positioning for 10+ regional launches", "Built research-to-creative-brief workflows adopted agency-wide"] },
  ],
  education: [
    { degree: "BA Communications & Marketing", institution: "Universiti Malaya", year: "2017" },
  ],
};

export const PAL = {
  bg: "#b8c9bd", bgTop: "#c6d4c8", paper: "#f3eede", paperDark: "#e6dfc9",
  ink: "#3c4a43", inkSoft: "#5a6a61", terra: "#c0473a", terraDark: "#9a3a30",
  teal: "#5b8a78", tealDark: "#3f6b5b", cream: "#f4efe2", creamMid: "#e2dac4",
  creamLow: "#cabf9f", gold: "#d99a2b", goldDeep: "#3a2c00", warn: "#a96a12",
  warnBg: "#f7ebd4", gap: "#9a3a30", gapBg: "#f6e2de", good: "#3f6b5b", goodBg: "#e2ece6",
  blue: "#3a6b8a", blueBg: "#dde8ef",
};

/* ─── assessment frameworks ─── */
export const MBTI = ["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"];
export const ENNEAGRAM = ["1 · Reformer","2 · Helper","3 · Achiever","4 · Individualist","5 · Investigator","6 · Loyalist","7 · Enthusiast","8 · Challenger","9 · Peacemaker"];
export const DISC = ["D · Dominance","I · Influence","S · Steadiness","C · Conscientiousness"];
export const ENERGY = ["Morning Surge","Steady All-Day","Afternoon Peak","Night Owl","Variable / Sprint-Rest"];
export const DRIVES = ["Verify (need to know)","Authenticate (need to be true to self)","Complete (need to finish)","Improvise (need flexibility)"];
export const CLIFTON = ["Achiever","Activator","Analytical","Arranger","Communication","Competition","Connectedness","Deliberative","Developer","Discipline","Empathy","Focus","Futuristic","Harmony","Ideation","Includer","Individualization","Input","Intellection","Learner","Maximizer","Positivity","Relator","Responsibility","Significance","Strategic","Woo"];
export const VIA = ["Creativity","Curiosity","Judgment","Love of Learning","Perspective","Bravery","Perseverance","Honesty","Zest","Love","Kindness","Social Intelligence","Teamwork","Fairness","Leadership","Forgiveness","Humility","Prudence","Self-Regulation","Gratitude","Hope","Humor","Spirituality"];
export const ASSESS_DEFS = [
  { key:"mbti", icon:"🧭", name:"16 Personalities", sub:"Type preference", kind:"single", opts:MBTI },
  { key:"energy", icon:"⚡", name:"The Energy Rhythm", sub:"When you perform best", kind:"single", opts:ENERGY },
  { key:"enneagram", icon:"🔵", name:"Enneagram", sub:"Core motivation", kind:"single", opts:ENNEAGRAM },
  { key:"disc", icon:"🟥", name:"DISC", sub:"Behavioural style", kind:"single", opts:DISC },
  { key:"drives", icon:"🧬", name:"Instinctive Drives", sub:"Cultural fit", kind:"multi", opts:DRIVES, max:2 },
  { key:"clifton", icon:"💪", name:"CliftonStrengths", sub:"Top 5 themes", kind:"multi", opts:CLIFTON, max:5 },
  { key:"via", icon:"🌟", name:"VIA Character Strengths", sub:"Top strengths", kind:"multi", opts:VIA, max:5 },
];

/* ─── shared mock data ─── */
export const JOBS_SEED = [
  { id:"j1", title:"Creative Strategy Lead", company:"Hatch & Co (Agency)", location:"Kuala Lumpur", level:"Senior", salary:"RM 9–12k", skills:["Brand strategy","Client management","Team leadership","Pitching"], by:"company" },
  { id:"j2", title:"Account Director", company:"Ember Creative", location:"Petaling Jaya", level:"Senior", salary:"RM 8–11k", skills:["Account management","Budgeting","Client relationships"], by:"company" },
  { id:"j3", title:"Head of Growth", company:"Tinta Studio", location:"Remote (MY)", level:"Lead", salary:"RM 12–16k", skills:["Growth","P&L","Leadership","Marketing"], by:"company" },
  { id:"j4", title:"Brand Manager", company:"Nusantara Foods", location:"Shah Alam", level:"Mid", salary:"RM 6–8k", skills:["Brand strategy","Campaigns","Analytics"], by:"company" },
  { id:"j5", title:"Studio Operations Manager", company:"Kanvas Agency", location:"Penang", level:"Mid", salary:"RM 7–9k", skills:["Operations","Team leadership","Finance"], by:"company" },
];
export const CANDIDATE_POOL = [
  { id:"c1", name:"Aisyah Rahman", headline:"Senior Brand Strategist", location:"KL", readiness:78, target:"Creative Director", skills:["Brand strategy","Copywriting","Client management"], open:true },
  { id:"c2", name:"Daniel Tan", headline:"Account Manager", location:"PJ", readiness:64, target:"Account Director", skills:["Account management","Budgeting","Pitching"], open:true },
  { id:"c3", name:"Priya Nair", headline:"Marketing Lead", location:"Penang", readiness:71, target:"Head of Growth", skills:["Growth","Analytics","Leadership"], open:false },
  { id:"c4", name:"Wei Jie Lim", headline:"Operations Exec", location:"KL", readiness:52, target:"Ops Manager", skills:["Operations","Finance","Process"], open:true },
];
export const STAFF = [
  { id:"s1", name:"Sarah Lee", role:"Creative Director", dept:"Creative", disc:"I", energy:"Morning Surge", top:"Strategic" },
  { id:"s2", name:"Arif Hassan", role:"Account Director", dept:"Accounts", disc:"D", energy:"Steady All-Day", top:"Achiever" },
  { id:"s3", name:"Mei Ling", role:"Senior Designer", dept:"Creative", disc:"S", energy:"Afternoon Peak", top:"Ideation" },
  { id:"s4", name:"Kumar Raj", role:"Finance Manager", dept:"Ops", disc:"C", energy:"Morning Surge", top:"Deliberative" },
  { id:"s5", name:"Nadia Omar", role:"Growth Lead", dept:"Marketing", disc:"I", energy:"Variable / Sprint-Rest", top:"Activator" },
  { id:"s6", name:"James Wong", role:"Project Manager", dept:"Ops", disc:"C", energy:"Steady All-Day", top:"Responsibility" },
];
export const APPLICANTS_SEED = [
  { id:"a1", name:"Daniel Tan", role:"Account Director", stage:"Reviewed", match:82, applied:"3 days ago" },
  { id:"a2", name:"Farah Idris", role:"Brand Manager", stage:"Interview", match:74, applied:"1 week ago" },
  { id:"a3", name:"Leong Ka Wai", role:"Studio Operations Manager", stage:"Applied", match:69, applied:"yesterday" },
  { id:"a4", name:"Siti Aminah", role:"Creative Strategy Lead", stage:"Offer", match:88, applied:"2 weeks ago" },
];
export const GRADUATES = [
  { id:"g1", name:"Tan Mei Xin", program:"BBA Marketing", year:2023, status:"Employed", employer:"Hatch & Co", role:"Brand Executive", skills:["Marketing","Analytics"] },
  { id:"g2", name:"Rajesh Kumar", program:"BBA Marketing", year:2023, status:"Employed", employer:"Nusantara Foods", role:"Account Exec", skills:["Account management"] },
  { id:"g3", name:"Nurul Huda", program:"BSc Computer Science", year:2024, status:"Seeking", employer:"", role:"", skills:["Python","Data"] },
  { id:"g4", name:"Brandon Lee", program:"BBA Marketing", year:2024, status:"Further study", employer:"", role:"MBA candidate", skills:["Strategy"] },
  { id:"g5", name:"Aishah Zainal", program:"BSc Computer Science", year:2023, status:"Employed", employer:"Tinta Studio", role:"Frontend Dev", skills:["React","UI"] },
  { id:"g6", name:"Kevin Ng", program:"BSc Computer Science", year:2024, status:"Employed", employer:"GrabTech", role:"Data Analyst", skills:["SQL","Python","Viz"] },
  { id:"g7", name:"Farah Idris", program:"BBA Marketing", year:2024, status:"Employed", employer:"Ember Creative", role:"Brand Manager", skills:["Brand","Campaigns"] },
  { id:"g8", name:"Lim Wei", program:"BBA Marketing", year:2023, status:"Seeking", employer:"", role:"", skills:["Sales"] },
];
export const PROGRAMS = [
  { name:"BBA Marketing", skills:["Brand strategy","Consumer behaviour","Analytics","Campaign management","Market research","Communication"] },
  { name:"BSc Computer Science", skills:["Programming","Data structures","Databases","Web development","Machine learning basics","Software engineering"] },
];
export const APP_STATUSES = ["Draft","Applied","Reviewed","Interview","Offer","Rejected"];
export const STATUS_COLOR = { Draft:PAL.inkSoft, Applied:PAL.blue, Reviewed:PAL.gold, Interview:PAL.teal, Offer:PAL.good, Rejected:PAL.gap };
export const APPS_SEED = [
  { id:"ap1", title:"Brand Manager", company:"Nusantara Foods", status:"Reviewed", date:"2026-05-20", notes:"Recruiter viewed profile." },
  { id:"ap2", title:"Account Director", company:"Ember Creative", status:"Interview", date:"2026-05-12", notes:"1st round on 6 Jun, 3pm." },
];
