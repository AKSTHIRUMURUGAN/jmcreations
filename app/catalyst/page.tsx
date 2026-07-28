"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState } from "react";
import ModuleModal from "@/components/ModuleModal";
import CustomCursor from "@/components/cursor/CustomCursor";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import Link from "next/link";
import {
  Compass, Map, Brain, Code, Wrench, Globe, Bot, Target,
  Dumbbell, Rocket, Star, GraduationCap, Hammer, FileText,
  Trophy, Frown, Lightbulb, Shield,
  CheckCircle, XCircle, Mail, Globe as GlobeIcon, ArrowLeft, Sparkles, Send, CheckCircle2, Download
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/shared/SocialIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PAMPHLET_URL = "https://res.cloudinary.com/dv9qp6pua/image/upload/CampusToCareer_TechBuddySpace_t_ilohsh";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const modules = [
  { num: "01", icon: Compass, title: "Career Compass", desc: "Scientific Aptitude Mapping & Career Guidance",
    whatItIs: "Comprehensive career guidance combining psychometric testing, aptitude mapping, and one-on-one sessions with industry experts to map each student's ideal career path.",
    whyItMatters: "Over 60% of Indian graduates end up in the wrong field. Early, science-backed career guidance prevents years of wasted effort and ignites genuine passion-driven performance.",
    syllabus: ["Psychometric & personality testing", "Aptitude & interest mapping", "1-on-1 career counseling sessions", "Industry exposure talks", "Career path validation & goal setting"],
    gains: ["Crystal clear career vision", "Confidence in choices", "Studies aligned to goals", "Reduced anxiety"],
    bonus: "Each student receives a personalized Career Blueprint Report to reference throughout their college journey and beyond." },
  { num: "02", icon: Map, title: "Career Roadmap", desc: "Structured Success Pathways for IT, Non-IT & More",
    whatItIs: "Customized, milestone-based roadmaps for IT, Non-IT, Government jobs, and higher studies with timeline-based skill plans and regular mentor check-ins.",
    whyItMatters: "Without a clear roadmap students waste years on irrelevant activities. A structured plan converts ambition into measurable, achievable milestones.",
    syllabus: ["Custom career track roadmaps", "Milestone & timeline planning", "Skill priority identification", "Progress tracking system", "Study plan integration"],
    gains: ["Clear action steps", "Time-bound skill building", "Measurable progress", "Better time management"],
    bonus: "Monthly 1-on-1 progress reviews with a dedicated mentor to keep every student on track." },
  { num: "03", icon: Brain, title: "Aptitude Mastery", desc: "Logical Reasoning, Quant & Verbal Training",
    whatItIs: "Comprehensive training in logical reasoning, quantitative ability, and verbal skills with daily practice, shortcut techniques, and full-length mock tests.",
    whyItMatters: "90% of placement tests and entrance exams start with aptitude. Students who master this gain a decisive advantage over thousands of peers.",
    syllabus: ["Quantitative ability & arithmetic", "Logical reasoning & puzzles", "Verbal ability & reading comp", "Speed shortcuts & techniques", "Full-length mock tests & analysis"],
    gains: ["Improved speed & accuracy", "Higher placement success", "Personalized weakness reports", "Competitive exam confidence"],
    bonus: "Students see a minimum 25% improvement in mock aptitude test scores within 4 weeks or we extend training free of cost." },
  { num: "04", icon: Code, title: "DSA Domination", desc: "Data Structures & Algorithms for Top Companies",
    whatItIs: "In-depth training in Data Structures & Algorithms with live coding on real interview problems from Google, Amazon, and Microsoft, plus mock technical interviews.",
    whyItMatters: "Top companies shortlist candidates almost entirely on DSA. DSA-skilled candidates earn 40% higher starting salaries.",
    syllabus: ["Arrays, strings & hashing", "Trees, graphs & DP", "Complexity analysis", "Platform practice (LeetCode etc.)", "Mock technical interviews"],
    gains: ["Crack top-company interviews", "40% higher salary packages", "Systematic problem-solving", "Confidence to apply anywhere"],
    bonus: "Students practice on LeetCode, HackerRank & CodeChef — the exact platforms used in actual hiring funnels." },
  { num: "05", icon: Wrench, title: "Coding Excellence", desc: "Multi-Language Project-Based Programming",
    whatItIs: "Comprehensive programming training across Python, Java, C++, and JavaScript with project-based learning, live code reviews, and industry-standard workflows.",
    whyItMatters: "Coding is the fundamental literacy of the digital economy. Production-ready skills and a real project portfolio separate hired candidates from shortlisted ones.",
    syllabus: ["Python fundamentals & OOP", "Java & C++ essentials", "JavaScript & DOM manipulation", "Code review & best practices", "Git & SDLC fundamentals"],
    gains: ["Production-ready skills in 3+ languages", "Real GitHub portfolio", "SDLC understanding", "Open-source experience"],
    bonus: "Students leave with 3+ production-quality GitHub projects — ready to show any recruiter on demand." },
  { num: "06", icon: Globe, title: "Development Mastery", desc: "Web, Mobile & Game Development End-to-End",
    whatItIs: "End-to-end project development using React, Node.js, Flutter, and Unity. Students build, deploy, and host live applications accessible to anyone on the internet.",
    whyItMatters: "Real-world development experience increases employability by 45%. A live, deployed app in a portfolio speaks louder than any certificate.",
    syllabus: ["HTML/CSS to React frontend", "Node.js & REST APIs", "Flutter mobile development", "Unity game basics", "GitHub + deployment & hosting"],
    gains: ["Portfolio of live deployed apps", "Full-stack & mobile skills", "Freelance income potential", "Modern framework proficiency"],
    bonus: "Students graduate with deployed, publicly accessible apps they can share with recruiters via URL." },
  { num: "07", icon: Bot, title: "AI & Automation", desc: "ML Fundamentals, ChatGPT, Copilot & AutoGPT",
    whatItIs: "Hands-on AI project labs covering ML fundamentals, popular AI tools (ChatGPT, Copilot, AutoGPT), and automation workflow creation for real productivity gains.",
    whyItMatters: "AI is reshaping every industry. Students who work WITH AI will lead the next decade. Early AI fluency is a non-negotiable career asset.",
    syllabus: ["ML fundamentals & supervised learning", "AI tools: ChatGPT, Copilot, AutoGPT", "Hands-on ML project labs", "Automation workflow creation", "Responsible AI ethics"],
    gains: ["AI/ML project portfolio", "10x productivity using AI", "Higher market relevance", "Critical AI ethics thinking"],
    bonus: "Students using AI tools demonstrate 10x productivity in interviews — recruiters visibly notice and prefer them." },
  { num: "08", icon: Target, title: "Placement Prep", desc: "Mock Interviews, HR, GD & Salary Negotiation",
    whatItIs: "Comprehensive interview preparation: mock interviews with industry professionals, resume optimization, communication and body language training, and salary negotiation techniques.",
    whyItMatters: "Interview skills are the final gate to any job. Students with mock interview experience are 3x more likely to clear final rounds confidently.",
    syllabus: ["Technical mock interviews", "HR & behavioral questions", "Group discussion mastery", "Body language & communication", "Salary negotiation tactics"],
    gains: ["Interview confidence", "Professional communication", "GD leadership skills", "Negotiation ability"] },
  { num: "09", icon: Dumbbell, title: "Confidence Building", desc: "Communication, Leadership & Body Language",
    whatItIs: "Structured confidence-building workshops covering public speaking, leadership, body language, and interpersonal communication skills.",
    whyItMatters: "Technical skills without communication skills limit students' true potential. Confidence is the multiplier for every other skill.",
    syllabus: ["Public speaking practice", "Leadership exercises", "Body language training", "Interpersonal communication", "Positive mindset workshops"],
    gains: ["Enhanced self-confidence", "Better communication", "Leadership skills", "Positive mindset"] },
  { num: "10", icon: Rocket, title: "Startup Journey", desc: "Ideation, Business Models & Pitch Decks",
    whatItIs: "Introduction to entrepreneurship covering idea generation, business model creation, pitch deck building, and startup ecosystem navigation.",
    whyItMatters: "Entrepreneurial thinking is valued even in corporate jobs. Understanding business creates well-rounded professionals who can lead teams and drive innovation.",
    syllabus: ["Idea generation & validation", "Business model canvas", "Pitch deck creation", "Startup ecosystem overview", "Funding & investment basics"],
    gains: ["Entrepreneurial mindset", "Business understanding", "Pitch presentation skills", "Innovation thinking"] },
  { num: "11", icon: Star, title: "Personal Branding", desc: "Build Your Professional Digital Identity",
    whatItIs: "Strategic personal branding across digital platforms: creating a professional identity, content strategy, and thought leadership positioning.",
    whyItMatters: "In the digital age, your online presence IS your first impression. A strong personal brand attracts opportunities instead of chasing them.",
    syllabus: ["Brand identity creation", "Content strategy planning", "Social media optimization", "Thought leadership development", "Portfolio website building"],
    gains: ["Professional digital identity", "Content creation skills", "Online visibility", "Thought leadership"] },
  { num: "12", icon: GraduationCap, title: "Effective College Life", desc: "Time Management, Networking & Opportunities",
    whatItIs: "Comprehensive guide to maximizing college years: time management, extracurricular strategy, networking, and opportunity identification.",
    whyItMatters: "Most students waste their college years on unproductive activities. Strategic college life planning leads to better outcomes in placements and career growth.",
    syllabus: ["Time management systems", "Extracurricular strategy", "Networking techniques", "Internship hunting", "Opportunity identification"],
    gains: ["Better time management", "Strategic networking", "Internship opportunities", "Holistic development"] },
  { num: "13", icon: Hammer, title: "Hands-On Workshops", desc: "Live Project Building with Industry Mentors",
    whatItIs: "Intensive weekend workshops where students build real projects from scratch under the guidance of industry professionals with live code reviews.",
    whyItMatters: "Theory without practice is incomplete. Hands-on building with real mentors accelerates learning 5x faster than self-study.",
    syllabus: ["Weekend hackathon-style builds", "Industry mentor guidance", "Live code reviews", "Deployment & hosting", "Project documentation"],
    gains: ["Real project experience", "Industry mentor connections", "Deployed projects", "Team collaboration skills"] },
  { num: "14", icon: FileText, title: "Resume Building", desc: "ATS-Optimized Resumes That Get Callbacks",
    whatItIs: "Professional resume building workshops covering ATS optimization, keyword strategies, formatting best practices, and personalized reviews by HR professionals.",
    whyItMatters: "75% of resumes are rejected by ATS before a human even sees them. An optimized resume is the difference between getting an interview and getting ignored.",
    syllabus: ["ATS optimization techniques", "Keyword strategy", "Professional formatting", "Action verb usage", "HR professional review"],
    gains: ["ATS-optimized resume", "Higher callback rate", "Professional formatting", "Recruiter-ready profile"] },
  { num: "15", icon: Trophy, title: "Hackathon 101", desc: "Win Competitions & Build Real-World Solutions",
    whatItIs: "Complete hackathon preparation: team formation, problem-solving strategies, rapid prototyping, and pitch presentation for winning competitions.",
    whyItMatters: "Hackathon wins are resume gold. They demonstrate problem-solving, teamwork, and execution under pressure — skills every employer values.",
    syllabus: ["Team formation strategies", "Problem analysis frameworks", "Rapid prototyping techniques", "Pitch presentation skills", "Post-hackathon networking"],
    gains: ["Competition experience", "Rapid prototyping skills", "Team leadership", "Awards & recognition"] },
  { num: "16", icon: GithubIcon, title: "GitHub Essentials", desc: "Portfolio Building & Open-Source Contribution",
    whatItIs: "Complete GitHub guide for portfolio building and collaboration: account setup, repository management, version control workflows, and first open-source contribution.",
    whyItMatters: "GitHub is the professional CV for developers. An empty or disorganized profile is an automatic disadvantage — recruiters notice immediately.",
    syllabus: ["GitHub profile setup & optimization", "Repository creation & management", "Git version control essentials", "Pull requests & collaboration", "First open-source contribution"],
    gains: ["Professional GitHub portfolio", "Version control skills", "Open-source experience", "Enhanced recruiter visibility"],
    bonus: "Students make their first open-source contribution — a rare achievement that visibly stands out on any resume." },
  { num: "17", icon: LinkedinIcon, title: "LinkedIn Branding", desc: "All-Star Profile & Recruiter Engagement",
    whatItIs: "Strategic LinkedIn profile building and networking: profile optimization, keyword strategies, content creation, network building, and direct recruiter engagement.",
    whyItMatters: "LinkedIn is where 9 out of 10 recruiters find candidates. A powerful presence means jobs come to you — not the other way around.",
    syllabus: ["Profile optimization & keywords", "Professional headline & summary", "Content creation & posting", "Network building & engagement", "Direct recruiter outreach tactics"],
    gains: ["All-Star LinkedIn profile", "Inbound recruiter interest", "Expanded professional network", "Thought leadership"],
    bonus: "Students learn and practice direct recruiter messaging — a skill that has generated interviews within 48 hours." },
  { num: "18", icon: Frown, title: "Overcoming Fear", desc: "Eliminate Limiting Beliefs & Build Resilience",
    whatItIs: "Specialized program to identify and overcome fear of failure, rejection, and challenges through evidence-based exercises, peer support, and success mindset development.",
    whyItMatters: "Fear prevents capable students from applying, speaking up, or taking risks. Eliminating fear unlocks potential that no amount of skill training alone can replace.",
    syllabus: ["Fear identification & root causes", "Confidence-building exercises", "Rejection desensitization", "Success mindset frameworks", "Peer accountability systems"],
    gains: ["Freedom from limiting fear", "Courage to take challenges", "Improved self-esteem", "Resilience after setbacks"] },
  { num: "19", icon: Lightbulb, title: "Idea to Reality", desc: "Transform Concepts into Deployed Projects",
    whatItIs: "End-to-end support for converting ideas into tangible projects: validation, feasibility analysis, technical implementation guidance, project management, and public showcase.",
    whyItMatters: "Implementation ability separates dreamers from achievers. Students who have actually built something stand head and shoulders above those who haven't.",
    syllabus: ["Idea validation & feasibility", "MVP design & planning", "Technical implementation support", "Project management basics", "Demo day & feedback"],
    gains: ["Proven execution ability", "Project management skills", "Recognition as innovator", "Industry exposure"],
    bonus: "Best projects are featured in TechBuddySpace's demo day events with industry audience attendance and media coverage." },
];

const stats = [
  { value: "85%", label: "Placement Rate" },
  { value: "30%", label: "Higher Salary" },
  { value: "19", label: "Power Modules" },
  { value: "₹499", label: "Per Month" },
];

const crisisStats = [
  { value: "80%", desc: "Engineering grads lack industry-ready skills", source: "NASSCOM 2024" },
  { value: "65%", desc: "Students will work in jobs that don't exist yet", source: "World Econ. Forum" },
  { value: "90%", desc: "Placement tests start with Aptitude — most unprepared", source: "Industry Survey" },
  { value: "3/5", desc: "Graduates regret career choice due to lack of guidance", source: "India Career Study" },
];

const before = [
  "No clarity on career — applies randomly",
  "Resume plain, not ATS-friendly",
  "LinkedIn profile empty or incomplete",
  "Cannot solve basic coding problems",
  "Freezes in interviews due to nervousness",
  "No projects or practical experience",
];

const after = [
  "Crystal-clear career path — applies strategically",
  "ATS-optimized resume — recruiters call first",
  "All-Star LinkedIn with inbound messages",
  "Solves DSA problems on LeetCode confidently",
  "Handles interviews with calm preparation",
  "GitHub portfolio: 5+ live deployed projects",
];

const partnerships = [
  { icon: Shield, title: "MOU Strategic Partnership", desc: "Long-term institutional agreement with curriculum integration" },
  { icon: Hammer, title: "Innovation Lab & Tech Club", desc: "On-campus coding clubs with regular workshops" },
  { icon: Trophy, title: "Hackathon & Competition Hub", desc: "College hackathon organizing & inter-college competitions" },
  { icon: Target, title: "Placement Accelerator", desc: "Intensive placement modules with industry mock interviews" },
];

function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default function CampusToCareer() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [selectedModule, setSelectedModule] = useState<any | null>(null);

  // Email Proposal Dispatch Form States
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("HOD");
  const [collegeName, setCollegeName] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleSendEmailProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, role, collegeName, email }),
      });

      const data = await res.json();
      if (data.success) {
        setEmailSuccess(true);
      }
    } catch (err) {
      console.error(err);
      setEmailSuccess(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-[#d4a853] selection:text-black">
        <CustomCursor />

        {/* Header Navigation */}
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 text-[#d4a853]" />
              <span>Back to JM Creations</span>
            </Link>

            <div className="flex items-center gap-2">
              <Badge variant="gold">COLLEGE PARTNERSHIP PROGRAM</Badge>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PAMPHLET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4a853]/15 border border-[#d4a853]/40 text-[#d4a853] hover:bg-[#d4a853] hover:text-black font-mono text-xs font-bold transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Pamphlet</span>
              </a>

              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs text-[#d4a853] hover:text-white font-mono transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Proposal Email</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
          <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop" alt="Campus to Career" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
          </motion.div>
          
          {/* Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#d4a853]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#c8946e]/15 blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 text-center max-w-5xl mx-auto px-6"
          >
            <span className="inline-block mb-6 rounded-full border border-[#d4a853]/40 bg-[#d4a853]/10 px-5 py-2 text-xs font-mono font-bold text-[#d4a853] backdrop-blur-sm uppercase tracking-widest">
              College Partnership Program • AICTE & NEP 2020 Compliant
            </span>
            <h1 className="text-hero font-extrabold tracking-tight leading-[0.95] mb-6">
              <span className="text-white">Campus to</span>
              <br />
              <span className="gold-gradient-text">
                Career Catalyst
              </span>
            </h1>
            <p className="text-subheading text-zinc-300 max-w-2xl mx-auto mb-10">
              Transforming students into industry-ready professionals with 19 comprehensive modules for 2nd & 3rd year students.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-8 py-5 text-center min-w-[140px]"
                >
                  <div className="text-3xl font-mono font-black text-[#d4a853]">{s.value}</div>
                  <div className="text-xs text-zinc-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] text-black font-bold text-xs shadow-xl shadow-[#d4a853]/25 hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Dispatch College Proposal Email</span>
              </button>

              <a
                href={PAMPHLET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white/5 border border-[#d4a853]/40 text-[#d4a853] hover:bg-[#d4a853] hover:text-black font-bold text-xs shadow-xl transition-all inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Pamphlet & Catalogue</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Crisis Section */}
        <section className="py-28 px-6 bg-[#08080a] border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} className="text-center mb-20">
                <Badge variant="gold" className="mb-3">THE INDUSTRY GAP</Badge>
                <h2 className="text-heading font-extrabold text-white">
                  The Crisis in Higher Education
                </h2>
                <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm">
                  Why students need industry-level skill mapping beyond theoretical degrees to excel in modern placements.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {crisisStats.map((s) => (
                  <motion.div
                    key={s.value}
                    variants={fadeUp}
                    className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 hover:border-[#d4a853]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4a853]/15"
                  >
                    <div className="text-4xl font-mono font-black text-[#d4a853] mb-3">{s.value}</div>
                    <p className="text-zinc-200 text-xs mb-3 leading-relaxed">{s.desc}</p>
                    <span className="text-[10px] text-zinc-500 font-mono">— {s.source}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-28 px-6 relative border-t border-white/10">
          <div className="max-w-5xl mx-auto relative">
            <ParallaxSection>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
                <motion.div variants={fadeUp}>
                  <Badge variant="gold" className="mb-3">OUR METHODOLOGY</Badge>
                  <h2 className="text-heading font-extrabold text-white mb-4">Proven 4-Step Learning Engine</h2>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  {[
                    { icon: "📖", title: "LEARN", desc: "Theory made practical" },
                    { icon: "⚡", title: "PRACTICE", desc: "Real problem sets" },
                    { icon: "🔨", title: "BUILD", desc: "Live projects" },
                    { icon: "🏆", title: "COMPETE", desc: "Hackathons & jobs" },
                  ].map((step) => (
                    <motion.div
                      key={step.title}
                      variants={fadeUp}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 text-center hover:border-[#d4a853]/40 transition-all"
                    >
                      <span className="text-3xl mb-3 block">{step.icon}</span>
                      <h3 className="font-mono font-bold text-[#d4a853] text-sm">{step.title}</h3>
                      <p className="text-xs text-zinc-400 mt-2">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mt-10 text-xs font-mono text-zinc-400">
                  <span>🤝 Peer Learning Support</span>
                  <span>💬 24/7 Mentor Guidance</span>
                  <span>🎖 Badges, Coins & Leaderboards</span>
                </motion.div>
              </motion.div>
            </ParallaxSection>
          </div>
        </section>

        {/* 19 Modules Grid */}
        <section className="py-28 px-6 bg-[#08080a] border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-20">
                <Badge variant="gold" className="mb-3">CURRICULUM</Badge>
                <h2 className="text-heading font-extrabold text-white">19 Power-Packed Modules</h2>
                <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-xs">
                  Technical + Soft skills + Entrepreneurship + Placement prep — all in one program
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {modules.map((m) => (
                  <motion.div
                    key={m.num}
                    variants={fadeUp}
                    onClick={() => setSelectedModule(m)}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:border-[#d4a853]/50 transition-all hover:bg-white/[0.06] cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-zinc-500">{m.num}</span>
                      <m.icon className="w-5 h-5 text-[#d4a853] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-white text-sm">{m.title}</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{m.desc}</p>
                    <span className="text-[11px] font-mono text-[#d4a853] mt-3 inline-block group-hover:translate-x-1 transition-transform">
                      Click for details →
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Student Transformation */}
        <section className="py-28 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-16">
                <Badge variant="gold" className="mb-3">STUDENT TRANSFORMATION</Badge>
                <h2 className="text-heading font-extrabold text-white">Before vs. After Impact</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeUp} className="rounded-3xl border border-red-500/30 bg-red-500/5 backdrop-blur-md p-8">
                  <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Before Program
                  </h3>
                  <ul className="space-y-4 text-xs">
                    {before.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-300">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp} className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-md p-8">
                  <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> After Program
                  </h3>
                  <ul className="space-y-4 text-xs">
                    {after.map((a, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-200 font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="py-28 px-6 bg-[#08080a] border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-16">
                <Badge variant="gold" className="mb-3">COLLABORATION</Badge>
                <h2 className="text-heading font-extrabold text-white">Flexible Institutional Models</h2>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnerships.map((p, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 text-center hover:border-[#d4a853]/40 transition-all"
                  >
                    <p.icon className="w-8 h-8 text-[#d4a853] mx-auto mb-4" />
                    <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 px-6 bg-[#050507]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-bold text-[#d4a853] text-sm">JM Creations • Campus to Career Catalyst</span>
            <p className="text-xs text-zinc-400 text-center">
              "We don't just prepare students for jobs — we prepare them to excel in their careers."
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="w-4 h-4 text-zinc-400 hover:text-[#d4a853] transition-colors" />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-4 h-4 text-zinc-400 hover:text-[#d4a853] transition-colors" />
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <GlobeIcon className="w-4 h-4 text-zinc-400 hover:text-[#d4a853] transition-colors" />
              </Link>
            </div>
          </div>
        </footer>

        {/* Selected Module Detail Modal */}
        <ModuleModal module={selectedModule} onClose={() => setSelectedModule(null)} />

        {/* Email Proposal Dispatch Modal using shadcn Dialog */}
        <Dialog open={isEmailModalOpen} onOpenChange={setIsEmailModalOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <Badge variant="gold" className="w-fit mb-1">OFFICIAL COLLEGE PROPOSAL DISPATCH</Badge>
              <DialogTitle>Send Proposal Email via Gmail</DialogTitle>
            </DialogHeader>

            {emailSuccess ? (
              <div className="py-8 flex flex-col items-center text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
                <h4 className="text-base font-bold text-white">Proposal Dispatched Successfully!</h4>
                <p className="text-xs text-zinc-400 pt-1 max-w-xs">
                  The exact Campus to Career Catalyst proposal email has been delivered to <strong>{email}</strong>.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href={PAMPHLET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white hover:bg-white/20"
                  >
                    Download Pamphlet PDF
                  </a>
                  <Button
                    variant="gold"
                    onClick={() => {
                      setEmailSuccess(false);
                      setIsEmailModalOpen(false);
                      setEmail("");
                      setFirstName("");
                      setCollegeName("");
                    }}
                  >
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendEmailProposal} className="space-y-4 my-2">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1 font-mono">HOD / Educator Name *</label>
                  <Input
                    type="text"
                    required
                    placeholder="Dr. Rajesh Kumar"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-mono">Designation *</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full h-11 px-3 py-2 text-xs bg-[#121216] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#d4a853]"
                    >
                      <option value="HOD">HOD</option>
                      <option value="TPO">TPO / Placement Head</option>
                      <option value="Principal">Principal</option>
                      <option value="Dean / Director">Dean / Director</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-mono">College Name *</label>
                    <Input
                      type="text"
                      required
                      placeholder="Anna University / IIT..."
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1 font-mono">Official Email Address *</label>
                  <Input
                    type="email"
                    required
                    placeholder="hod.cse@college.edu.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSending}>
                  <Send className="w-4 h-4 mr-2" />
                  <span>{isSending ? "Sending Email Template..." : "Send Proposal Email via Gmail"}</span>
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </SmoothScrollProvider>
  );
}
