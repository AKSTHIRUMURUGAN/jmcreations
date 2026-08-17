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
  authorAvatar?: string;
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
  category: "Startup Starter" | "Career Catalyst" | "Placement" | "Tech Workshop" | "Mentorship" | string;
  driveProofUrl?: string;
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

export interface InternVideoFeedbackItem {
  id: string;
  driveFileId: string;
  internName: string;
  roleOrDomain?: string;
  college?: string;
  videoUrl: string;
  driveUrl: string;
  thumbnailUrl: string;
  highlightQuote: string;
  duration: string;
  badge?: string;
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
    "Real WhatsApp audio notes, unedited feedback, and verified LinkedIn milestones.",
    "Hands-on coding, hardware prototyping & real client deployments over theory.",
    "5,200+ students empowered across 48+ engineering & arts institutions.",
  ],
  // Internal high-speed video proxy for Google Drive
  videoSrc: "/api/video-proxy?id=13-CRcBu2DP9K5bCoh19gzR_0rtwl9zXU",
  videoPoster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop",
  videoDuration: "Live Ground Reel",
  driveProofUrl: "https://drive.google.com/file/d/13-CRcBu2DP9K5bCoh19gzR_0rtwl9zXU/view",
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
  /* =========================================================================
     STARTUP STARTER EVENT (REC CHENNAI) - VERIFIED STUDENT FEEDBACK
     ========================================================================= */
  {
    id: "ss-fb-1",
    studentName: "Startup Starter Attendee 01",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Bootcamp Participant",
    rating: 5,
    quoteText: "The mentors provided actionable feedback that helped refine the i2r idea, making it feel much more achievable. Overall, this session was a great catalyst for my entrepreneurial journey, and I look forward to more hands-on workshops that dive deeper into scaling and user acquisition.",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Startup Catalyst",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-2",
    studentName: "Startup Starter Attendee 02",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Project Innovator",
    rating: 5,
    quoteText: "A wholesome experience gained. Met dozen of new peers. Learned basics of coding and applications from scratch. Used this bootcamp to implement my ideology of leftover kitchen. And planning to take it further beyond just this level on my own without the team. Thank you✨",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Leftover Kitchen MVP",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-3",
    studentName: "Startup Starter Attendee 03",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "First-Time Attendee",
    rating: 5,
    quoteText: "This is my first workshop and i enjoyed it, our team performed very active in this session and i learned some knowledge from my peers and the host.",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Active Team Work",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-4",
    studentName: "Startup Starter Attendee 04",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Engineering Student",
    rating: 5,
    quoteText: "This workshop was very informative, and was an very good exposure, please conduct the next event and pls provide an multiple MIMO routers for high speed internets and can also conduct hardware based events also and it was Wonderfull experience, truly learnt useful information",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Wonderful Exposure",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-5",
    studentName: "Startup Starter Attendee 05",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Student Entrepreneur",
    rating: 5,
    quoteText: "The workshop taught me alot I had no idea about start up before this workshop taught what is startup and more the very intresting part is that it was not just theory but hands on experience.",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Hands-on Experience",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-6",
    studentName: "Startup Starter Attendee 06",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Workshop Attendee",
    rating: 5,
    quoteText: "The hands on experience was exceptional that made me learn a lot and super excited for another wonderful workshop",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Exceptional Hands-on",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-7",
    studentName: "Vikash H. (Team L / Tech Busters 1.1)",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "1st Year IT Student • Top 10 Team Finalist",
    rating: 5,
    quoteText: "Hi, I'm Vikash, a first year student from IT department. I did the on-spot registration to the event without even knowing the name of the event, what's the event about and which club is organizing the event. But after some time through the event, i thought this was a workshop related to StartupHQ and other Startup things but eventually became like a Hackathon. The session was so informative, I really learnt a lot about Startups and other things and mainly on about Networking with others. This event made me push myself to initiate a discussion in a team of random strangers, and i personally felt that after my team's final pitch. I made a lot of new connections with people around. But the event was somewhat lagging as some of my teammates left early at 3 and my other teammate was working with landing page and i was working with MVP, due to which we lost the track of what has been said by the host/speaker there. But ya with some basic idea, we made it to the final pitch and was shortlisted as one among the top 10 teams. And ya I'm Vikash H from Team L or Tech Busters 1.1 wanted to thank all those Seniors volunteered there and helped me by clarifying my doubts. Thanks to Startup Starter to make me understand where am I now, helping me to get cleared about my technical skills and soft skills.",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Top 10 Finalist",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-8",
    studentName: "Startup Starter Attendee 08",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Engineering Student",
    rating: 5,
    quoteText: "I loved that event and Need More event like this From you guys",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Loved The Event",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-9",
    studentName: "Startup Starter Attendee 09",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Top 10 Team Finalist • REC",
    rating: 5,
    quoteText: "The session was so awesome made me go from a 0 to next level....i actually wanted to start...but i didnt know how...but this session help me think of it from finding problem to building it to pitching it...i am so gratefull for this event....looking forward for more...i landed in the top 10 teams, and i would really love to get the incubation from REC...your support might help me with it....i hope you spend your valuable time on checking the landing page and reach me out if u like it...",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "0 to Next Level",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-10",
    studentName: "Startup Starter Attendee 10",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Aspiring Entrepreneur",
    rating: 5,
    quoteText: "I am eagerly waiting for next session This season teach me a lot about entrepreneurship and how to to become a successful startup businessman",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Startup Growth",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-11",
    studentName: "Startup Starter Attendee 11",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Tech & App Developer",
    rating: 5,
    quoteText: "this workshop was very useful and informative. It gave me a broad perspective about app development and also general, basics about startup with appropriate guidance and help from the even coordinators. Thank you so much for this wonderful opportunity.",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Broad Perspective",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-12",
    studentName: "Startup Starter Attendee 12",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Bootcamp Attendee",
    rating: 5,
    quoteText: "The session is very useful i didn't experienced this type of workshop before pls organise more workshops like this it will really help for us.",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Unique Experience",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  {
    id: "ss-fb-13",
    studentName: "Startup Starter Attendee 13",
    college: "Rajalakshmi Engineering College (REC)",
    courseOrRole: "Engineering Student",
    rating: 5,
    quoteText: "It gives me a clear idea about Entrepreneurship and how how startups grows ideals turn into buisness ideas It's a great experience for up and coming entrepreneurs to learn a thing or two from their seniors The event was awesome, made me something learn about how ideas are created",
    feedbackDate: "Startup Starter @ REC",
    rawProofImageUrl: "https://drive.google.com/thumbnail?id=1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t&sz=w1000",
    avatar: "",
    badge: "Ideation to Business",
    category: "Startup Starter",
    driveProofUrl: "https://drive.google.com/file/d/1OZ8KzgZQ6WstBuM9eX27tzv6SgjIAn8t/view?usp=drive_web",
  },
  /* =========================================================================
     CAMPUS TO CAREER & OTHER BOOTCAMPS
     ========================================================================= */
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
    authorRole: "Top 10 Finalist • Startup Starter @ REC",
    authorAvatar: "https://media.licdn.com/dms/image/v2/D4D03AQGQVo_Wyra0cA/profile-displayphoto-scale_200_200/B4DZ0rirI1I0Ac-/0/1774552005307?e=2147483647&v=beta&t=2UFFs9btBtHdyG0KczU24KOTtzYseKEhP-wl3Uo6jQs",
    date: "Startup Starter @ REC",
    postHeadline: "🚀 \"Don't learn Startup, Build One\" — and that's exactly what we did!",
    postExcerpt:
      "Thrilled to share that my team was recognized among the Top 10 Teams at Startup Starter, a one-day startup bootcamp held at Rajalakshmi Engineering College, conducted by TechBuddySpace in collaboration with RIIF & EIDC.",
    linkedinUrl: "https://www.linkedin.com/posts/yogeeshwaran-chandru-252690394_rajalakshmiengineeringstudent-rajalakshmiengineeringcollege-share-7484658157164683264-0A8L/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://media.licdn.com/dms/image/v2/D5622AQEIMA3sVVTpFw/feedshare-image-high-res/B56Z97Y76cG4AU-/0/1784481562488?e=2147483647&v=beta&t=_TIlBLYzHlrmNAIu3QPMX4GTDJsT4BiWRRYKSQ9wSoo",
    likesCount: 25,
    commentsCount: 3,
    tags: ["#RajalakshmiEngineeringCollege", "#StartupStarter", "#TechBuddySpace", "#RIIF"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-2",
    authorName: "Dhayanithi maran",
    authorRole: "2nd sem CSE • Top 10 Teams Winner",
    authorAvatar: "https://media.licdn.com/dms/image/v2/D5603AQGisFiBazMhGw/profile-displayphoto-scale_200_200/B56Z.PR__KIUAc-/0/1784815289423?e=2147483647&v=beta&t=ZEuaUr1_-cTCh0XbKS2asf_GEwYna7RzMa_GYnG-tNU",
    date: "Startup Starter @ REC",
    postHeadline: "2nd sem CSE. No startup experience. Still made it to Top 10 Teams 🏆",
    postExcerpt:
      "Attended Startup Starter — a One-Day Startup Bootcamp by TechBuddySpace Pvt Ltd in collaboration with RIIF & EIDC at REC. The motto: 'Don't learn Startup, Build One.' No lectures, just raw execution.",
    linkedinUrl: "https://www.linkedin.com/posts/dhayanithimaran_startupstarter-studententrepreneur-campustocareer-share-7477205915939770368-bWB3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://media.licdn.com/dms/image/v2/D5622AQF6QInuIXFrzQ/feedshare-image-high-res/B56Z8RfKHVKUAU-/0/1782704808760?e=2147483647&v=beta&t=0qYcGNW8WWcNNlkr-qx_uQCX06Gzl_6ZVNsCdER3VY8",
    likesCount: 29,
    commentsCount: 2,
    tags: ["#StartupStarter", "#StudentEntrepreneur", "#CampusToCareer", "#TechBuddySpace"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-3",
    authorName: "Madhu Karthikeyan",
    authorRole: "Food Technology, REC • 1st Place Winner 🏆",
    authorAvatar: "https://media.licdn.com/dms/image/v2/D5603AQGAc2xxMIY9-w/profile-displayphoto-scale_200_200/B56ZzdhQtjGQAY-/0/1773243012762?e=2147483647&v=beta&t=iJTmnEjbkossGl_Rhom0bCYD6GVxPnLafTQLTwyHGCE",
    date: "Startup Starter @ REC",
    postHeadline: "🏆 Secured 1st Place at the Startup Starter Event!",
    postExcerpt:
      "Excited to share that our team participated in the Startup Starter Event hosted by TechBuddySpace in collaboration with RIIF and EIDC Club. Proud to announce that we secured 1st place in the final round!",
    linkedinUrl: "https://www.linkedin.com/posts/madhu-karthikeyan-food-technology-rec_mitch-techbuddyspace-ugcPost-7457435208217411584-p6ja/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://media.licdn.com/dms/image/v2/D5622AQHYGpdi0LZJIA/feedshare-image-high-res/B56Z34hx3FIsAU-/0/1777991098140?e=2147483647&v=beta&t=S_Kp6yN9caQFlvZDvS9hiaBVURfltLyKaRkBoV3NTX4",
    likesCount: 20,
    commentsCount: 2,
    tags: ["#MITCH", "#TechBuddySpace", "#Innovation", "#StartupStarter"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-4",
    authorName: "Divyaasri G",
    authorRole: "First-Year Engineering Student • REC",
    authorAvatar: "https://media.licdn.com/dms/image/v2/D5603AQEbzOQwEjpWuw/profile-displayphoto-scale_200_200/B56Z9Cb500IUAc-/0/1783526040538?e=2147483647&v=beta&t=cC5H_JJcFEKk9qWaX1pdUhoydSbsFgeidHj-payYiCE",
    date: "Startup Starter @ REC",
    postHeadline: "🚀 “Don’t learn startup. Build one.”",
    postExcerpt:
      "After attending the Startup Starter Bootcamp, I realized entrepreneurship isn't just about launching a company—it's about identifying problems, thinking differently, and having the courage to turn ideas into reality.",
    linkedinUrl: "https://www.linkedin.com/posts/divyaasri-g-42b7a1394_startupstarter-entrepreneurship-innovation-share-7480633301758660608-JbAW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://media.licdn.com/dms/image/v2/D5622AQHTavQwsGRH4w/feedshare-image-high-res/B56Z9CMWWEH4AU-/0/1783521961595?e=2147483647&v=beta&t=lAjqyRTYGVvx_FUaz-yVl_QDjnxe0vnb38KcOaorxrc",
    likesCount: 11,
    commentsCount: 1,
    tags: ["#StartupStarter", "#Entrepreneurship", "#Innovation", "#GrowthMindset"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-5",
    authorName: "Dishanth Raj V",
    authorRole: "Engineering Student • Rajalakshmi Engineering College",
    authorAvatar: "",
    date: "Startup Starter @ REC",
    postHeadline: "🚀 Turned Idea into Reality at the Startup Starter Program!",
    postExcerpt:
      "Incredible experience diving into the world of entrepreneurship — from ideation to execution. The session opened my eyes to the mindset and skills needed to build something from the ground up.",
    linkedinUrl: "https://www.linkedin.com/posts/dishanth-raj-v-357822359_startuplife-entrepreneurship-rajalakshmiengineeringcollege-share-7455565437926420480-P-QQ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    likesCount: 15,
    commentsCount: 1,
    tags: ["#StartupLife", "#Entrepreneurship", "#StartupStarterProgram", "#TechBuddySpace"],
    eventCategory: "Startup Starter Event",
  },
  {
    id: "li-ss-6",
    authorName: "VIJAY GHANESH G J",
    authorRole: "Student Founder, MediBeaCon • Idea Factory REC",
    authorAvatar: "",
    date: "Startup Starter @ REC",
    postHeadline: "From Bootcamp to Building: MediBeaCon at Startup Starter",
    postExcerpt:
      "Participated in the Startup Starter Bootcamp at Idea Factory (REC). Stress-tested our business model, refined our clinical AI roadmap, and delivered a live pitch to industry mentors.",
    linkedinUrl: "https://www.linkedin.com/posts/vijay-ghanesh-g-j_founderjourney-entrepreneurship-medibeacon-ugcPost-7456360049658028033-xmYu/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWa3i8BxzWlFLLrycBCqBdQRL9iIuleqds",
    imageProof: "https://media.licdn.com/dms/image/v2/D5622AQEbHTZNysZbhg/feedshare-shrink_800/B56Z3pP75AG0Ac-/0/1777734762279?e=2147483647&v=beta&t=sBx8SLKQr_813k5bwIrpgG1DftgFuruwprOBM_ar6pk",
    likesCount: 36,
    commentsCount: 1,
    tags: ["#FounderJourney", "#MediBeaCon", "#Entrepreneurship", "#StartupIndia"],
    eventCategory: "Startup Starter Event",
  },

  /* =========================================================================
     IOT & EMBEDDED WORKSHOP (DEVS REC)
     ========================================================================= */
  {
    id: "li-iot-1",
    authorName: "Madhusha Harini",
    authorRole: "Engineering Student • DEVS REC IoT Workshop",
    authorAvatar: "https://media.licdn.com/dms/image/v2/D5603AQEYXm1ytaO5Yg/profile-displayphoto-scale_200_200/B56Z4arGV7J0AY-/0/1778563974434?e=2147483647&v=beta&t=DMLSQcd2w99f_NfOr1HjNgfBLLkLDxdqjXYZEK8t8CE",
    date: "DEVS REC IoT Bootcamp",
    postHeadline: "🌐 Diving into IoT with Devs REC & Arduino Prototyping!",
    postExcerpt:
      "Went from just knowing about IoT to actually building with it, connecting components, and coding basic functions. The best part? Seeing my work come to life in real-time!",
    linkedinUrl: "https://www.linkedin.com/posts/madhusha-harini-7459312a2_devsrec-iot-arduino-activity-7259954473467297792-_cyw?utm_source=share&utm_medium=member_android",
    imageProof: "https://media.licdn.com/dms/image/v2/D4D22AQEHcYaT4dHwyQ/feedshare-shrink_800/feedshare-shrink_800/0/1730908027632?e=2147483647&v=beta&t=lCT8TUdk2Q6t6BWqn1HEvTxid3Zr-yZzHhJcXufMdo8",
    likesCount: 89,
    commentsCount: 2,
    tags: ["#devsrec", "#IoT", "#Arduino", "#HandsOnLearning"],
    eventCategory: "IoT & Embedded Workshop",
  },
  {
    id: "li-iot-3",
    authorName: "Jeevitha R",
    authorRole: "Student Attendee • DEVS REC IoT Workshop",
    authorAvatar: "https://media.licdn.com/dms/image/v2/D5603AQGs5N4RpCnFBg/profile-displayphoto-scale_200_200/B56Z3uhfHaIsAY-/0/1777823251588?e=2147483647&v=beta&t=hGTTKcAqp6iNZjQ6znkcjG7pNqegYXNeG2YWktxwBOM",
    date: "REC IoT Workshop",
    postHeadline: "Game-Changing IoT Architecture & Connected Devices Session",
    postExcerpt:
      "We began with the fundamentals of connected devices and quickly advanced to IoT architectures, diving into real-world applications and practical insights that will fuel my tech journey.",
    linkedinUrl: "https://www.linkedin.com/posts/jeevithachandhiran_iot-techjourney-innovation-activity-7262858155930324993-8tSA?utm_source=share&utm_medium=member_android",
    imageProof: "https://media.licdn.com/dms/image/v2/D5622AQHvZ79D9N-lxA/feedshare-shrink_800/feedshare-shrink_800/0/1731600294406?e=2147483647&v=beta&t=rDnstfdBIQRbVsM77RH-b3AaWIlVgQ8QMnUykmc_PRI",
    likesCount: 52,
    commentsCount: 2,
    tags: ["#IoT", "#TechJourney", "#Innovation", "#DevsRec"],
    eventCategory: "IoT & Embedded Workshop",
  },
  {
    id: "li-iot-4",
    authorName: "Dinisha R",
    authorRole: "Engineering Student • DEVS REC IoT Workshop",
    authorAvatar: "https://media.licdn.com/dms/image/v2/D5603AQHG2t538qVobg/profile-displayphoto-scale_200_200/B56Zj7UnA1H8Ac-/0/1756563141891?e=2147483647&v=beta&t=bjLzFm_ER_44TpmU2hzsdI_EQey7G-xWfQDgtCOgbHI",
    date: "REC IoT Workshop",
    postHeadline: "🌐 Exploring the Future with IoT & Telemetry Integration",
    postExcerpt:
      "From understanding the basics of connected devices to diving deep into IoT architectures and real-world applications, I gained valuable insights that will undoubtedly enhance my tech journey.",
    linkedinUrl: "https://www.linkedin.com/posts/dinisha20_iot-learningjourney-techinnovation-activity-7260630955512471552-IUu7?utm_source=share&utm_medium=member_desktop",
    imageProof: "https://media.licdn.com/dms/image/v2/D5622AQG_HDo7kVSumw/feedshare-shrink_800/feedshare-shrink_800/0/1731069313238?e=2147483647&v=beta&t=Dg4lEja8BK5RU1-56GsllH4hB9Ej0yH98dVnzzcREHo",
    likesCount: 85,
    commentsCount: 1,
    tags: ["#IoT", "#LearningJourney", "#TechInnovation", "#DevsRec"],
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
    authorAvatar: "",
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
    authorAvatar: "https://waymaxglobal.com/wp-content/uploads/2023/06/cropped-logo-192x192.png",
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
    authorAvatar: "",
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
    authorAvatar: "https://yt3.googleusercontent.com/vY_5B-Stc8Q56yUmHqcCslsibd8lg0mFw8qVBjg_gVAYHq81Hy53gbQIHL6ktvBzcrQ6LOT3CQ=s900-c-k-c0x00ffffff-no-rj",
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
    authorAvatar: "https://yt3.googleusercontent.com/xLrYtvRPh190gOBrbZDbyF9jhw_Chkx-QUzPsAipvWmR9ur0KPlPf6JDyZmwFimw0QJsbJQQ=s900-c-k-c0x00ffffff-no-rj",
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
    authorAvatar: "/logo.jpeg",
    postUrl: "https://www.instagram.com/j_m__creation?igsh=MXd1ZmYyZ3BjMGY4bQ==",
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
  {
    id: "cnc-img-1",
    title: "Capture & Code: Opening Keynote & Challenge Briefing",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "200+ Developers & Creators",
    imageUrl: "https://drive.google.com/thumbnail?id=16LhVh3i-wY8D56xYh0GM6_B8bPlTcTdj&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/16LhVh3i-wY8D56xYh0GM6_B8bPlTcTdj/view?usp=sharing",
    description: "Unveiling the Capture & Code challenge uniting visual storytelling, media creation, and full-stack software development.",
    highlightBadge: "Capture & Code Flagship",
  },
  {
    id: "cnc-img-2",
    title: "Live Coding Sprint & Collaborative Development",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "200+ Developers & Creators",
    imageUrl: "https://drive.google.com/thumbnail?id=1CruF4x78Jh4SqfyJh8m_Mk2hOCNPyDRe&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1CruF4x78Jh4SqfyJh8m_Mk2hOCNPyDRe/view?usp=sharing",
    description: "Engineering students and creators collaborating in real-time sprints building interactive digital media platforms.",
    highlightBadge: "Live Dev Sprint",
  },
  {
    id: "cnc-img-3",
    title: "Hands-on UI/UX Prototyping & Media Design",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "200+ Developers & Creators",
    imageUrl: "https://drive.google.com/thumbnail?id=1Ei84r4-3oGaw14rg91IoyoJxVaL9WaTW&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1Ei84r4-3oGaw14rg91IoyoJxVaL9WaTW/view?usp=sharing",
    description: "Mentors walking students through responsive layouts, micro-animations, and high-retention video asset integration.",
    highlightBadge: "Design & Code Sprint",
  },
  {
    id: "cnc-img-4",
    title: "Full Auditorium of Active Builders",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "Packed Arena",
    imageUrl: "https://drive.google.com/thumbnail?id=1UzcZBcH8X2MnFHgJvyEZVGXHIgl835hl&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1UzcZBcH8X2MnFHgJvyEZVGXHIgl835hl/view?usp=sharing",
    description: "Full house session of enthusiastic engineering talent coding simultaneously with zero slides.",
    highlightBadge: "Full House Session",
  },
  {
    id: "cnc-img-5",
    title: "Technical Mentorship & Code Review Session",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "200+ Developers & Creators",
    imageUrl: "https://drive.google.com/thumbnail?id=1_Ogkwxc7hqIMLuHPWDFXeqcfMJmMeZAI&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1_Ogkwxc7hqIMLuHPWDFXeqcfMJmMeZAI/view?usp=sharing",
    description: "1-on-1 team debugging helping students connect frontend APIs with cloud backend microservices.",
    highlightBadge: "Code Architecture",
  },
  {
    id: "cnc-img-6",
    title: "Visual Storytelling & Camera Angles Workshop",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "200+ Developers & Creators",
    imageUrl: "https://drive.google.com/thumbnail?id=1ajnJdoZXeAFhVWEerZWKreTuWecEdNAe&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1ajnJdoZXeAFhVWEerZWKreTuWecEdNAe/view?usp=sharing",
    description: "Bridging the gap between content creation and software engineering with cinematic visual framing techniques.",
    highlightBadge: "Visual Storytelling",
  },
  {
    id: "cnc-img-7",
    title: "Team Presentations & Live Prototype Demos",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "200+ Developers & Creators",
    imageUrl: "https://drive.google.com/thumbnail?id=1cOhLmGQW_dX5cFLRr3asQFrH9P2XMKXl&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1cOhLmGQW_dX5cFLRr3asQFrH9P2XMKXl/view?usp=sharing",
    description: "Student squads presenting their finished full-stack projects live on stage to peers and panel judges.",
    highlightBadge: "Live Stage Demos",
  },
  {
    id: "cnc-img-8",
    title: "Audience Engagement & Live Q&A Interactions",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "200+ Developers & Creators",
    imageUrl: "https://drive.google.com/thumbnail?id=1uT3GVo0l8gU1SwPPWMHQjhqv1pSL3OYd&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1uT3GVo0l8gU1SwPPWMHQjhqv1pSL3OYd/view?usp=sharing",
    description: "Answering student queries on monetization, client acquisition, and building high-impact tech portfolios.",
    highlightBadge: "Fireside Q&A",
  },
  {
    id: "cnc-img-9",
    title: "Capture & Code Finalists & Certificate Honors",
    institutionName: "Rajalakshmi Engineering College (REC)",
    location: "Chennai, TN",
    category: "Capture & Code",
    date: "REC Campus Hackathon",
    attendeesCount: "200+ Developers & Creators",
    imageUrl: "https://drive.google.com/thumbnail?id=1unpUc52sKI9kCJ0Llvh4__R49XhwXxiq&sz=w1200",
    driveUrl: "https://drive.google.com/file/d/1unpUc52sKI9kCJ0Llvh4__R49XhwXxiq/view?usp=sharing",
    description: "Celebrating top project builders, visual storytellers, and handing over official certificates of completion.",
    highlightBadge: "Certified Builders",
  },
];

/* =========================================================================
   INTERN REAL VIDEO FEEDBACK RECORDINGS (GOOGLE DRIVE)
   ========================================================================= */
export const INTERN_VIDEO_FEEDBACK_ITEMS: InternVideoFeedbackItem[] = [
  {
    id: "intern-vid-1",
    driveFileId: "12azkWt_OrbMYlHR8p1sVt5XQgmIyWvvk",
    internName: "Santhosh S",
    videoUrl: "https://drive.google.com/file/d/12azkWt_OrbMYlHR8p1sVt5XQgmIyWvvk/preview",
    driveUrl: "https://drive.google.com/file/d/12azkWt_OrbMYlHR8p1sVt5XQgmIyWvvk/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=12azkWt_OrbMYlHR8p1sVt5XQgmIyWvvk&sz=w800",
    highlightQuote: "Learned real production deployments, Next.js architecture, and real client communication with zero corporate fluff.",
    duration: "1:15",
    badge: "Tech Intern",
  },
  {
    id: "intern-vid-2",
    driveFileId: "12bpnbzAHraEryU7yqc8y0nDa18Bvee4Y",
    internName: "Siranjeevi N",
    videoUrl: "https://drive.google.com/file/d/12bpnbzAHraEryU7yqc8y0nDa18Bvee4Y/preview",
    driveUrl: "https://drive.google.com/file/d/12bpnbzAHraEryU7yqc8y0nDa18Bvee4Y/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=12bpnbzAHraEryU7yqc8y0nDa18Bvee4Y&sz=w800",
    highlightQuote: "From basic Figma sketches to building complete interactive design systems that actually get built and shipped.",
    duration: "0:58",
    badge: "Tech Intern",
  },
  {
    id: "intern-vid-3",
    driveFileId: "17kLJLT_-yJTyHBqSMUvSY3z2FZ2tDGLA",
    internName: "Sindhuja T",
    videoUrl: "https://drive.google.com/file/d/17kLJLT_-yJTyHBqSMUvSY3z2FZ2tDGLA/preview",
    driveUrl: "https://drive.google.com/file/d/17kLJLT_-yJTyHBqSMUvSY3z2FZ2tDGLA/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=17kLJLT_-yJTyHBqSMUvSY3z2FZ2tDGLA&sz=w800",
    highlightQuote: "Interfacing microcontrollers with cloud webhooks and building physical smart hardware from scratch.",
    duration: "1:22",
    badge: "Tech Intern",
  },
  {
    id: "intern-vid-4",
    driveFileId: "19PtV-_aRICK0deuEpM7J68VQMESANwPH",
    internName: "Manisha",
    videoUrl: "https://drive.google.com/file/d/19PtV-_aRICK0deuEpM7J68VQMESANwPH/preview",
    driveUrl: "https://drive.google.com/file/d/19PtV-_aRICK0deuEpM7J68VQMESANwPH/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=19PtV-_aRICK0deuEpM7J68VQMESANwPH&sz=w800",
    highlightQuote: "Working alongside seniors on real high-traffic client portals changed how I approach modern web performance.",
    duration: "1:05",
    badge: "Tech Intern",
  },
  {
    id: "intern-vid-5",
    driveFileId: "1EeVHfgx2geEZ5hXVliSF9TFRoCotP8tV",
    internName: "Preethikashree",
    videoUrl: "https://drive.google.com/file/d/1EeVHfgx2geEZ5hXVliSF9TFRoCotP8tV/preview",
    driveUrl: "https://drive.google.com/file/d/1EeVHfgx2geEZ5hXVliSF9TFRoCotP8tV/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=1EeVHfgx2geEZ5hXVliSF9TFRoCotP8tV&sz=w800",
    highlightQuote: "Hands-on experience in high-retention reel pacing, sound design, and color grading for commercial client brands.",
    duration: "1:18",
    badge: "Tech Intern",
  },
  {
    id: "intern-vid-6",
    driveFileId: "1F21qjGQ6nXoba8Pp76JHnRp7aQc-OqPO",
    internName: "Dharshini",
    videoUrl: "https://drive.google.com/file/d/1F21qjGQ6nXoba8Pp76JHnRp7aQc-OqPO/preview",
    driveUrl: "https://drive.google.com/file/d/1F21qjGQ6nXoba8Pp76JHnRp7aQc-OqPO/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=1F21qjGQ6nXoba8Pp76JHnRp7aQc-OqPO&sz=w800",
    highlightQuote: "Setting up database indexes, API authentication, and edge functions gave me placement-ready confidence.",
    duration: "0:52",
    badge: "Tech Intern",
  },
  {
    id: "intern-vid-7",
    driveFileId: "1NE4l-RfxKpmAkeQ55bVhjTud9SQ8tlNC",
    internName: "Sarala",
    videoUrl: "https://drive.google.com/file/d/1NE4l-RfxKpmAkeQ55bVhjTud9SQ8tlNC/preview",
    driveUrl: "https://drive.google.com/file/d/1NE4l-RfxKpmAkeQ55bVhjTud9SQ8tlNC/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=1NE4l-RfxKpmAkeQ55bVhjTud9SQ8tlNC&sz=w800",
    highlightQuote: "Understanding ad metrics, lead cost optimization, and real conversion tracking for real business accounts.",
    duration: "1:10",
    badge: "Tech Intern",
  },
  {
    id: "intern-vid-8",
    driveFileId: "1NUAktUu_QJvEjXFsE9BoP7gu1ccQdlZk",
    internName: "Janani",
    videoUrl: "https://drive.google.com/file/d/1NUAktUu_QJvEjXFsE9BoP7gu1ccQdlZk/preview",
    driveUrl: "https://drive.google.com/file/d/1NUAktUu_QJvEjXFsE9BoP7gu1ccQdlZk/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=1NUAktUu_QJvEjXFsE9BoP7gu1ccQdlZk&sz=w800",
    highlightQuote: "Building live features from day 1 instead of dummy assignments. That is what separated this internship from others.",
    duration: "1:30",
    badge: "Tech Intern",
  },
  {
    id: "intern-vid-9",
    driveFileId: "1pOZL6M8yF_UQnCQftdGpnpEaAhXchAd-",
    internName: "Swedha",
    videoUrl: "https://drive.google.com/file/d/1pOZL6M8yF_UQnCQftdGpnpEaAhXchAd-/preview",
    driveUrl: "https://drive.google.com/file/d/1pOZL6M8yF_UQnCQftdGpnpEaAhXchAd-/view?usp=sharing",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=1pOZL6M8yF_UQnCQftdGpnpEaAhXchAd-&sz=w800",
    highlightQuote: "Mastered pitch presentations, market research, and end-to-end founder problem-solving workflows.",
    duration: "1:12",
    badge: "Tech Intern",
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
