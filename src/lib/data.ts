import type {
  FAQItem,
  PersonalInfo,
  StatItem,
  ServiceItem,
  TestimonialItem,
  IndustryCard,
  BusinessProblem,
  ProcessStep,
  CaseStudy,
  DemoVideo,
  Article,
  WhyWorkWithMe,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Kumail Kmr",
  role: "AI Automation & Business Systems Specialist",
  tagline:
    "Helping businesses eliminate repetitive work, improve customer experience, and increase efficiency through AI-powered systems.",
  subTagline:
    "Stop Losing Time to Repetitive Work. Build Smarter Business Systems with AI.",
  email: "kumailkmr.dev@gmail.com",
  phone: "+91 6006121193",
  whatsapp: "916006121193",
  whatsappUrl: "https://wa.me/916006121193",
  upi: "6006121193@upi",
  location: "Srinagar, Kashmir, India",
  locationEmoji: "🏔️",
  available: true,
  responseTime: "2 hours on WhatsApp",
  social: {
    linkedin: "https://www.linkedin.com/in/kumail-kmr-6196a0384/",
    github: "https://github.com/kumailkmr",
    twitter: "#",
    calendly:
      "https://calendly.com/ka6307464/business-automation-strategy-session",
  },
};

export const stats: StatItem[] = [
  { label: "Industries Served", value: 8, suffix: "+" },
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Solutions Developed", value: 25, suffix: "+" },
  { label: "Business-First", value: 100, suffix: "%" },
];

export const industries: IndustryCard[] = [
  {
    id: "ca-firms",
    icon: "📊",
    name: "CA Firms & Accounting",
    problems: [
      "Manual document collection via WhatsApp",
      "Client follow-up overload",
      "Repetitive tax query responses",
    ],
    howAIHelps:
      "Automated document collection portals, AI-powered client query handling, and intelligent follow-up sequences that run 24/7 without staff intervention.",
    outcomes: [
      "60% reduction in document collection time",
      "Staff freed from repetitive queries",
      "Faster client onboarding",
    ],
  },
  {
    id: "hospitals",
    icon: "🏥",
    name: "Hospitals & Clinics",
    problems: [
      "Appointment scheduling bottlenecks",
      "Repetitive patient inquiries",
      "Manual report delivery",
    ],
    howAIHelps:
      "AI voice and WhatsApp receptionist for appointment booking, automated pre-visit instructions, and intelligent FAQ handling for common patient questions.",
    outcomes: [
      "24/7 appointment booking without staff",
      "Reduced front desk load by 40%",
      "Faster patient communication",
    ],
  },
  {
    id: "coaching",
    icon: "🎓",
    name: "Coaching Institutes",
    problems: [
      "Lead follow-up delays losing students",
      "Manual batch enrollment",
      "Repetitive course information queries",
    ],
    howAIHelps:
      "Automated lead nurturing, instant course information chatbot, and enrollment workflow automation that converts inquiries into registered students automatically.",
    outcomes: [
      "3x faster lead response time",
      "Zero missed inquiries",
      "Automated enrollment process",
    ],
  },
  {
    id: "travel",
    icon: "✈️",
    name: "Travel Agencies",
    problems: [
      "Manual itinerary creation bottleneck",
      "Slow quote generation losing clients",
      "Lost leads from delayed response",
    ],
    howAIHelps:
      "AI-powered itinerary builder, instant quote generation from WhatsApp, and automated follow-up sequences that keep prospects engaged until they book.",
    outcomes: [
      "Quotes delivered in minutes not days",
      "2x lead conversion rate improvement",
      "Automated follow-up sequences",
    ],
  },
  {
    id: "real-estate",
    icon: "🏢",
    name: "Real Estate Agencies",
    problems: [
      "Unqualified lead follow-up waste",
      "Manual property matching",
      "Slow response losing serious buyers",
    ],
    howAIHelps:
      "AI lead qualification and scoring, automated property matching based on client requirements, and instant WhatsApp communication workflows.",
    outcomes: [
      "Agents focus only on hot leads",
      "Automated property recommendations",
      "Faster deal closure cycle",
    ],
  },
  {
    id: "restaurants",
    icon: "🍽️",
    name: "Restaurants & Cafés",
    problems: [
      "Manual order taking and errors",
      "Reservation management chaos",
      "Delayed customer query responses",
    ],
    howAIHelps:
      "WhatsApp-based AI ordering system, automated reservation management, and instant customer support for menu queries and feedback collection.",
    outcomes: [
      "Orders taken 24/7 automatically",
      "Zero reservation conflicts",
      "Faster customer service",
    ],
  },
  {
    id: "manufacturing",
    icon: "⚙️",
    name: "Manufacturing",
    problems: [
      "Manual supplier communication delays",
      "Inventory tracking falling behind",
      "Slow internal reporting processes",
    ],
    howAIHelps:
      "Automated supplier communication, AI-powered inventory alerts, and internal workflow automation that keeps operations running without constant manual oversight.",
    outcomes: [
      "Streamlined supply chain communication",
      "Real-time inventory visibility",
      "Reduced operational overhead",
    ],
  },
  {
    id: "professional-services",
    icon: "💼",
    name: "Professional Services",
    problems: [
      "Proposal creation is a bottleneck",
      "Client onboarding friction and delays",
      "Manual billing follow-ups",
    ],
    howAIHelps:
      "Automated proposal generation, streamlined client onboarding workflows, and intelligent billing reminder systems that get you paid faster.",
    outcomes: [
      "Proposals delivered 5x faster",
      "Seamless client onboarding experience",
      "Improved cash flow",
    ],
  },
];

export const businessProblems: BusinessProblem[] = [
  {
    id: "bp1",
    icon: "💬",
    problem: "Too Many Repetitive Customer Questions",
    impact:
      "Staff spend hours answering the same questions daily instead of doing high-value work that grows the business.",
    solution:
      "AI Knowledge Base Assistant that answers 80% of common questions automatically across WhatsApp, website, and email.",
    outcome: "80% reduction in repetitive support queries",
  },
  {
    id: "bp2",
    icon: "⏱️",
    problem: "Slow Response Times Losing Customers",
    impact:
      "Potential customers move on to competitors when they don't receive a response within minutes of enquiring.",
    solution:
      "AI-powered instant response system that engages leads 24/7, even outside business hours — never missing an opportunity.",
    outcome: "Response time reduced from hours to seconds",
  },
  {
    id: "bp3",
    icon: "🚨",
    problem: "Missed Leads & Lost Opportunities",
    impact:
      "Every unanswered enquiry is revenue walking out the door. Most businesses lose 60% of leads this way.",
    solution:
      "Automated lead capture from all channels — website, WhatsApp, social — with instant follow-up sequences that engage immediately.",
    outcome: "Zero leads fall through the cracks",
  },
  {
    id: "bp4",
    icon: "📁",
    problem: "Manual Document Collection",
    impact:
      "Chasing clients for documents wastes hours every week and causes project delays and billing bottlenecks.",
    solution:
      "Automated document collection portal with smart reminders and deadline tracking — clients submit on their schedule.",
    outcome: "Document collection time cut by 60%",
  },
  {
    id: "bp5",
    icon: "🔄",
    problem: "Inconsistent Follow-Up Losing Deals",
    impact:
      "Deals are lost not because of price, but because follow-up was inconsistent, forgotten, or too late.",
    solution:
      "Automated multi-channel follow-up sequences via WhatsApp and email that run on a perfect schedule — automatically.",
    outcome: "2x improvement in conversion from follow-up",
  },
  {
    id: "bp6",
    icon: "📅",
    problem: "Appointment Scheduling Friction",
    impact:
      "Back-and-forth scheduling emails waste time for both parties and cause no-shows that directly hurt revenue.",
    solution:
      "AI booking assistant that handles scheduling, confirmations, and reminders automatically — no back-and-forth.",
    outcome: "40% reduction in no-shows",
  },
  {
    id: "bp7",
    icon: "😓",
    problem: "Staff Overloaded with Admin Tasks",
    impact:
      "Skilled, expensive team members spend most of their time on repetitive admin instead of work that grows the business.",
    solution:
      "Workflow automation that handles repetitive admin tasks, data entry, and internal communication without any manual input.",
    outcome: "Staff focus shifts to high-value work only",
  },
  {
    id: "bp8",
    icon: "🗂️",
    problem: "No Centralized Workflow",
    impact:
      "Information scattered across WhatsApp, email, and spreadsheets causes errors, missed deadlines, and constant confusion.",
    solution:
      "Centralized business dashboard that aggregates all communications, tasks, and status updates in one clear place.",
    outcome: "Complete operational visibility for the entire team",
  },
  {
    id: "bp9",
    icon: "👤",
    problem: "No Visibility Into Customer Health",
    impact:
      "Without a system, you don't know which customers are happy, at risk of leaving, or ready to buy again.",
    solution:
      "CRM automation that tracks all customer interactions and triggers timely re-engagement when signals indicate risk.",
    outcome: "Full customer lifecycle visibility and control",
  },
  {
    id: "bp10",
    icon: "🏃",
    problem: "Owner Is the Bottleneck",
    impact:
      "Business growth is capped when the owner must be involved in every customer interaction and operational decision.",
    solution:
      "End-to-end business automation systems that let the business run reliably without constant owner intervention.",
    outcome: "Business runs and grows without you as the bottleneck",
  },
];

export const services: ServiceItem[] = [
  {
    id: "ai-support",
    icon: "🤖",
    title: "AI Customer Support Assistant",
    description:
      "An always-on AI assistant that handles customer queries, FAQs, and support tickets across WhatsApp, website, and email — reducing your team's support load by up to 80%.",
    features: [
      "24/7 automated responses",
      "Multi-channel support",
      "Smart escalation to humans",
      "Continuous learning",
    ],
  },
  {
    id: "ai-voice",
    icon: "🎙️",
    title: "AI Voice Receptionist",
    description:
      "A professional AI receptionist that answers calls, collects caller information, schedules appointments, and routes enquiries — without any staff involvement.",
    features: [
      "24/7 call handling",
      "Appointment scheduling",
      "Caller information capture",
      "Intelligent call routing",
    ],
  },
  {
    id: "whatsapp-auto",
    icon: "💬",
    title: "WhatsApp Business Automation",
    description:
      "Transform WhatsApp into a fully automated business channel — from lead capture and follow-up to order management and customer support.",
    features: [
      "Instant lead response",
      "Automated follow-up sequences",
      "Order management",
      "Broadcast campaigns",
    ],
  },
  {
    id: "lead-system",
    icon: "🎯",
    title: "Lead Capture & Follow-Up System",
    description:
      "A complete lead management system that captures enquiries from all channels, qualifies them automatically, and nurtures them with timely follow-ups until they convert.",
    features: [
      "Multi-channel lead capture",
      "Auto-qualification scoring",
      "Drip follow-up sequences",
      "Lead status dashboard",
    ],
  },
  {
    id: "booking",
    icon: "📅",
    title: "Appointment Booking System",
    description:
      "A professional booking system that lets customers schedule, reschedule, and cancel appointments — with automatic confirmations and reminders that reduce no-shows.",
    features: [
      "Online self-booking",
      "Automated reminders",
      "WhatsApp confirmations",
      "Calendar synchronization",
    ],
  },
  {
    id: "doc-collection",
    icon: "📁",
    title: "Document Collection Workflow",
    description:
      "An automated document portal that requests, collects, validates, and organises documents from clients — eliminating the endless back-and-forth.",
    features: [
      "Automated document requests",
      "Smart deadline reminders",
      "Secure file portal",
      "Completion status tracking",
    ],
  },
  {
    id: "review-mgmt",
    icon: "⭐",
    title: "Review Management Automation",
    description:
      "A system that automatically requests reviews from happy customers at the right moment, monitors review platforms, and flags negative feedback for immediate response.",
    features: [
      "Automated review requests",
      "Multi-platform monitoring",
      "Negative review alerts",
      "Response templates",
    ],
  },
  {
    id: "workflow-auto",
    icon: "⚙️",
    title: "Internal Workflow Automation",
    description:
      "Automate your internal business processes — from task assignment and status updates to reporting and team communication — so operations run smoothly.",
    features: [
      "Process automation",
      "Auto task assignment",
      "Status notifications",
      "Automated performance reports",
    ],
  },
  {
    id: "dashboard",
    icon: "📊",
    title: "Business Intelligence Dashboard",
    description:
      "A real-time business dashboard that aggregates data from all your systems — giving you complete visibility into leads, revenue, operations, and customer satisfaction.",
    features: [
      "Real-time KPI tracking",
      "Multi-source data integration",
      "Automated reporting",
      "Custom alerts and triggers",
    ],
  },
  {
    id: "knowledge-base",
    icon: "🧠",
    title: "Knowledge Base AI",
    description:
      "Train an AI on your business knowledge — products, services, policies, FAQs — and deploy it across all customer touchpoints to deliver consistent, accurate answers.",
    features: [
      "Custom knowledge training",
      "Multi-channel deployment",
      "Continuous improvement",
      "Human escalation routing",
    ],
  },
  {
    id: "custom-ai",
    icon: "✨",
    title: "Custom AI Assistants",
    description:
      "Bespoke AI assistants designed around your specific business workflows — from proposal generation to client onboarding to internal team productivity tools.",
    features: [
      "Business-specific design",
      "Custom workflow integration",
      "Scalable architecture",
      "Ongoing optimisation",
    ],
  },
  {
    id: "order-mgmt",
    icon: "📦",
    title: "Order Management System",
    description:
      "A complete order management system that handles orders from multiple channels, automates status updates, and keeps customers informed throughout fulfillment.",
    features: [
      "Multi-channel order capture",
      "Automated status updates",
      "Customer notifications",
      "Inventory level alerts",
    ],
  },
  {
    id: "onboarding",
    icon: "🚀",
    title: "Customer Onboarding Automation",
    description:
      "A structured onboarding sequence that guides new customers through your process, collects necessary information, and sets clear expectations — automatically.",
    features: [
      "Welcome sequence automation",
      "Information collection workflow",
      "Progress tracking",
      "Milestone notifications",
    ],
  },
  {
    id: "proposal",
    icon: "📄",
    title: "Proposal Automation",
    description:
      "Generate professional, personalised proposals automatically based on client requirements — reducing proposal creation time from days to minutes.",
    features: [
      "Automated proposal generation",
      "Personalised templates",
      "Digital signature integration",
      "Proposal tracking and analytics",
    ],
  },
  {
    id: "crm",
    icon: "🔗",
    title: "CRM Integrations",
    description:
      "Connect all your business tools — CRM, accounting, booking, communication — into a unified system where data flows automatically without manual entry.",
    features: [
      "Multi-system integration",
      "Automated data synchronization",
      "Unified customer view",
      "Custom API integrations",
    ],
  },
  {
    id: "ai-creative-videos",
    icon: "🎬",
    title: "AI Property Videos & Advertisement Creation",
    description:
      "Transform ordinary property photos, products, and business ideas into premium cinematic AI videos and advertisements using advanced AI-powered creative workflows.",
    features: [
      "AI Property Showcase Videos",
      "AI Real Estate Listing Videos",
      "AI Commercial Advertisements",
      "AI Product Advertisement Videos",
      "AI Social Media Ads",
      "AI Cinematic Marketing Videos"
    ],
    href: "/services/ai-creative-videos"
  },
  {
    id: "ai-support-chatbot",
    icon: "💬",
    title: "AI Customer Support Chatbot",
    description: "An intelligent AI-powered customer support assistant that instantly responds to customer inquiries across WhatsApp and websites 24/7.",
    features: [
      "24/7 Customer Support",
      "Instant Responses",
      "WhatsApp & Website Integration",
      "Human Agent Handoff"
    ],
    href: "/services/ai-support-chatbot"
  },
  {
    id: "personal-ai-assistant",
    icon: "🧠",
    title: "Personal AI Assistant Development",
    description: "Build a customized AI assistant designed specifically for your business workflow. Automate repetitive tasks, retrieve information, and improve daily productivity.",
    features: [
      "Custom Knowledge Base",
      "Document Intelligence",
      "Workflow Automation",
      "Internal Team Assistant"
    ],
    href: "/services/personal-ai-assistant"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "A focused 30-minute call to understand your business, your current workflows, and the biggest bottlenecks costing you time and money.",
    icon: "📞",
    duration: "30 min",
  },
  {
    step: 2,
    title: "Business Analysis",
    description:
      "I map your entire operation — how enquiries come in, how you handle customers, where the delays are, and where automation can have the most impact.",
    icon: "🔍",
    duration: "1–2 days",
  },
  {
    step: 3,
    title: "Workflow Mapping",
    description:
      "Every process is documented visually — inputs, decisions, outputs, and handoffs — to create a clear blueprint for your automation system.",
    icon: "🗺️",
    duration: "1–2 days",
  },
  {
    step: 4,
    title: "Solution Design",
    description:
      "I design the complete system architecture — which tools, which automations, which integrations — tailored exactly to your business needs and budget.",
    icon: "✏️",
    duration: "2–3 days",
  },
  {
    step: 5,
    title: "Development",
    description:
      "I build your systems using proven AI tools and automation platforms — every component tested individually before integration.",
    icon: "⚙️",
    duration: "1–3 weeks",
  },
  {
    step: 6,
    title: "Testing",
    description:
      "Rigorous testing with real business scenarios — edge cases, high volume, and failure states — ensuring the system works reliably before going live.",
    icon: "🧪",
    duration: "2–3 days",
  },
  {
    step: 7,
    title: "Deployment",
    description:
      "Smooth handover with full documentation, training for your team, and live monitoring to ensure everything runs perfectly from day one.",
    icon: "🚀",
    duration: "1–2 days",
  },
  {
    step: 8,
    title: "Support & Optimisation",
    description:
      "Ongoing monitoring, performance analysis, and system improvements to ensure your automation keeps delivering results as your business grows.",
    icon: "🔧",
    duration: "Ongoing",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    label: "Demo Solution",
    industry: "CA Firm",
    industryIcon: "📊",
    problem:
      "A mid-size CA firm was spending 15+ hours per week collecting documents from clients via WhatsApp and email, with constant follow-ups and lost documents causing billing delays.",
    existingProcess:
      "Partner sends WhatsApp → Client responds inconsistently → Staff manually chase → Documents stored in personal WhatsApp chats → Frequently lost or delayed",
    solution:
      "Automated document collection portal with WhatsApp integration, smart deadline reminders, and a centralised document dashboard accessible to the entire team.",
    workflow: [
      "Client WhatsApp → AI acknowledges & sends secure document link",
      "Automated reminders at 24h, 48h, 72h intervals",
      "Documents validated and categorised automatically",
      "Team notified via dashboard when complete",
      "Automated client confirmation sent",
    ],
    impact: [
      "Document collection time reduced by 65%",
      "Zero documents lost in personal chats",
      "Staff saved 12 hours/week on follow-ups",
      "Client satisfaction scores improved",
    ],
    tags: ["WhatsApp Automation", "Document Collection", "CA Firms", "Workflow"],
    color: "emerald",
  },
  {
    id: "cs2",
    label: "Demo Solution",
    industry: "Hospital & Clinic",
    industryIcon: "🏥",
    problem:
      "A busy multi-specialty clinic was receiving 200+ appointment calls daily, with front desk staff overwhelmed, long hold times, and high missed call rates costing potential patients.",
    existingProcess:
      "Patient calls → Hold for 5–10 min → Manual scheduling → Paper confirmation → Frequent no-shows → Staff make manual reminder calls",
    solution:
      "AI Voice + WhatsApp Receptionist that handles all appointment bookings, sends automated confirmations, and delivers smart reminders that reduce no-shows by 40%.",
    workflow: [
      "Patient calls or WhatsApp messages → AI receptionist greets instantly",
      "AI collects: name, concern, preferred time, doctor preference",
      "Slot checked against live calendar → Booking confirmed instantly",
      "WhatsApp confirmation with pre-visit instructions sent automatically",
      "Reminder sent 24h and 1h before appointment",
    ],
    impact: [
      "100% of calls answered — zero missed opportunities",
      "No-shows reduced by 40%",
      "Front desk load reduced by 60%",
      "24/7 booking capability introduced",
    ],
    tags: ["AI Voice", "WhatsApp", "Appointment Booking", "Healthcare"],
    color: "blue",
  },
  {
    id: "cs3",
    label: "Concept Workflow",
    industry: "Real Estate Agency",
    industryIcon: "🏢",
    problem:
      "A real estate agency was responding to property enquiries 4–6 hours after submission, by which time prospects had already contacted competitors. Agents wasted time on unqualified leads.",
    existingProcess:
      "Lead form submitted → Email notification → Agent reads next day → Manual follow-up call → Unqualified leads consume same time as serious buyers",
    solution:
      "Instant AI lead qualification system that responds within 60 seconds, collects buyer requirements, scores lead quality, and routes hot leads directly to the right agent.",
    workflow: [
      "Lead submits form or WhatsApp enquiry → AI responds in 60 seconds",
      "AI qualifies: budget, timeline, location preference, property type",
      "Lead scored: Hot / Warm / Cold based on responses",
      "Hot leads → Immediate agent notification with full buyer brief",
      "Cold leads → Automated nurture sequence over 30 days",
    ],
    impact: [
      "Response time from 4 hours to under 60 seconds",
      "Agents focused exclusively on qualified leads",
      "3x improvement in lead-to-viewing conversion",
      "Zero leads left uncontacted",
    ],
    tags: ["Lead Qualification", "CRM Integration", "Real Estate", "WhatsApp"],
    color: "purple",
  },
  {
    id: "cs4",
    label: "Demo Solution",
    industry: "Coaching Institute",
    industryIcon: "🎓",
    problem:
      "A coaching institute was losing prospective students because enquiries came in after hours with no response, and manual follow-up was inconsistent, costing significant enrollment revenue.",
    existingProcess:
      "Student enquires → Voicemail or no answer → Counselor calls next day → Manual enrollment process → High drop-off during onboarding",
    solution:
      "End-to-end student enquiry and enrollment automation — from instant AI response to automated enrollment workflow and payment collection.",
    workflow: [
      "Student enquires via WhatsApp or website → AI responds instantly 24/7",
      "AI provides course info, batch timings, fee structure automatically",
      "Student shown available batches → Selects preference",
      "Payment link sent → Enrollment confirmed automatically",
      "Welcome kit and schedule sent → Student fully onboarded",
    ],
    impact: [
      "Zero enquiries go unanswered regardless of hours",
      "Enrollment time cut from 3 days to under 2 hours",
      "Counselor staff freed for value-add activities",
      "25% improvement in enquiry-to-enrollment conversion rate",
    ],
    tags: ["Lead Nurturing", "Enrollment Automation", "Education", "Payment"],
    color: "amber",
  },
];

export const demoVideos: DemoVideo[] = [
  {
    id: "dv1",
    title: "Restaurant Ordering Assistant",
    industry: "Restaurant",
    icon: "🍽️",
    description:
      "Watch how a restaurant uses WhatsApp AI to take orders, confirm tables, and answer menu questions automatically.",
    duration: "3:45",
    tag: "WhatsApp Automation",
  },
  {
    id: "dv2",
    title: "Hospital Support AI",
    industry: "Healthcare",
    icon: "🏥",
    description:
      "See an AI receptionist handle patient appointment bookings and pre-visit queries without any human involvement.",
    duration: "4:20",
    tag: "AI Voice + WhatsApp",
  },
  {
    id: "dv3",
    title: "CA Firm Document Collection",
    industry: "Accounting",
    icon: "📊",
    description:
      "How an automated document portal eliminated 15 hours of weekly client follow-up for a CA practice.",
    duration: "2:55",
    tag: "Workflow Automation",
  },
  {
    id: "dv4",
    title: "Real Estate Lead Qualifier",
    industry: "Real Estate",
    icon: "🏢",
    description:
      "An AI system that qualifies property enquiries, scores leads, and routes hot prospects to agents instantly.",
    duration: "3:10",
    tag: "Lead Management",
  },
  {
    id: "dv5",
    title: "Voice AI Receptionist",
    industry: "Professional Services",
    icon: "🎙️",
    description:
      "A voice AI that answers calls, collects information, and schedules callbacks — 24 hours a day, 7 days a week.",
    duration: "2:30",
    tag: "AI Voice",
  },
  {
    id: "dv6",
    title: "WhatsApp Business Suite",
    industry: "SMB",
    icon: "💬",
    description:
      "A complete WhatsApp automation system handling leads, orders, support, and follow-ups for a growing business.",
    duration: "5:15",
    tag: "Full Automation",
  },
];

export const whyWorkWithMe: WhyWorkWithMe[] = [
  {
    id: "w1",
    icon: "🎯",
    title: "Tailor-Made Systems",
    description:
      "Every system is designed from scratch around your specific business — not generic templates that half-fit your workflow.",
  },
  {
    id: "w2",
    icon: "💡",
    title: "Business-First Approach",
    description:
      "I start with your business problems, not with technology. The solution always serves your operations — not the other way around.",
  },
  {
    id: "w3",
    icon: "🔧",
    title: "End-to-End Implementation",
    description:
      "From strategy and design to development, testing, and deployment — I handle the complete project so you don't manage multiple vendors.",
  },
  {
    id: "w4",
    icon: "📈",
    title: "Scalable Architecture",
    description:
      "Every system I build is designed to grow with your business — handling more volume, more channels, and more complexity without rebuilding.",
  },
  {
    id: "w5",
    icon: "🤝",
    title: "Long-Term Partnership",
    description:
      "I remain a partner after delivery — monitoring performance, fixing issues, and continuously improving your systems as your business evolves.",
  },
  {
    id: "w6",
    icon: "💰",
    title: "Focus on ROI",
    description:
      "Every automation is justified by measurable business impact — time saved, leads converted, costs reduced. Not automation for its own sake.",
  },
  {
    id: "w7",
    icon: "💬",
    title: "Clear Communication",
    description:
      "No technical jargon, no hidden surprises. You always know what is being built, why, and when it will be ready.",
  },
  {
    id: "w8",
    icon: "✨",
    title: "Premium Quality Delivery",
    description:
      "The systems I build are robust, reliable, and professional — the kind that make your business look and operate like a market leader.",
  },
];

export const articles: Article[] = [
  {
    id: "a1",
    title:
      "Why Most Business Automation Projects Fail (And How to Avoid It)",
    excerpt:
      "The three most common mistakes businesses make when implementing automation — and the mindset shift that separates successful digital transformation from expensive disappointment.",
    topic: "Business Automation",
    readTime: "5 min",
    date: "Jun 2026",
    slug: "why-automation-projects-fail",
  },
  {
    id: "a2",
    title: "WhatsApp as a Business System: Beyond Simple Messaging",
    excerpt:
      "How forward-thinking businesses are turning WhatsApp into a complete customer communication and operations platform — from lead capture to post-sale support.",
    topic: "WhatsApp Automation",
    readTime: "6 min",
    date: "May 2026",
    slug: "whatsapp-business-system",
  },
  {
    id: "a3",
    title:
      "The CA Firm's Guide to Eliminating Client Follow-Up Work",
    excerpt:
      "A practical breakdown of how accounting and CA firms can automate document collection, client communication, and workflow management to reclaim hours every week.",
    topic: "CA Firms",
    readTime: "7 min",
    date: "Apr 2026",
    slug: "ca-firm-automation-guide",
  },
  {
    id: "a4",
    title: "AI Customer Experience: What Clients and Patients Actually Want",
    excerpt:
      "Research-backed insights on how customers respond to AI-powered communication — and the design principles that make automation feel human, not robotic.",
    topic: "Customer Experience",
    readTime: "5 min",
    date: "Mar 2026",
    slug: "ai-customer-experience",
  },
  {
    id: "a5",
    title:
      "From Enquiry to Enrolled: Automating the Coaching Institute Journey",
    excerpt:
      "A complete walkthrough of how coaching institutes can automate the student journey from first enquiry to enrollment — without losing the personal touch.",
    topic: "Education Automation",
    readTime: "8 min",
    date: "Feb 2026",
    slug: "coaching-institute-automation",
  },
  {
    id: "a6",
    title: "Measuring ROI on AI Automation: A Framework for Business Owners",
    excerpt:
      "A practical framework for calculating and tracking the return on investment from AI automation projects — so you can make confident decisions on where to invest next.",
    topic: "Business Strategy",
    readTime: "6 min",
    date: "Jan 2026",
    slug: "ai-automation-roi-framework",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "Kumail built us an automated document collection system that eliminated our biggest weekly headache. What used to take 15 hours of chasing clients in Delhi now happens automatically. The ROI was clear within the first month.",
    name: "Tariq Bhat",
    role: "CA Partner, New Delhi",
    avatar: "TB",
  },
  {
    id: "t2",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "Our appointment booking is now 100% automated via WhatsApp. No-shows dropped by 40% after reminders were set up. Our front desk team in Mumbai is finally free to focus on patients in front of them.",
    name: "Dr. Saima Mir",
    role: "Clinic Administrator, Mumbai",
    avatar: "SM",
  },
  {
    id: "t3",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "From the first call, it was clear Kumail understood Indian business operations, not just technology. He mapped our entire manufacturing workflow and built a system that genuinely changed how our Bangalore plant operates.",
    name: "Amit Kumar",
    role: "Operations Director, Bangalore",
    avatar: "AK",
  },
  {
    id: "t4",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "The WhatsApp automation system has transformed our customer communication. We now respond to every enquiry from across India in seconds. Our lead conversion rate has doubled since deployment.",
    name: "Abid Amin Wani",
    role: "E-commerce Founder, Srinagar",
    avatar: "AW",
  },
  {
    id: "t5",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "Kumail built a restaurant reservation and ordering system that works beautifully on WhatsApp. Our customers in Pune love the experience and our staff can focus on hospitality rather than answering phones during rush hour.",
    name: "Rohan Desai",
    role: "Restaurant Owner, Pune",
    avatar: "RD",
  },
  {
    id: "t6",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "We were losing high-intent real estate leads because our sales team couldn't reply fast enough. The AI response system Kumail built now qualifies leads instantly 24/7. Our site visits in Hyderabad have gone up by 35%.",
    name: "Vikram Reddy",
    role: "Real Estate Broker, Hyderabad",
    avatar: "VR",
  },
  {
    id: "t7",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "Managing student enquiries during admission season used to be a nightmare. Now, our WhatsApp bot handles course details, fee structures, and even enrollment links automatically. It's like having 5 extra staff members.",
    name: "Meera Sharma",
    role: "Coaching Institute Director, Kota",
    avatar: "MS",
  },
  {
    id: "t8",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "Generating travel itineraries manually took our agents hours. Kumail integrated AI into our quoting process, and we now send customized packages to clients in minutes. It completely changed our conversion metrics.",
    name: "Rahul Singh",
    role: "Travel Agency Founder, Jaipur",
    avatar: "RS",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "How do I know if automation is right for my business?",
    answer:
      "If your team spends more than 2 hours daily on repetitive tasks like answering the same questions, chasing documents, or manually following up leads — automation will deliver a clear return. We start with a free audit to identify the highest-impact opportunities specific to your business.",
  },
  {
    question: "How long does it take to build and deploy an automation system?",
    answer:
      "Most systems are live within 1–3 weeks. Simpler automations like WhatsApp response systems can be deployed in 3–5 days. Complex multi-system integrations take 2–4 weeks. I provide a detailed timeline after the discovery call once I understand your full requirements.",
  },
  {
    question: "What tools and platforms do you use?",
    answer:
      "I use proven, enterprise-grade platforms — including n8n, Make (Integromat), WhatsApp Business API, OpenAI, and custom-built systems depending on your requirements. I recommend the right tool for your specific business context, not the most expensive or fashionable option.",
  },
  {
    question:
      "Will my team need technical knowledge to use these systems?",
    answer:
      "No. Every system is designed for non-technical teams. I provide training, full documentation, and an ongoing support relationship to ensure your team can manage day-to-day operations confidently without any technical background.",
  },
  {
    question: "What happens after the system is deployed?",
    answer:
      "I provide ongoing monitoring and support — tracking system performance, fixing any issues proactively, and continuously optimising based on real business data. You have a long-term partner, not a one-time vendor who disappears after delivery.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Pricing depends on the complexity and scope of the system. Most projects start from ₹25,000 for basic automation and scale based on integrations and custom development required. I discuss this openly after understanding your requirements — no surprises, no hidden costs.",
  },
  {
    question: "Can you integrate with the tools I already use?",
    answer:
      "Yes. I design systems around your existing software — whether that's a CRM, accounting system, booking platform, or any other tool your business relies on. Integration with existing infrastructure is a core part of every project I deliver.",
  },
];
