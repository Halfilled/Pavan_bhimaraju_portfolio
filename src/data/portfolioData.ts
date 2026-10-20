export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'AI & Security' | 'Full Stack & Distributed' | 'Web & Health' | 'Real-Time Systems';
  technologies: string[];
  description: string;
  features: string[];
  metrics?: string;
  architectureDetails: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  badge: string;
  colorTheme: 'cyan' | 'blue' | 'orange';
  codeSnippet?: string;
}

export interface SkillNode {
  id: string;
  name: string;
  level: string;
  category: string;
  description: string;
  connectedProjects: string[];
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDesc: string;
  color: string;
  accentBg: string;
  skills: SkillNode[];
}

export interface CampusExperience {
  id: string;
  number: number;
  role: string;
  organization: string;
  tagline: string;
  category: 'Leadership' | 'Entrepreneurship' | 'Innovation' | 'Community' | 'Sports & Culture' | 'Research';
  location: string;
  tenure: string;
  coordinates: { x: number; y: number }; // percentage on campus grid map
  highlights: string[];
  detailedStory: string;
  skillsAcquired: string[];
  metrics: string;
  color: string;
  iconType: 'chart' | 'bulb' | 'trophy' | 'heart' | 'code' | 'users';
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Certification' | 'Competition' | 'Leadership' | 'Community';
  date: string;
  year: string;
  credentialUrl?: string;
  summary: string;
  details: string;
  aboutEvent: string;
  myRole: string;
  outcome: string;
  skillsVerified: string[];
  verified: boolean;
  badgeText: string;
  colorTheme: 'blue' | 'orange' | 'teal' | 'purple' | 'cobalt' | 'peach';
  iconType: 'java' | 'trophy' | 'chart' | 'bulb' | 'growth' | 'heart';
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Pavan Bhimaraju",
    title: "Computer Science Engineering Student",
    subtitles: [
      "AI & Software Development",
      "Data Structures & Algorithms",
      "Full Stack Web Architecture",
      "E-Cell & Club Leadership"
    ],
    location: "Visakhapatnam, Andhra Pradesh, India",
    email: "pavanbhimaraju4@gmail.com",
    phone: "+91 9391029440",
    linkedin: "https://linkedin.com/in/pavanbhimaraju",
    github: "https://github.com/Pavan8930",
    leetcode: "https://leetcode.com/u/pavanbhimaraju/",
    education: [
      {
        degree: "B.Tech in Computer Science Engineering",
        institution: "Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam",
        period: "2023 – 2027 (Pursuing)",
        score: "CGPA: 8.27",
        details: "Focus on AI Systems, Data Structures, Distributed Architecture, and Algorithms."
      },
      {
        degree: "Intermediate (MPC)",
        institution: "Narayana Junior College, Eluru",
        period: "2021 – 2023",
        score: "Percentage: 96.7%",
        details: "Mathematics, Physics, Chemistry excellence."
      },
      {
        degree: "CBSE Class 10th",
        institution: "Sir CR Reddy Public School, Eluru",
        period: "2021",
        score: "Percentage: 78.8%",
        details: "Foundational education in science and mathematics."
      }
    ],
    internship: {
      role: "Web Development Intern",
      company: "TEKNOV8R",
      period: "May 2025 – July 2025",
      points: [
        "Contributed to the development of the Teen Wellness Mobile Application by researching user personas, designing UI screens, and developing core application features using AI-based IDEs.",
        "Led troubleshooting and bug-fixing efforts, systematically improving application stability and runtime performance.",
        "Developed key core screens and user-centric features by applying creative thinking, technical aptitude, and self-learning abilities."
      ]
    }
  },

  projects: [
    {
      id: "gitguardian-ai",
      name: "GitGuardian AI",
      tagline: "Agentic Code Security & Vulnerability Review Platform",
      category: "AI & Security",
      technologies: ["Django", "Django REST Framework", "LangGraph", "LangChain", "OpenAI", "Celery", "Redis", "Docker"],
      description: "An AI-powered, agentic code security review platform that automates static code analysis, detects deep security vulnerabilities, evaluates software architecture, and generates actionable AI remediation guidance.",
      features: [
        "Multi-Agent Orchestration: Specialised AI agents coordinate across Static Analysis, Security Auditing, Architecture Evaluation, and Documentation Review.",
        "Flexible Ingestion: Accepts GitHub repository URLs or direct ZIP codebase uploads.",
        "Asynchronous Task Queue: Celery & Redis manage distributed background scans without blocking client traffic.",
        "Automated PDF Security Reports: Generates downloadable executive vulnerability summaries and code remediation patches.",
        "Docker Containerized: Streamlined deployment with containerized task workers and caching layers."
      ],
      metrics: "Multi-Agent Graph • Async Queue • PDF Generation",
      architectureDetails: [
        "LangGraph workflow state machine routing review steps across specialized agents",
        "Django REST Framework backend handling payload validation and auth",
        "Celery background workers with Redis broker for repository cloning & parsing",
        "Dockerized sandbox for isolated AST & dependency tree extraction"
      ],
      githubUrl: "https://github.com/Pavan8930/gitguardian-ai",
      badge: "FEATURED AI SYSTEM",
      colorTheme: "cyan",
      codeSnippet: `class CodeReviewGraph:
    def __init__(self, repo_path: str):
        self.workflow = StateGraph(ReviewState)
        self.workflow.add_node("static_analyzer", run_static_analysis)
        self.workflow.add_node("security_auditor", audit_security_vulnerabilities)
        self.workflow.add_node("arch_evaluator", inspect_architecture)
        self.workflow.add_edge("static_analyzer", "security_auditor")
        self.workflow.add_edge("security_auditor", "arch_evaluator")
        self.app = self.workflow.compile()`
    },
    {
      id: "hospital-queue-system",
      name: "Smart Hospital Queue & Appointment System",
      tagline: "Distributed Healthcare Operations & Queue Management Engine",
      category: "Full Stack & Distributed",
      technologies: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery"],
      description: "A web-based platform designed to streamline hospital operations by digitizing appointment scheduling, patient registration, and queue management, minimizing manual bottlenecks and hospital waiting times.",
      features: [
        "Real-Time Queue Tracking: Live queue status updates for waiting patients and clinical staff.",
        "Automated Notifications: Turn reminders and scheduling alerts to eliminate overcrowding.",
        "Dual Portal Workflows: Distinct role-based portals for doctors, triage nurses, and hospital administrators.",
        "Asynchronous Scheduling Pipeline: Background task execution via Celery and Redis to handle concurrent surge loads.",
        "PostgreSQL Relational Schema: Highly normalized relational records for appointments, doctor shifts, and audit logs."
      ],
      metrics: "Zero Bottlenecks • Real-Time Queues • Celery Workers",
      architectureDetails: [
        "Redis caching for active queue status and fast atomic increments",
        "Celery scheduled tasks dispatching SMS/email reminders ahead of queue slots",
        "PostgreSQL transactions ensuring zero race-conditions during booking collisions",
        "REST API endpoints with granular permissions and token auth"
      ],
      githubUrl: "https://github.com/Pavan8930/hospital-queue-system",
      badge: "BACKEND & DISTRIBUTED",
      colorTheme: "blue",
      codeSnippet: `@shared_task
def process_queue_transition(appointment_id):
    appointment = Appointment.objects.select_for_update().get(id=appointment_id)
    appointment.status = 'IN_CONSULTATION'
    appointment.save()
    redis_client.publish(f"queue_channel_{appointment.doctor_id}", {
        "current_token": appointment.token_number,
        "remaining_count": Appointment.objects.filter(doctor=appointment.doctor, status='WAITING').count()
    })`
    },
    {
      id: "healthcare-management-system",
      name: "Full-Stack Healthcare Management Platform",
      tagline: "End-to-End Clinical Practice Suite & Payment Gateway Integration",
      category: "Full Stack & Distributed",
      technologies: ["Django", "Python", "Stripe API", "PayPal SDK", "Email API", "HTML/CSS", "Bootstrap"],
      description: "A comprehensive full-stack healthcare platform built with Django featuring multi-level role authentication, dynamic administrative controls, dynamic appointment scheduling, and automated payment gateway processing.",
      features: [
        "Multi-Tier Role-Based Access: Secure authentication separation for patients, medical staff, and superadmins.",
        "Billing & Payment Integrations: Integrated online checkout pipelines via Stripe and PayPal.",
        "Dynamic Practice Dashboards: Customized analytics for clinic revenue, daily patient traffic, and service utilization.",
        "Automated Email Dispatch: Instant booking confirmations and diagnostic invoice delivery via transactional email APIs.",
        "Comprehensive Service Catalogs: Configurable medical department listings and physician specialties."
      ],
      metrics: "Stripe & PayPal • Role RBAC • Automated Email",
      architectureDetails: [
        "Django Auth & Custom User models supporting multi-role RBAC",
        "Stripe Webhook handlers for reliable server-side payment verification",
        "Transactional email pipelines with SMTP failover",
        "Dynamic Django template rendering with customized admin views"
      ],
      badge: "PRODUCTION FULL-STACK",
      colorTheme: "orange",
      codeSnippet: `def stripe_webhook(request):
    payload = request.body
    sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
    event = stripe.Webhook.construct_event(payload, sig_header, settings.STRIPE_WEBHOOK_SECRET)
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        fulfill_appointment_order(session.client_reference_id)`
    },
    {
      id: "teen-wellness-app",
      name: "Teen Wellness App",
      tagline: "Youth Mental Health & Habit Formation Digital Companion",
      category: "Web & Health",
      technologies: ["UI/UX Design", "AI-assisted IDEs", "JavaScript", "HTML/CSS", "Analytics Engine"],
      description: "An interactive well-being platform focused on teenagers' mental health, habit formation, and physical wellness, built during the Web Development Internship at TEKNOV8R.",
      features: [
        "Daily Streak Tracking: Gamified habit retention mechanisms encouraging healthy daily routines.",
        "Percentage-Based Analytics: Visual performance metrics tracking sleep, mindfulness, and fitness milestones.",
        "Seamless Four-Pillar Navigation: Fluid transition across Home, Community, Explore, and Profile domains.",
        "Youth Persona Research: Thoughtfully designed interface catering specifically to teenage ergonomics and cognitive ease.",
        "Resource Hub: Safe explore zone with guided relaxation and mindfulness exercises."
      ],
      metrics: "TEKNOV8R Internship • Streak Engine • User Analytics",
      architectureDetails: [
        "Researched user personas to inform high-accessibility youth typography and pastel-free vibrant UI",
        "Interactive habit state machine calculating streaks, streaks preservation, and completion scores",
        "Client-side performance analytics computing weekly consistency trends",
        "Built and debugged core screens leveraging modern AI-assisted engineering workflows"
      ],
      badge: "INTERNSHIP HIGHLIGHT",
      colorTheme: "cyan"
    },
    {
      id: "realtime-chat-app",
      name: "Real-Time WebSocket Chat Application",
      tagline: "Low-Latency Bi-Directional Messaging Platform",
      category: "Real-Time Systems",
      technologies: ["Django Channels", "WebSockets", "Tailwind CSS", "ASGI", "SQLite/PostgreSQL"],
      description: "A real-time chat platform leveraging Django Channels and WebSockets that allows users to communicate instantly across rooms with database persistence and auto-scrolling ergonomics.",
      features: [
        "Full-Duplex WebSockets: Instant bidirectional message exchange without HTTP polling.",
        "Multi-Room Isolation: Dynamic chat rooms allowing isolated group conversations and direct messaging.",
        "Persistent Storage: Database-backed message history with pagination and timestamp verification.",
        "Modern Tailwind Interface: Responsive layout featuring auto-scroll to latest message and typing states."
      ],
      metrics: "Full-Duplex ASGI • Multi-Room • Tailwind CSS",
      architectureDetails: [
        "Django Channels ASGI consumer handling WebSocket handshakes and disconnection cycles",
        "Channel Layers multiplexing broadcast events across connected room peers",
        "Clean TailwindCSS layout with flexbox conversation feeds and responsive viewport handling",
        "Synchronous-to-asynchronous ORM bridging with database_sync_to_async decorators"
      ],
      badge: "WEBSOCKETS & ASGI",
      colorTheme: "blue",
      codeSnippet: `class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

    async def receive(self, text_data):
        data = json.loads(text_data)
        await self.save_message(data['username'], data['message'])
        await self.channel_layer.group_send(
            self.room_group_name,
            {'type': 'chat_message', 'message': data['message'], 'username': data['username']}
        )`
    }
  ] as Project[],

  skills: [
    {
      id: "ai-data",
      title: "Artificial Intelligence & Data",
      shortDesc: "Exploring LLMs, Agentic Graphs, and Scientific Python Tooling",
      color: "#08A9C2",
      accentBg: "bg-[#08A9C2]",
      skills: [
        {
          id: "langgraph-langchain",
          name: "LangGraph & LangChain",
          level: "Specialized in GitGuardian AI",
          category: "AI & Data",
          description: "Multi-agent coordination, state machines, and autonomous evaluation workflows.",
          connectedProjects: ["gitguardian-ai"],
          tags: ["Agents", "LLMs", "StateGraph"]
        },
        {
          id: "openai-api",
          name: "OpenAI & LLM Integration",
          level: "Prompt Architecture & Structured Outputs",
          category: "AI & Data",
          description: "Structured JSON outputs, vulnerability remediation prompts, and context chaining.",
          connectedProjects: ["gitguardian-ai"],
          tags: ["Prompt Engineering", "Security Analysis"]
        },
        {
          id: "python-data",
          name: "Python (Core & Scientific)",
          level: "Primary Development Language",
          category: "AI & Data",
          description: "Idiomatic Python 3, object-oriented design, async patterns, and algorithmic problem-solving.",
          connectedProjects: ["gitguardian-ai", "hospital-queue-system", "healthcare-management-system"],
          tags: ["Core Lang", "Algorithms", "Backend"]
        },
        {
          id: "numpy",
          name: "NumPy",
          level: "Scientific Computing",
          category: "AI & Data",
          description: "Vectorized numerical computations, array transformations, and matrix operations.",
          connectedProjects: ["gitguardian-ai"],
          tags: ["Data", "Arrays", "Math"]
        },
        {
          id: "pandas",
          name: "Pandas",
          level: "Data Manipulation",
          category: "AI & Data",
          description: "Tabular data extraction, data cleansing, aggregations, and statistical summaries.",
          connectedProjects: ["gitguardian-ai"],
          tags: ["DataFrames", "Analysis"]
        }
      ]
    },
    {
      id: "programming-cs",
      title: "Programming & Computer Science",
      shortDesc: "Algorithmic Rigor, Foundations & Systems Thinking",
      color: "#0877B9",
      accentBg: "bg-[#0877B9]",
      skills: [
        {
          id: "dsa-python",
          name: "Data Structures & Algorithms",
          level: "Active LeetCode Problem Solver",
          category: "CS Foundations",
          description: "Trees, graphs, dynamic programming, heaps, two-pointer techniques, and asymptotic complexity analysis.",
          connectedProjects: ["gitguardian-ai", "hospital-queue-system"],
          tags: ["LeetCode", "Complexity", "Algorithms"]
        },
        {
          id: "javascript",
          name: "JavaScript (ES6+)",
          level: "Client & Async Scripting",
          category: "CS Foundations",
          description: "DOM manipulation, Promises, async/await, event loops, and interactive client components.",
          connectedProjects: ["teen-wellness-app", "realtime-chat-app"],
          tags: ["Web", "Async", "Frontend"]
        },
        {
          id: "sql-db",
          name: "SQL & Relational DBs",
          level: "Queries, Normalization & ACID",
          category: "CS Foundations",
          description: "PostgreSQL, SQLite, relational modeling, complex joins, indexing, and transactional integrity.",
          connectedProjects: ["hospital-queue-system", "healthcare-management-system", "realtime-chat-app"],
          tags: ["PostgreSQL", "Queries", "ACID"]
        },
        {
          id: "os",
          name: "Operating Systems",
          level: "Academic Rigor (ANITS B.Tech)",
          category: "CS Foundations",
          description: "Process synchronization, threading, concurrency, memory paging, file systems, and CPU scheduling.",
          connectedProjects: ["hospital-queue-system"],
          tags: ["Concurrency", "Processes", "Memory"]
        },
        {
          id: "cn",
          name: "Computer Networks",
          level: "Academic Rigor (ANITS B.Tech)",
          category: "CS Foundations",
          description: "OSI & TCP/IP stack, HTTP/HTTPS, WebSockets, DNS, routing protocols, and socket programming.",
          connectedProjects: ["realtime-chat-app", "gitguardian-ai"],
          tags: ["Sockets", "TCP/IP", "WebSockets"]
        }
      ]
    },
    {
      id: "web-backend",
      title: "Web Development & Backend",
      shortDesc: "Scalable APIs, Asynchronous Queues & Modern UI",
      color: "#F17C3B",
      accentBg: "bg-[#F17C3B]",
      skills: [
        {
          id: "django",
          name: "Django",
          level: "Core Backend Framework",
          category: "Web & Backend",
          description: "MVT pattern, ORM optimization, auth middleware, template engines, and security best practices.",
          connectedProjects: ["gitguardian-ai", "hospital-queue-system", "healthcare-management-system", "realtime-chat-app"],
          tags: ["Backend", "Python", "ORM"]
        },
        {
          id: "drf",
          name: "Django REST Framework (DRF)",
          level: "RESTful API Engineering",
          category: "Web & Backend",
          description: "Serializers, ViewSets, API throttling, token authentication, and clean schema design.",
          connectedProjects: ["gitguardian-ai", "hospital-queue-system"],
          tags: ["REST", "APIs", "Serializers"]
        },
        {
          id: "flask",
          name: "Flask",
          level: "Microservices & Prototyping",
          category: "Web & Backend",
          description: "Lightweight Python microservices, routing, request context, and API extensions.",
          connectedProjects: ["gitguardian-ai"],
          tags: ["Microservices", "Python"]
        },
        {
          id: "celery-redis",
          name: "Celery & Redis",
          level: "Distributed Background Queues",
          category: "Web & Backend",
          description: "Asynchronous job scheduling, publish/subscribe message brokering, and high-throughput caching.",
          connectedProjects: ["gitguardian-ai", "hospital-queue-system"],
          tags: ["Async Queue", "Broker", "Cache"]
        },
        {
          id: "tailwind-bootstrap",
          name: "Tailwind CSS & Bootstrap",
          level: "Responsive UI Architecture",
          category: "Web & Backend",
          description: "Utility-first design tokens, responsive breakpoints, mobile ergonomics, and fast component styling.",
          connectedProjects: ["realtime-chat-app", "healthcare-management-system", "teen-wellness-app"],
          tags: ["CSS", "Responsive", "UI"]
        },
        {
          id: "html-css-jquery",
          name: "HTML5, CSS3 & jQuery",
          level: "Semantic Markup & Interactive DOM",
          category: "Web & Backend",
          description: "Semantic structures, accessible markup, animations, and event-driven DOM handling.",
          connectedProjects: ["healthcare-management-system", "teen-wellness-app"],
          tags: ["Markup", "Styling", "DOM"]
        }
      ]
    },
    {
      id: "tools-dev",
      title: "Tools, DevOps & Environments",
      shortDesc: "Version Control, Deployment Sandboxes & Modern Tooling",
      color: "#17252D",
      accentBg: "bg-[#17252D]",
      skills: [
        {
          id: "git-github",
          name: "Git & GitHub",
          level: "Version Control & Collaboration",
          category: "Tools & DevOps",
          description: "Branching strategies, pull requests, commit hygiene, merge resolution, and repository management.",
          connectedProjects: ["gitguardian-ai", "hospital-queue-system"],
          tags: ["Git", "GitHub", "VCS"]
        },
        {
          id: "docker",
          name: "Docker Containerization",
          level: "Environment Isolation",
          category: "Tools & DevOps",
          description: "Dockerfile definitions, multi-container orchestration with Docker Compose, and environment parity.",
          connectedProjects: ["gitguardian-ai"],
          tags: ["Containers", "DevOps"]
        },
        {
          id: "vs-code-ides",
          name: "VS Code & AI-Assisted IDEs",
          level: "Primary Workflow Environment",
          category: "Tools & DevOps",
          description: "Efficient extensions, debugging configurations, integrated terminal workflows, and AI coding assistants.",
          connectedProjects: ["teen-wellness-app", "gitguardian-ai"],
          tags: ["IDE", "Debugging"]
        },
        {
          id: "android-studio",
          name: "Android Studio & ATOM",
          level: "Development Tooling",
          category: "Tools & DevOps",
          description: "Mobile app inspection, emulation, SDK tooling, and versatile code editing.",
          connectedProjects: ["teen-wellness-app"],
          tags: ["Mobile", "Tooling"]
        }
      ]
    }
  ] as SkillCategory[],

  campusExperiences: [
    {
      id: "bizverve",
      number: 1,
      role: "Vice President",
      organization: "BiZverve",
      tagline: "Business & Entrepreneurship Club",
      category: "Leadership",
      location: "ANITS Campus, Visakhapatnam",
      tenure: "2024 – Present",
      coordinates: { x: 19, y: 46 }, // Marker 1 on the isometric campus map
      highlights: [
        "Contributed to building a strong entrepreneurial ecosystem on campus.",
        "Helped plan and execute various entrepreneurship initiatives and organized workshops.",
        "Coordinated an inter-college summit with 250+ participants from colleges across Visakhapatnam.",
        "Organized speaker sessions, elevator pitching, and startup-related discussions with industry professionals and alumni."
      ],
      detailedStory: "As the Vice President of BiZverve, I contributed to building a strong entrepreneurial ecosystem on campus. I helped plan and execute various entrepreneurship initiatives, coordinated an inter-college summit with 250+ participants, and organized workshops, speaker sessions and startup-related discussions to inspire students and connect them with industry professionals and alumni.",
      skillsAcquired: ["Executive Leadership", "Summit Coordination", "Public Speaking", "Cross-Team Delegation", "Strategic Budgeting"],
      metrics: "250+ Summit Attendees • Inter-College Network • Business Workshops",
      color: "#F17C3B",
      iconType: "chart"
    },
    {
      id: "iic-coordinator",
      number: 2,
      role: "IIC Department Coordinator",
      organization: "Institution's Innovation Council (IIC)",
      tagline: "Ministry of Education Innovation Cell",
      category: "Innovation",
      location: "Department of CSE, ANITS",
      tenure: "2024 – Present",
      coordinates: { x: 36, y: 55 }, // Marker 2 on the isometric campus map
      highlights: [
        "Organized and coordinated departmental IIC events for Computer Science Engineering.",
        "Worked closely with students and faculty to plan innovation and entrepreneurship-focused activities.",
        "Encouraged students to explore creative problem-solving and patent awareness initiatives.",
        "Facilitated hackathons, ideation sessions, and technical seminars in alignment with national IIC guidelines."
      ],
      detailedStory: "As an IIC (Institution’s Innovation Council) Coordinator, I played an active role in organizing and coordinating IIC events for my department. I worked closely with students and faculty to plan and execute various innovation and entrepreneurship-focused activities, encouraging students to explore new ideas, develop creative solutions, and participate in innovation-driven initiatives.",
      skillsAcquired: ["Academic-Industry Bridge", "Event Orchestration", "Mentorship", "Innovation Frameworks"],
      metrics: "Department-Wide Impact • Faculty Alignment • Innovation Workshops",
      color: "#08A9C2",
      iconType: "bulb"
    },
    {
      id: "ecell-president",
      number: 3,
      role: "E-Cell President & National Finalist",
      organization: "Entrepreneurship Cell (E-Cell)",
      tagline: "National Entrepreneurship Challenge (NEC) Finalist",
      category: "Entrepreneurship",
      location: "ANITS & IIT Bombay (Powai, Mumbai)",
      tenure: "2024 – Present",
      coordinates: { x: 26, y: 39 }, // Marker 3 on the isometric campus map
      highlights: [
        "Led and coordinated entrepreneurship-focused initiatives while encouraging students to explore innovation.",
        "Spearheaded participation in the National Entrepreneurship Challenge conducted by IIT Bombay.",
        "Successfully qualified for the Grand Finals at IIT Bombay campus alongside premier national teams.",
        "Strengthened leadership, teamwork, problem-solving, and entrepreneurial skills under a competitive national platform."
      ],
      detailedStory: "As the E-Cell President, I led and coordinated entrepreneurship-focused initiatives while encouraging students to explore innovation, business ideas, and entrepreneurial opportunities. I also participated in the National Entrepreneurship Challenge conducted by IIT Bombay, where our team successfully qualified for the finals at IIT Bombay. This experience strengthened my leadership, teamwork, problem-solving, and entrepreneurial skills while giving me valuable exposure to a competitive national-level platform.",
      skillsAcquired: ["National Competition Pitching", "Startup Incubation", "High-Pressure Strategy", "Team Building"],
      metrics: "Finalist at IIT Bombay • National Challenge • Startup Mentorship",
      color: "#0877B9",
      iconType: "trophy"
    },
    {
      id: "street-cause",
      number: 4,
      role: "Divisional President & Chief Executive Board Member",
      organization: "Street Cause (NGO)",
      tagline: "Youth Social Impact & Community Outreach",
      category: "Community",
      location: "ANITS Division & Visakhapatnam City Board",
      tenure: "2024 – Present",
      coordinates: { x: 40, y: 34 }, // Marker 4 on the isometric campus map
      highlights: [
        "Served as Divisional President for Street Cause ANITS, organizing community support drives.",
        "Appointed Chief Executive Board Member for Street Cause Visakhapatnam overseeing city operations.",
        "Coordinated welfare campaigns, educational support for underprivileged students, and charity drives.",
        "Fostered deep empathy, ethical leadership, and transparent community engagement."
      ],
      detailedStory: "As Divisional President for Street Cause ANITS and Chief Executive Board Member for Street Cause Visakhapatnam, I spearheaded social welfare campaigns, community outreach drives, and educational initiatives for underprivileged schools, reinforcing civic responsibility alongside technical training.",
      skillsAcquired: ["Non-Profit Governance", "Community Mobilization", "Ethical Leadership", "Empathetic Communication"],
      metrics: "Dual Executive Roles • City-Wide Impact • Grassroots Action",
      color: "#F17C3B",
      iconType: "heart"
    },
    {
      id: "sports-tech",
      number: 5,
      role: "Campus Sports & Hackathon Operations",
      organization: "Student Activities Center",
      tagline: "Sports, Athletics & Technical Symposiums",
      category: "Sports & Culture",
      location: "Sports Complex & Grounds, ANITS",
      tenure: "2023 – Present",
      coordinates: { x: 19, y: 66 }, // Marker 5 on the sports ground
      highlights: [
        "Participated in inter-departmental sports tournaments and team athletics.",
        "Supported coordination for university technical symposiums and coding competitions.",
        "Cultivated physical wellness, strategic discipline, and team sportsmanship."
      ],
      detailedStory: "Beyond academic lecture halls, I actively engaged in campus sports and intra-college athletics at the university grounds, cultivating rapid decision making, endurance, and team camaraderie.",
      skillsAcquired: ["Athletic Discipline", "Team Collaboration", "Crisis Management"],
      metrics: "Inter-Department Athletics • Campus Life Vitality",
      color: "#08A9C2",
      iconType: "code"
    },
    {
      id: "academic-research-center",
      number: 6,
      role: "Student Researcher & Project Team Lead",
      organization: "CSE Department Research Labs",
      tagline: "AI Systems, Distributed Networks & Open Source",
      category: "Research",
      location: "ANITS Main Academic Complex",
      tenure: "2023 – Present",
      coordinates: { x: 42, y: 72 }, // Marker 6 on academic building
      highlights: [
        "Conducted hands-on exploration in agentic AI architectures and distributed task processing.",
        "Collaborated with peers to architect resilient database schemas and API integrations.",
        "Maintained 8.27 CGPA across core Computer Science curriculum."
      ],
      detailedStory: "Stationed at the CSE computing center, I engineered core systems including GitGuardian AI and the Smart Hospital Queue System, turning theoretical coursework in operating systems and networks into production-grade software.",
      skillsAcquired: ["Distributed Systems", "Agentic Graphs", "Database Design"],
      metrics: "8.27 CGPA • Production Codebases",
      color: "#0877B9",
      iconType: "users"
    }
  ] as CampusExperience[],

  achievements: [
    {
      id: "nptel-java",
      title: "NPTEL Programming in Java",
      issuer: "IIT Kharagpur",
      category: "Certification",
      date: "2024",
      year: "2024",
      credentialUrl: "",
      summary: "Completed rigorous national coursework and examination on Core Java, Object-Oriented Design, and Multi-threading.",
      details: "Comprehensive certification covering OOP concepts, collections framework, exception handling, multithreading, and network sockets administered by IIT Kharagpur.",
      aboutEvent: "NPTEL (National Programme on Technology Enhanced Learning) is an initiative by the MHRD and IITs providing top-tier academic certification evaluated through proctored national examinations.",
      myRole: "Completed weekly assignments, laboratory implementations, and passed the final proctored examination covering advanced Java paradigms.",
      outcome: "Awarded official NPTEL Certificate with distinction in Programming in Java, proving object-oriented proficiency.",
      skillsVerified: ["Java OOP", "Collections Framework", "Concurrency & Threads", "Exception Handling"],
      verified: true,
      badgeText: "NPTEL CERTIFIED",
      colorTheme: "blue",
      iconType: "java"
    },
    {
      id: "iit-bombay-nec",
      title: "National Entrepreneurship Challenge",
      issuer: "IIT Bombay",
      category: "Competition",
      date: "2024",
      year: "2024",
      credentialUrl: "",
      summary: "Qualified for the Grand Finals of the National Entrepreneurship Challenge (NEC) organized by IIT Bombay.",
      details: "Led the E-Cell team through rigorous multi-month qualifying tasks evaluating startup awareness, incubator operations, community impact, and venture building, securing a spot in the finals at the IIT Bombay campus.",
      aboutEvent: "The National Entrepreneurship Challenge (NEC) is a flagship national-level competition organized by IIT Bombay, aimed at encouraging innovative ideas, startup thinking and real-world problem solving among students.",
      myRole: "I was part of a team that developed and presented an innovative solution during the competition. I contributed to idea development, research, problem analysis and presentation preparation.",
      outcome: "Our team successfully qualified for the finals, gaining valuable exposure to startup ideation, pitch building and interaction with industry experts and entrepreneurs.",
      skillsVerified: ["Venture Strategy", "Competitive Execution", "Team Leadership", "National Pitching"],
      verified: true,
      badgeText: "IIT BOMBAY FINALIST",
      colorTheme: "orange",
      iconType: "trophy"
    },
    {
      id: "bizverve-vp",
      title: "BiZverve",
      issuer: "Business & Entrepreneurship Club",
      category: "Leadership",
      date: "2024 – Present",
      year: "2024",
      credentialUrl: "",
      summary: "Served as Vice President, organizing an inter-college entrepreneurship summit with 250+ attendees.",
      details: "Planned entrepreneurship initiatives, coordinated workshops, speaker sessions, and pitch competitions for students across Visakhapatnam.",
      aboutEvent: "BiZverve is the official student business and entrepreneurship society dedicated to igniting student venture creation and business acumen.",
      myRole: "Vice President leading summit operations, guest speaker alignment, sponsorship coordination, and inter-college student delegations.",
      outcome: "Successfully drew 250+ participants across engineering colleges in Vizag and hosted 5+ workshops.",
      skillsVerified: ["Executive Leadership", "Summit Operations", "Team Governance", "Public Speaking"],
      verified: true,
      badgeText: "VICE PRESIDENT",
      colorTheme: "teal",
      iconType: "chart"
    },
    {
      id: "iic-coord",
      title: "IIC",
      issuer: "Institution's Innovation Council",
      category: "Leadership",
      date: "2024 – Present",
      year: "2024",
      credentialUrl: "",
      summary: "Department Coordinator fostering student innovation and technical hackathons in CSE.",
      details: "Liaison between faculty and student innovators to drive creative technology solutions, prototype competitions, and patent workshops.",
      aboutEvent: "Institution's Innovation Council (IIC) is an initiative established under the Ministry of Education's Innovation Cell (MIC) to foster systematically the culture of Innovation in Higher Education.",
      myRole: "Coordinator responsible for scheduling department hackathons, student innovation showcases, and compliance with national IIC rubrics.",
      outcome: "Organized departmental ideation challenges resulting in multiple student project submissions to national contests.",
      skillsVerified: ["Innovation Frameworks", "Faculty Liaison", "Hackathon Organization"],
      verified: true,
      badgeText: "COORDINATOR",
      colorTheme: "purple",
      iconType: "bulb"
    },
    {
      id: "ecell-leadership",
      title: "E-Cell",
      issuer: "Entrepreneurship Cell",
      category: "Leadership",
      date: "2024 – Present",
      year: "2024",
      credentialUrl: "",
      summary: "President of the Entrepreneurship Cell fostering student venture creation and startup awareness.",
      details: "Mentored aspiring student founders, organized campus pitch days, and guided the college team to national competition recognition.",
      aboutEvent: "The Entrepreneurship Cell focuses on developing entrepreneurial mindsets, offering incubator guidance, and training students in business strategy.",
      myRole: "President steering the executive committee, managing competitive challenges, and liaising with startup founders.",
      outcome: "Built an active student entrepreneur community and represented ANITS at IIT Bombay finals.",
      skillsVerified: ["Startup Mentorship", "Executive Strategy", "Pitch Deck Design"],
      verified: true,
      badgeText: "PRESIDENT",
      colorTheme: "cobalt",
      iconType: "growth"
    },
    {
      id: "street-cause-ngo",
      title: "Street Cause",
      issuer: "NGO & Social Impact",
      category: "Community",
      date: "2024 – Present",
      year: "2024",
      credentialUrl: "",
      summary: "Divisional President (ANITS) and Chief Executive Board Member (Visakhapatnam).",
      details: "Led volunteer campaigns, community development projects, youth literacy drives, and welfare assistance across the region.",
      aboutEvent: "Street Cause is one of the largest student-run NGOs in the state, impacting thousands of underprivileged individuals through structured community interventions.",
      myRole: "Divisional President managing 80+ student volunteers at ANITS, and Chief Executive Board Member shaping district welfare campaigns.",
      outcome: "Coordinated city-wide charity drives, educational support kits for schools, and social impact seminars.",
      skillsVerified: ["Non-Profit Governance", "Community Volunteering", "Organizational Scaling"],
      verified: true,
      badgeText: "DIVISIONAL PRESIDENT",
      colorTheme: "peach",
      iconType: "heart"
    }
  ] as AchievementItem[]
};

export const AI_KNOWLEDGE_BASE = {
  greetings: [
    "Hello! I am Pavan's AI Personal Agent. I have full knowledge of his software projects, technical skills, leadership roles, and academic achievements. What would you like to explore?",
    "Welcome! I represent Pavan Bhimaraju. Whether you want to deep-dive into GitGuardian AI, his distributed backend systems, or his leadership at IIT Bombay finals, ask away!"
  ],
  faq: [
    {
      q: "What projects has Pavan built?",
      a: "Pavan has engineered several production-grade systems: 1) **GitGuardian AI** — an agentic code security review platform using LangGraph, Celery, and OpenAI; 2) **Smart Hospital Queue & Appointment System** — a distributed queue engine with Redis & Celery eliminating clinic bottlenecks; 3) **Full-Stack Healthcare Platform** — full Django suite with Stripe/PayPal payment integrations; 4) **Teen Wellness App** — habit streak & wellness analytics created during his TEKNOV8R internship; 5) **Real-Time Chat Application** — low-latency messaging with Django Channels and WebSockets."
    },
    {
      q: "What technologies does he use?",
      a: "Pavan specializes in **Python** (his primary language for DSA and backend development), **Django & Django REST Framework**, **LangGraph & LangChain** for multi-agent AI systems, **Redis & Celery** for distributed background processing, **PostgreSQL & SQL**, **Docker**, **JavaScript & Tailwind CSS**, as well as data analysis libraries **NumPy** and **Pandas**."
    },
    {
      q: "Tell me about his leadership experience.",
      a: "Beyond software development, Pavan has demonstrated remarkable leadership: He is the **Vice President of BiZverve** (where he orchestrated an inter-college summit of 250+ students), **President of the E-Cell** (leading the team to the grand finals of the National Entrepreneurship Challenge at **IIT Bombay**), **Department Coordinator for the Institution's Innovation Council (IIC)**, and **Chief Executive Board Member & Divisional President of Street Cause (NGO)**."
    },
    {
      q: "What is GitGuardian AI?",
      a: "**GitGuardian AI** is an AI-powered, agentic code security review platform. It orchestrates specialized agents using LangGraph for static code analysis, security auditing, architecture evaluation, and documentation review. Users can input a GitHub repo URL or upload a ZIP file. It processes reviews asynchronously using Celery & Redis and generates automated downloadable PDF security reports. Repository: https://github.com/Pavan8930/gitguardian-ai"
    },
    {
      q: "What are his career goals?",
      a: "Pavan is driven by the intersection of **AI Systems**, **scalable backend architecture**, and **algorithmic problem solving**. He is currently solving DSA problems on LeetCode using Python, building agentic AI applications, and seeking challenging software engineering opportunities where he can build resilient, user-focused products."
    },
    {
      q: "What is his educational background?",
      a: "Pavan is currently pursuing his **B.Tech in Computer Science Engineering** at Anil Neerukonda Institute of Technology and Sciences (ANITS), Visakhapatnam (2023–2027) with a **CGPA of 8.27**. Prior to this, he completed his Intermediate at Narayana Junior College, Eluru with **96.7%**, and CBSE Class 10th at Sir CR Reddy Public School with **78.8%**."
    },
    {
      q: "What did he do at TEKNOV8R?",
      a: "During his Web Development Internship at TEKNOV8R (May–July 2025), Pavan contributed to the **Teen Wellness Mobile Application**. He researched teenage user personas, designed core UI screens, built habit-streak features using AI-assisted IDEs, and led troubleshooting and bug-fixing efforts to optimize app performance."
    }
  ]
};
