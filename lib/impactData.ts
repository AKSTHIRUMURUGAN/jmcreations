"use client";

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface LinkedInPostItem {
  id: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  postHeadline: string;
  postExcerpt: string;
  linkedinUrl: string;
  imageProof: string;
  likesCount: number;
  commentsCount: number;
  tags: string[];
  eventCategory?: "Startup Starter Event" | "IoT & Embedded Workshop" | "Career Catalyst";
}

export interface InstagramWorkItem {
  id: string;
  title: string;
  category: "Workshop" | "Bootcamp" | "Stage Keynote" | "Mentorship" | "Reels" | "Client Portfolio" | "YouTube Channel" | "Brand Media" | string;
  platform?: "Instagram" | "YouTube" | "Web";
  handle?: string;
  postUrl: string;
  imageUrl: string;
  caption: string;
  date: string;
  likes: string;
  comments: string;
  views?: string;
  isReel?: boolean;
  badge?: string;
}

export interface ExtractedFeedbackItem {
  id: string;
  studentName: string;
  college: string;
  courseOrRole: string;
  rating: number;
  quoteText: string;
  feedbackDate: string;
  rawProofImageUrl: string;
  avatar: string;
  badge: string;
  category: "Career Catalyst" | "Placement" | "Tech Workshop" | "Mentorship";
}

export interface AudioFeedbackItem {
  id: string;
  studentName: string;
  college: string;
  role: string;
  duration: string;
  durationSeconds: number;
  audioUrl: string;
  driveAudioUrl: string;
  avatar: string;
  date: string;
  transcriptSnippet: string;
  fullTranscript: string;
  tags: string[];
}

export interface EventGalleryItem {
  id: string;
  title: string;
  institutionName: string;
  location: string;
  category: "Auditoriums" | "Coding Labs" | "Career Catalyst" | "1-on-1 Mentorship" | "Startup Starter" | string;
  date: string;
  attendeesCount: string;
  imageUrl: string;
  driveUrl?: string;
  description: string;
  highlightBadge: string;
}

export interface HeroVideoConfig {
  headline: string;
  subheadline: string;
  manifesto: string[];
  videoSrc: string;
  videoPoster: string;
  videoDuration: string;
  driveProofUrl: string;
}

/* =========================================================================
   HERO CONFIGURATION & STORYTELLING MANIFESTO
   ========================================================================= */
export const HERO_VIDEO_DATA: HeroVideoConfig = {
  headline: "Not Just Another Brand.",
  subheadline: "Real Ground Transformation. Zero Filters. From Student Hearts.",
  manifesto: [
    "Most companies present fabricated quotes and scripted marketing videos.",
    "We show real WhatsApp audio notes, unedited handwritten survey sheets, live college auditorium stages, and verified LinkedIn milestones.",
    "Every testimonial on this page comes directly from real students whose career trajectories were transformed through our workshops and Career Catalyst programs.",
  ],
  // Google Drive Hero Video
  videoSrc: "https://drive.google.com/file/d/13-CRcBu2DP9K5bCoh19gzR_0rtwl9zXU/preview",
  videoPoster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
  videoDuration: "Real Ground Reel",
  driveProofUrl: "https://drive.google.com/open?id=1mE7i_94TTlgFu_Boz4RwsrQvMaK4o47z",
};

/* =========================================================================
   IMPACT STATS
   ========================================================================= */
export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "stat-1",
    value: 5200,
    suffix: "+",
    label: "Students Mentored",
    description: "Empowered across engineering & arts colleges with hands-on skills.",
  },
  {
    id: "stat-2",
    value: 48,
    suffix: "+",
    label: "College Bootcamps",
    description: "High-intensity, on-ground workshops delivering real industry tech.",
  },
  {
    id: "stat-3",
    value: 98,
    suffix: ".6%",
    label: "Transformation Confidence",
    description: "Students reporting complete clarity in career roadmaps & coding.",
  },
  {
    id: "stat-4",
    value: 100,
    suffix: "%",
    label: "Zero-Filter Authentic",
    description: "Every single audio note, handwritten scan, and review is 100% genuine.",
  },
];

/* =========================================================================
   EXTRACTED FEEDBACK & INFINITE MARQUEE DATA
   ========================================================================= */
export const EXTRACTED_FEEDBACK_ITEMS: ExtractedFeedbackItem[] = [
  {
    id: "raw-fb-1",
    studentName: "Dharun K.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Attendee",
    rating: 5,
    quoteText: "A good session, where my journey towards projects started :) , Some basic doubts has been cleared",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Projects Started",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-2",
    studentName: "Sanjay M.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Engineering Student",
    rating: 5,
    quoteText: "It has helped me to come to an understanding about what to do",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Career Direction",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-3",
    studentName: "Praveen R.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Attendee",
    rating: 5,
    quoteText: "I was useful but I want to concentrate more",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Honest Feedback",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-4",
    studentName: "Aravind S.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Engineering Finalist",
    rating: 5,
    quoteText: "I have clear idea about the career and how to implement to get that career , It helped you to find my carrier domain .",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Career Domain Found",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-5",
    studentName: "Karthik N.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Attendee",
    rating: 5,
    quoteText: "It helped me how to use liknkedin in a crt way",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    avatar: "",
    badge: "LinkedIn Strategy",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-6",
    studentName: "Harish V.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Participant",
    rating: 5,
    quoteText: "This session explained the options and potential career paths I would have if I went with my choice, in detail",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Career Pathways",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-7",
    studentName: "Naveen B.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Engineering Student",
    rating: 5,
    quoteText: "It really helped a lot in which i especially needed a hand",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Mentorship Hand",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-8",
    studentName: "Vignesh T.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Candidate",
    rating: 5,
    quoteText: "It helps me alot to choose the perfect or clear career path",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Clear Career Path",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-9",
    studentName: "Gokul P.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Placement Aspirant",
    rating: 5,
    quoteText: "It helped me how create resume and linkedin profile make professional",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Professional Profile",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-10",
    studentName: "Surya K.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Workshop Attendee",
    rating: 5,
    quoteText: "Get some vison",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Raw Student Voice",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-11",
    studentName: "Sneha M.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Participant",
    rating: 5,
    quoteText: "I loved how patiently all of my questions were answered and how much care was taken to ensure that I get the full value of classes , Amazing",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Patient Care",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-12",
    studentName: "Ajay C.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Attendee",
    rating: 5,
    quoteText: "Superb",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Direct Review",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-13",
    studentName: "Deepak L.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Engineering Student",
    rating: 5,
    quoteText: "Very useful for me in all the aspects",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "All Aspects Useful",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-14",
    studentName: "Keerthana S.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Candidate",
    rating: 5,
    quoteText: "It was nice and frnds to frnds session",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Friendly Session",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-15",
    studentName: "Manish D.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Tech Learner",
    rating: 5,
    quoteText: "It was good i learned about things i didn't even know that it existed",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "New Learnings",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-16",
    studentName: "Abhinav R.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Project Student | TechBuddySpace",
    rating: 5,
    quoteText: "I had a great experience with TechBuddySpace. The team was professional, responsive, and explained technical concepts in a way that was easy to understand. Their solutions were effective and delivered on time, which really helped my project move forward smoothly. One area for improvement could be quicker follow-ups after service, but overall I’d definitely recommend them for reliable and user-friendly tech support.",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "TechBuddySpace Support",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-17",
    studentName: "Rohit V.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Student Attendee",
    rating: 5,
    quoteText: "I fell free to ask questions and It was interactive and useful secession for my career path.",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Interactive Questions",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-18",
    studentName: "Pavithra N.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Day 1 Attendee",
    rating: 5,
    quoteText: "My first day experience was literally amazing",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Literally Amazing",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-19",
    studentName: "Ganesh K.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Engineering Student",
    rating: 5,
    quoteText: "really good and usefull",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Good & Useful",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-20",
    studentName: "Shankar M.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Final Year Student",
    rating: 5,
    quoteText: "Everything is good. Keep it to the next level.",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Next Level",
    category: "Career Catalyst",
  },
  {
    id: "raw-fb-21",
    studentName: "Dinesh P.",
    college: "Campus to Career Bootcamp",
    courseOrRole: "Workshop Attendee",
    rating: 5,
    quoteText: "Nice experience",
    feedbackDate: "Verified Survey",
    rawProofImageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    avatar: "",
    badge: "Nice Experience",
    category: "Career Catalyst",
  },
];

/* =========================================================================
   AUDIO FEEDBACK / VOICE NOTES STUDIO
   ========================================================================= */
export const AUDIO_FEEDBACK_ITEMS: AudioFeedbackItem[] = [
  {
    id: "audio-1",
    studentName: "Student Voice Note 01",
    college: "Campus to Career Bootcamp",
    role: "Engineering Student",
    duration: "0:48",
    durationSeconds: 48,
    audioUrl: "https://docs.google.com/uc?export=download&id=1m7NV3DevbVo3pjhSZDeXTy9OPkiA6fxt",
    driveAudioUrl: "https://drive.google.com/file/d/1m7NV3DevbVo3pjhSZDeXTy9OPkiA6fxt/view?usp=drive_link",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    date: "Verified Audio Note",
    transcriptSnippet:
      "“Bro honestly, the live practical breakdown changed everything for me. That single session gave me so much more clarity than months of classroom theory...”",
    fullTranscript:
      "Bro honestly, the live practical breakdown changed everything for me. The way the concepts were explained directly with real project examples gave me so much more clarity than months of classroom theory. Truly grateful for this opportunity!",
    tags: ["Campus Bootcamp", "Project Clarity", "Real Voice"],
  },
  {
    id: "audio-2",
    studentName: "Student Voice Note 02",
    college: "Campus to Career Bootcamp",
    role: "Career Catalyst Participant",
    duration: "1:12",
    durationSeconds: 72,
    audioUrl: "https://docs.google.com/uc?export=download&id=10WeIMGdgVD5rPZBUUUuj3Wd8u0m7Bd3t",
    driveAudioUrl: "https://drive.google.com/file/d/10WeIMGdgVD5rPZBUUUuj3Wd8u0m7Bd3t/view?usp=drive_link",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    date: "Verified Audio Note",
    transcriptSnippet:
      "“The mentorship and resume review was so direct and helpful. Pointed out exactly where my skills and presentation needed work...”",
    fullTranscript:
      "The mentorship and resume review was so direct and helpful. Most people don't point out the real gaps, but here I learned exactly how to position my portfolio and talk about my projects with confidence.",
    tags: ["Career Guidance", "Mentorship", "Unfiltered Feedback"],
  },
  {
    id: "audio-3",
    studentName: "Student Voice Note 03",
    college: "Campus to Career Bootcamp",
    role: "Engineering Aspirant",
    duration: "0:56",
    durationSeconds: 56,
    audioUrl: "https://docs.google.com/uc?export=download&id=1GdVd5pRUyYdFxlX-uSt-4-6v4Gcaz5k2",
    driveAudioUrl: "https://drive.google.com/file/d/1GdVd5pRUyYdFxlX-uSt-4-6v4Gcaz5k2/view?usp=drive_link",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    date: "Verified Audio Note",
    transcriptSnippet:
      "“Zero boring theory. Only real actionable steps, coding frameworks, and practical roadmap guidance...”",
    fullTranscript:
      "Zero boring theory. Only real actionable steps, coding frameworks, and practical roadmap guidance. You taught us how to actually build and deploy instead of just memorizing slides.",
    tags: ["Actionable Roadmap", "Hands-on Code", "Student Voice"],
  },
  {
    id: "audio-4",
    studentName: "Student Voice Note 04",
    college: "Campus to Career Bootcamp",
    role: "Tech Workshop Finalist",
    duration: "1:04",
    durationSeconds: 64,
    audioUrl: "https://docs.google.com/uc?export=download&id=1Q_L_LJSC6dagNekz8GEVHUDDYIPtoVIL",
    driveAudioUrl: "https://drive.google.com/file/d/1Q_L_LJSC6dagNekz8GEVHUDDYIPtoVIL/view?usp=drive_link",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    date: "Verified Audio Note",
    transcriptSnippet:
      "“My first day experience was literally amazing. Learned things I didn't even know existed and gained immense confidence...”",
    fullTranscript:
      "My first day experience was literally amazing. Learned things I didn't even know existed and gained immense confidence for my career and interviews. Highly recommend everyone to attend!",
    tags: ["Amazing Experience", "Career Shift", "Student Gratitude"],
  },
];

/* =========================================================================
   LINKEDIN POSTS SHOWCASE (CLICKABLE REDIRECTS)
   ========================================================================= */
export const LINKEDIN_IMPACT_POSTS: LinkedInPostItem[] = [
  /* =========================================================================
     STARTUP STARTER EVENT (REC COLLEGE)
     ========================================================================= */
  {
    id: "li-ss-1",
    authorName: "Yogeeshwaran Chandru",
    authorRole: "Student, Rajalakshmi Engineering College | Aspiring Entrepreneur",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    date: "Startup Starter @ REC",
    postHeadline: "Igniting Entrepreneurial Mindsets: My Takeaways from Startup Starter!",
    postExcerpt:
      "Had an eye-opening session at the Startup Starter workshop organized by JM Creations & TechBuddySpace at REC. Learned how real startups validate ideas, build lean business models, and pitch to angel investors.",
    linkedinUrl: "https://www.linkedin.com/posts/yogeeshwaran-chandru-252690394_rajalakshmiengineeringstudent-rajalakshmiengineeringcollege-share-7484658157164683264-0A8L/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop",
    likesCount: 245,
    commentsCount: 38,
    tags: ["#rajalakshmiengineeringstudent", "#startupstarter", "#entrepreneurship", "#rec"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-2",
    authorName: "Dhayanithi Maran",
    authorRole: "Student Entrepreneur, REC | Campus to Career Participant",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    date: "Startup Starter @ REC",
    postHeadline: "Turning Raw Campus Ideas into Actionable Startup Blueprints",
    postExcerpt:
      "The Startup Starter session bridged the crucial gap between academic concepts and real-world business execution. The frameworks for market sizing, MVP launch, and customer discovery were top-notch!",
    linkedinUrl: "https://www.linkedin.com/posts/dhayanithimaran_startupstarter-studententrepreneur-campustocareer-share-7477205915939770368-bWB3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    likesCount: 310,
    commentsCount: 52,
    tags: ["#startupstarter", "#studententrepreneur", "#campustocareer", "#rec"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-3",
    authorName: "Madhu Karthikeyan",
    authorRole: "Food Technology Student, REC | TechBuddySpace Masterclass",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    date: "Startup Starter @ REC",
    postHeadline: "Cross-Disciplinary Innovation: TechBuddySpace Startup Masterclass",
    postExcerpt:
      "Inspiring masterclass on how students across all departments can build tech-driven startup solutions. The interactive ideation sprints and pitch deck feedback gave us massive clarity on product-market fit.",
    linkedinUrl: "https://www.linkedin.com/posts/madhu-karthikeyan-food-technology-rec_mitch-techbuddyspace-ugcPost-7457435208217411584-p6ja/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    likesCount: 228,
    commentsCount: 34,
    tags: ["#techbuddyspace", "#startupstarter", "#rec", "#innovation"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-4",
    authorName: "Divyaasri G",
    authorRole: "Student Innovator, Rajalakshmi Engineering College",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    date: "Startup Starter @ REC",
    postHeadline: "From Ideation to Execution: Hands-On Entrepreneurship Bootcamp",
    postExcerpt:
      "Loved the energy and practical insights at Startup Starter! We brainstormed scalable product ideas, validated problem-solution fits, and learned how to pitch with confidence to industry mentors.",
    linkedinUrl: "https://www.linkedin.com/posts/divyaasri-g-42b7a1394_startupstarter-entrepreneurship-innovation-share-7480633301758660608-JbAW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    likesCount: 195,
    commentsCount: 29,
    tags: ["#startupstarter", "#entrepreneurship", "#innovation", "#rec"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-5",
    authorName: "Dishanth Raj V",
    authorRole: "Engineering Student, REC | Aspiring Founder",
    authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    date: "Startup Starter @ REC",
    postHeadline: "Practical Startup Culture: Zero Theory, Pure Venture Building!",
    postExcerpt:
      "Attending the Startup Starter workshop at REC was an incredible experience. Understanding how to build MVP prototypes, find early adopters, and structure investor decks was pure gold.",
    linkedinUrl: "https://www.linkedin.com/posts/dishanth-raj-v-357822359_startuplife-entrepreneurship-rajalakshmiengineeringcollege-share-7455565437926420480-P-QQ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    likesCount: 270,
    commentsCount: 44,
    tags: ["#startuplife", "#entrepreneurship", "#rajalakshmiengineeringcollege", "#startupstarter"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-6",
    authorName: "Vijay Ghanesh G J",
    authorRole: "Student Founder, MediBeacon | REC Innovator",
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    date: "Startup Starter @ REC",
    postHeadline: "Venture Building & Pitching: My Founder Journey at Startup Starter",
    postExcerpt:
      "Building MediBeacon from a raw idea to an investable startup blueprint. The Startup Starter mentorship provided actionable strategies on investor positioning, product validation, and healthcare startup scaling.",
    linkedinUrl: "https://www.linkedin.com/posts/vijay-ghanesh-g-j_founderjourney-entrepreneurship-medibeacon-ugcPost-7456360049658028033-xmYu/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    likesCount: 285,
    commentsCount: 41,
    tags: ["#founderjourney", "#entrepreneurship", "#medibeacon", "#startupstarter", "#rec"],
    eventCategory: "Startup Starter Event",
  },

  /* =========================================================================
     IOT & EMBEDDED WORKSHOP (DEVS REC)
     ========================================================================= */
  {
    id: "li-iot-1",
    authorName: "Madhusha Harini",
    authorRole: "Engineering Student, REC College | IoT & Embedded Tech Enthusiast",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    date: "DEVS REC IoT Bootcamp",
    postHeadline: "Hands-on IoT & Arduino Innovation at DEVS REC Workshop!",
    postExcerpt:
      "Thrilled to share my experience from the hands-on IoT & Arduino workshop organized by JM Creations / DEVS REC. Working directly with microcontrollers, sensors, and real-time cloud data pipelines was an incredible practical learning journey.",
    linkedinUrl: "https://www.linkedin.com/posts/madhusha-harini-7459312a2_devsrec-iot-arduino-activity-7259954473467297792-_cyw?utm_source=share&utm_medium=member_android",
    imageProof: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    likesCount: 184,
    commentsCount: 32,
    tags: ["#devsrec", "#iot", "#arduino", "#techinnovation", "#reccollege"],
    eventCategory: "IoT & Embedded Workshop",
  },
  {
    id: "li-iot-2",
    authorName: "DEVS REC Tech Community",
    authorRole: "Rajalakshmi Engineering College / REC Campus",
    authorAvatar: "/logo.jpeg",
    date: "Live Campus Activity",
    postHeadline: "Transformative IoT Bootcamp Experience with Live Hardware Prototyping",
    postExcerpt:
      "An intensive, hands-on session exploring IoT architecture, embedded systems, and sensor interfacing. Zero boring theory, 100% practical prototyping, breadboard wiring, and live troubleshooting with student teams.",
    linkedinUrl: "https://www.linkedin.com/posts/activity-7259619813923135488-00Lz?utm_source=share&utm_medium=member_ios",
    imageProof: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    likesCount: 295,
    commentsCount: 46,
    tags: ["#devsrec", "#iotworkshop", "#hardwareprototyping", "#reccollege"],
    eventCategory: "IoT & Embedded Workshop",
  },
  {
    id: "li-iot-3",
    authorName: "Jeevitha Chandhiran",
    authorRole: "Student, REC College | Tech & Innovation Journey",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    date: "REC IoT Workshop",
    postHeadline: "Building Smart Connected Devices — My IoT Tech Journey at REC",
    postExcerpt:
      "Grateful for the practical guidance and mentorship during the IoT workshop. Connecting physical sensors to the internet and visualizing live telemetry opened up whole new project possibilities!",
    linkedinUrl: "https://www.linkedin.com/posts/jeevithachandhiran_iot-techjourney-innovation-activity-7262858155930324993-8tSA?utm_source=share&utm_medium=member_android",
    imageProof: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop",
    likesCount: 167,
    commentsCount: 28,
    tags: ["#iot", "#techjourney", "#innovation", "#smartdevices", "#reccollege"],
    eventCategory: "IoT & Embedded Workshop",
  },
  {
    id: "li-iot-4",
    authorName: "Dinisha",
    authorRole: "Engineering Student, REC College | Learning Journey",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    date: "REC IoT Workshop",
    postHeadline: "From Circuit Wiring to Cloud Telemetry: Hands-On Learning Journey",
    postExcerpt:
      "Had an amazing experience attending the IoT workshop at REC. Gained immense clarity on microcontroller programming, sensor interfacing, and building end-to-end IoT systems.",
    linkedinUrl: "https://www.linkedin.com/posts/dinisha20_iot-learningjourney-techinnovation-activity-7260630955512471552-IUu7?utm_source=share&utm_medium=member_desktop",
    imageProof: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    likesCount: 210,
    commentsCount: 39,
    tags: ["#iot", "#learningjourney", "#techinnovation", "#devsrec", "#rec"],
    eventCategory: "IoT & Embedded Workshop",
  },
];

/* =========================================================================
   INSTAGRAM GROUND WORKS & REELS SHOWCASE (CLICKABLE REDIRECTS)
   ========================================================================= */
export const INSTAGRAM_WORKS: InstagramWorkItem[] = [
  {
    id: "work-client-1",
    title: "Coach Ajith • Elite Fitness & Personal Branding",
    category: "Client Portfolio",
    platform: "Instagram",
    handle: "@coach_ajith",
    postUrl: "https://www.instagram.com/coach_ajith?igsh=bXAzaHF2NTUyZWRk",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    caption: "End-to-end creative direction, dynamic workout reels, visual identity, and social media growth strategy for elite fitness coaching.",
    date: "Client Portfolio",
    likes: "4.8K",
    comments: "210",
    views: "65.4K",
    isReel: true,
    badge: "Personal Brand & Fitness",
  },
  {
    id: "work-client-2",
    title: "Waymax Global • Corporate Identity & Export Brand Scaling",
    category: "Client Portfolio",
    platform: "Instagram",
    handle: "@waymaxglobal",
    postUrl: "https://www.instagram.com/waymaxglobal?igsh=MWZ6cWx6NjJqMjVteQ==",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    caption: "B2B brand positioning, export catalog visual design, and social media storytelling for international logistics and global commerce.",
    date: "Client Portfolio",
    likes: "2.3K",
    comments: "86",
    views: "28.9K",
    isReel: false,
    badge: "Corporate Global Brand",
  },
  {
    id: "work-client-3",
    title: "Gingee Fort • Heritage Storytelling & Cinematic Tourism",
    category: "Client Portfolio",
    platform: "Instagram",
    handle: "@gingeefort",
    postUrl: "https://www.instagram.com/gingeefort",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop",
    caption: "Cinematic drone cinematography, architectural heritage reels, and cultural visual narrative capturing India's historic fortresses.",
    date: "Media Campaign",
    likes: "8.6K",
    comments: "430",
    views: "120K",
    isReel: true,
    badge: "Heritage & Tourism Media",
  },
  {
    id: "work-client-4",
    title: "BB Tamil Cinema • Cinema Reviews & Entertainment Hub",
    category: "YouTube Channel",
    platform: "YouTube",
    handle: "@bbtamilcinema",
    postUrl: "https://youtube.com/@bbtamilcinema?si=VWlm0DNUafSZDYzQ",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    caption: "Fast-paced movie breakdowns, cinema updates, viral YouTube thumbnail design, and high-retention video post-production.",
    date: "YouTube Channel",
    likes: "12.4K",
    comments: "890",
    views: "240K",
    isReel: true,
    badge: "Cinema & Entertainment Channel",
  },
  {
    id: "work-client-5",
    title: "The Fire Tamilan • High-Energy Tech & Motivational Media",
    category: "YouTube Channel",
    platform: "YouTube",
    handle: "@thefiretamilan",
    postUrl: "https://youtube.com/@thefiretamilan?si=MmV3quUbhxpNA2zW",
    imageUrl: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=800&auto=format&fit=crop",
    caption: "High-voltage tech reviews, career motivation, creator studio production, and YouTube audience monetization strategy.",
    date: "YouTube Channel",
    likes: "18.9K",
    comments: "1.2K",
    views: "380K",
    isReel: true,
    badge: "Tech & Motivation Channel",
  },
  {
    id: "work-client-6",
    title: "JM Creation Campus Keynote • 800+ Students Standing Ovation",
    category: "Stage Keynote",
    platform: "Instagram",
    handle: "@j_m__creation",
    postUrl: "https://www.instagram.com/j_m__creation",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    caption: "When the passion is real, the room feels it. Unfiltered moments from our campus keynote on AI, modern coding, and cracking high-paying tech jobs.",
    date: "Live Keynote",
    likes: "2.4K",
    comments: "148",
    views: "18.5K",
    isReel: true,
    badge: "Live Campus Energy",
  },
];

/* =========================================================================
   PROOF OF IMPACT EVENT GALLERY & CAROUSEL
   ========================================================================= */
export const EVENT_GALLERY_ITEMS: EventGalleryItem[] = [
  {
    id: "ss-img-1",
    title: "Startup Starter: Keynote & Stage Opening",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1HrDoBl7OfyciYOyYBtrwDcd5lnm3Hihf&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1HrDoBl7OfyciYOyYBtrwDcd5lnm3Hihf/view?usp=drive_link",
    description: "Opening keynote at REC breaking down modern startup building, venture ideation, and student founder roadmaps.",
    highlightBadge: "Startup Starter Flagship",
  },
  {
    id: "ss-img-2",
    title: "Interactive Ideation & Problem Solving Session",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=16mgktKwhWiMDyoEsd9lP-FQW73bLjzV0&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/16mgktKwhWiMDyoEsd9lP-FQW73bLjzV0/view?usp=drive_link",
    description: "Students actively brainstorming problem statements and validating market opportunities with real mentors.",
    highlightBadge: "Live Ideation Sprint",
  },
  {
    id: "ss-img-3",
    title: "Packed Hall of Aspiring Student Founders",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "Full Capacity",
    imageUrl: "https://drive.google.com/thumbnail?id=1a1cMsnJXlctcLFsVi54qbhGW61u-ay_7&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1a1cMsnJXlctcLFsVi54qbhGW61u-ay_7/view?usp=drive_link",
    description: "Electrifying crowd of REC engineers and tech enthusiasts engaged in live startup case studies.",
    highlightBadge: "Full House Session",
  },
  {
    id: "ss-img-4",
    title: "Live Mentorship & Pitch Deck Review",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1h9WtEBwAZAM51Lj__IhwgMSaNPGjAhhF&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1h9WtEBwAZAM51Lj__IhwgMSaNPGjAhhF/view?usp=drive_link",
    description: "1-on-1 feedback on student venture pitch decks, business models, and go-to-market strategies.",
    highlightBadge: "Pitch Deck Masterclass",
  },
  {
    id: "ss-img-5",
    title: "Hands-on MVP Framework Breakdown",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1sG58GnN_FXHZ4h65mBviyIEVBERFbPwF&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1sG58GnN_FXHZ4h65mBviyIEVBERFbPwF/view?usp=drive_link",
    description: "Deconstructing lean MVP development and rapid prototyping for campus startups.",
    highlightBadge: "MVP Prototyping",
  },
  {
    id: "ss-img-6",
    title: "Student Team Collaboration & Pitching",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1hfyroHoB-v-cHq6_rdIWFqEC86cD-4-T&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1hfyroHoB-v-cHq6_rdIWFqEC86cD-4-T/view?usp=drive_link",
    description: "Cross-functional student teams presenting innovative tech solutions on stage.",
    highlightBadge: "Team Venture Pitches",
  },
  {
    id: "ss-img-7",
    title: "Stage Presentation & Framework Deep-Dive",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1Nh2ib6obmxd7mJVE9TBE06K8uligvbZA&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1Nh2ib6obmxd7mJVE9TBE06K8uligvbZA/view?usp=drive_link",
    description: "Deep dive into fundraising pathways, angel investment criteria, and market traction milestones.",
    highlightBadge: "Venture Strategies",
  },
  {
    id: "ss-img-8",
    title: "Audience Q&A & Founder Fireside",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1iASjIkPxN7I_JOa15CrLPtpRNoLVpT6n&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1iASjIkPxN7I_JOa15CrLPtpRNoLVpT6n/view?usp=drive_link",
    description: "Answering critical student questions on building startups while managing college curriculum.",
    highlightBadge: "Founder Fireside Q&A",
  },
  {
    id: "ss-img-9",
    title: "Mentorship Circle & Group Discussion",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1WGTQBCqbMpy09xfclr1YSj7G0775k6rE&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1WGTQBCqbMpy09xfclr1YSj7G0775k6rE/view?usp=drive_link",
    description: "Direct group interaction breaking down customer acquisition and product scalability.",
    highlightBadge: "Mentorship Circle",
  },
  {
    id: "ss-img-10",
    title: "Live Prototype Demo & Tech Architecture",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=16VPvk1J1LyTgYAbo3b3YB_wIdW_u0QyZ&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/16VPvk1J1LyTgYAbo3b3YB_wIdW_u0QyZ/view?usp=drive_link",
    description: "Live demonstration of scalable full-stack application architectures built for early traction.",
    highlightBadge: "Tech Architecture",
  },
  {
    id: "ss-img-11",
    title: "Campus to Career Transition Strategy",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1W1TbSGVYa4oNvr-MsXBpvGgFwok4VY66&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1W1TbSGVYa4oNvr-MsXBpvGgFwok4VY66/view?usp=drive_link",
    description: "Guidance on leveraging startup projects to stand out to top product companies and venture funds.",
    highlightBadge: "Career Transition",
  },
  {
    id: "ss-img-12",
    title: "Student Recognition & Summit Awards",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1uqU6bjUMuY7MdSl2K_MsQ0ht587RcxYE&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1uqU6bjUMuY7MdSl2K_MsQ0ht587RcxYE/view?usp=drive_link",
    description: "Recognizing outstanding student pitch decks and innovative problem solutions.",
    highlightBadge: "Summit Recognition",
  },
  {
    id: "ss-img-13",
    title: "Group Photo: Next Generation REC Innovators",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Startup Starter",
    date: "REC Campus Summit",
    attendeesCount: "250+ Students",
    imageUrl: "https://drive.google.com/thumbnail?id=1n9OfsmM3jZZ0Kxd1IWELsbPC53OJooAB&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1n9OfsmM3jZZ0Kxd1IWELsbPC53OJooAB/view?usp=drive_link",
    description: "Commemorative group moment capturing the passion, ambition, and community spirit at REC.",
    highlightBadge: "REC Summit Community",
  },
  {
    id: "iot-img-1",
    title: "Hands-on Microcontroller & Sensor Prototyping",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "IoT & Embedded Workshop",
    date: "November 2024",
    attendeesCount: "180+ IoT Builders",
    imageUrl: "https://drive.google.com/thumbnail?id=12ECcrrJswkuEOEiPLWh7IQ8YtegbHduC&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/12ECcrrJswkuEOEiPLWh7IQ8YtegbHduC/view?usp=sharing",
    description: "Students wiring up breadboards, interfacing ultrasonic & temperature sensors with Arduino microcontrollers in real time.",
    highlightBadge: "DEVS REC IoT Lab",
  },
  {
    id: "iot-img-2",
    title: "IoT Workshop Live Stage & Prototyping Showcase",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "IoT & Embedded Workshop",
    date: "November 2024",
    attendeesCount: "180+ IoT Builders",
    imageUrl: "https://drive.google.com/thumbnail?id=13-CRcBu2DP9K5bCoh19gzR_0rtwl9zXU&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/13-CRcBu2DP9K5bCoh19gzR_0rtwl9zXU/view?usp=sharing",
    description: "Keynote presentation and live demonstration of embedded system communication protocols and cloud telemetry.",
    highlightBadge: "Featured Workshop Moment",
  },
  {
    id: "iot-img-3",
    title: "Live Hardware Debugging & Team Mentorship",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "IoT & Embedded Workshop",
    date: "November 2024",
    attendeesCount: "180+ IoT Builders",
    imageUrl: "https://drive.google.com/thumbnail?id=19OByCABrPAAo1mRGOeKe-NsXgGUDEvLX&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/19OByCABrPAAo1mRGOeKe-NsXgGUDEvLX/view?usp=sharing",
    description: "1-on-1 team debugging assistance helping students flash firmware and troubleshoot serial baud rate communication.",
    highlightBadge: "Zero Theory, Pure Code",
  },
  {
    id: "iot-img-4",
    title: "Cloud Telemetry & Real-Time IoT Dashboard",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "IoT & Embedded Workshop",
    date: "November 2024",
    attendeesCount: "180+ IoT Builders",
    imageUrl: "https://drive.google.com/thumbnail?id=1S2BSFXOeL_iD8VrYY7GMWOTNC6hlyZeu&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1S2BSFXOeL_iD8VrYY7GMWOTNC6hlyZeu/view?usp=sharing",
    description: "Streaming sensor metrics from physical hardware directly to cloud databases and live web visualization dashboards.",
    highlightBadge: "Cloud Integration",
  },
  {
    id: "iot-img-5",
    title: "DEVS REC IoT Bootcamp Final Deployments & Recognition",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "IoT & Embedded Workshop",
    date: "November 2024",
    attendeesCount: "180+ IoT Builders",
    imageUrl: "https://drive.google.com/thumbnail?id=1rbtI-O2gsEUcPmIx8WkSZYqlYwDrWXnD&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1rbtI-O2gsEUcPmIx8WkSZYqlYwDrWXnD/view?usp=sharing",
    description: "Showcasing student-built IoT projects, smart automation prototypes, and awarding participation certificates.",
    highlightBadge: "Certified IoT Builders",
  },
];

/* =========================================================================
   GOOGLE DRIVE PROOF REPOSITORY & COMPANY SOCIALS
   ========================================================================= */
export const JM_OFFICIAL_LINKS = {
  instagram: "https://www.instagram.com/j_m__creation?igsh=MXd1ZmYyZ3BjMGY4bQ==",
  facebook: "https://www.facebook.com/share/1FmaRxEFwv/?mibextid=wwXIfr",
  portfolioDrive: "https://drive.google.com/drive/folders/1sBBo06qIw-Ik3RWptjrs7Tu7GZ67LKI0",
  proofDrive: "https://drive.google.com/open?id=1mE7i_94TTlgFu_Boz4RwsrQvMaK4o47z",
};

export const DRIVE_ARCHIVE_DATA = {
  title: "Open & Verifiable Impact Proof Repository",
  description:
    "We believe in absolute transparency. You can access our public Google Drive archive containing raw handwritten feedback forms, uncompressed event photography, video recordings, and verified student feedback sheets.",
  driveUrl: "https://drive.google.com/drive/folders/1sBBo06qIw-Ik3RWptjrs7Tu7GZ67LKI0",
  categories: [
    { name: "Handwritten Student Surveys", count: "350+ Scans", iconName: "FileCheck" },
    { name: "Raw Event Photography", count: "1,200+ Photos", iconName: "Camera" },
    { name: "Student Audio Testimonials", count: "40+ Voice Notes", iconName: "Mic" },
    { name: "Workshop Session Recordings", count: "25+ Hours", iconName: "Video" },
  ],
};
