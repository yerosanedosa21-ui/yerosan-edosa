export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack Web' | 'Mobile Apps' | 'APIs & Systems';
  techStack: string[];
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  architecture: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; note: string }[];
}

export interface Milestone {
  year: string;
  role: string;
  institution: string;
  description: string;
  focus: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Worku Edosa',
    title: 'Full Stack & Mobile Application Developer',
    department: 'Computer Science & Engineering (CSE)',
    email: 'yerosanedosa21@gmail.com',
    location: 'Available Globally / Remote & On-Site',
    summary:
      'Computer Science & Engineering developer specializing in modern Full Stack Web development (HTML, CSS, JavaScript, React, Node.js) and high-performance Mobile Applications (React Native & Android). Combining algorithmic discipline with intuitive user-centric product architecture.',
    avatar: '/src/assets/images/avatar_worku_edosa_1792174767119.jpg',
    stats: [
      { label: 'Core Engineering Stacks', value: 'Web & Mobile' },
      { label: 'Completed Deliverables', value: '20+' },
      { label: 'Academic Standing', value: 'CSE Major' },
      { label: 'Code Quality Standard', value: '100% Typed' },
    ],
  },

  skills: [
    {
      title: 'Frontend & UI Engineering',
      description: 'Crafting responsive, accessible, pixel-perfect user interfaces with modern web standards.',
      skills: [
        { name: 'HTML5 Semantic Web', level: 95, note: 'Accessibility, SEO, Canvas API, Forms' },
        { name: 'CSS3 & Modern Styling', level: 94, note: 'Tailwind CSS, Grid, Flexbox, Animations' },
        { name: 'JavaScript (ES2022+)', level: 96, note: 'Async/Await, DOM manipulation, Functional programming' },
        { name: 'TypeScript', level: 90, note: 'Strict typing, Generics, Interface contracts' },
        { name: 'React & Next.js', level: 92, note: 'State machines, Custom hooks, Component architecture' },
      ],
    },
    {
      title: 'Mobile App Development',
      description: 'Building fluid, responsive cross-platform and native mobile experiences.',
      skills: [
        { name: 'React Native & Expo', level: 90, note: 'Cross-platform iOS/Android, native bridges' },
        { name: 'Mobile UI/UX Patterns', level: 88, note: 'Touch ergonomics, offline-first sync, haptics' },
        { name: 'Android Architecture', level: 85, note: 'Kotlin basics, Jetpack components, SQLite' },
        { name: 'Mobile State & Storage', level: 90, note: 'AsyncStorage, Redux Toolkit, MMKV' },
      ],
    },
    {
      title: 'Backend, Systems & APIs',
      description: 'Designing resilient server architectures and high-throughput communication protocols.',
      skills: [
        { name: 'Node.js & Express', level: 92, note: 'RESTful API routing, Middleware, Auth flows' },
        { name: 'Database Architecture', level: 88, note: 'PostgreSQL, MongoDB, Indexing & Normalization' },
        { name: 'API Security & Auth', level: 89, note: 'JWT, OAuth 2.0, Rate limiting, CORS' },
        { name: 'Git & Deployment CI/CD', level: 90, note: 'Docker, GitHub Actions, Cloud Run, Linux CLI' },
      ],
    },
    {
      title: 'CSE Core Fundamentals',
      description: 'Theoretical foundations from Computer Science & Engineering degree coursework.',
      skills: [
        { name: 'Data Structures & Algorithms', level: 92, note: 'Trees, Graphs, Sorting, Dynamic Programming' },
        { name: 'Object-Oriented Design', level: 94, note: 'SOLID design patterns, Polymorphism' },
        { name: 'Database Management (DBMS)', level: 89, note: 'Relational algebra, ACID compliance, Transactions' },
        { name: 'Computer Networks & OS', level: 87, note: 'TCP/IP, HTTP/3, Concurrency, Process scheduling' },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'flowmetric-saas',
      title: 'MetrixFlow Enterprise',
      subtitle: 'Full-Stack Analytics & Subscription Intelligence Platform',
      category: 'Full Stack Web',
      techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
      description:
        'A comprehensive real-time web application dashboard for measuring business analytics, revenue trends, and user churn. Engineered with modular React component patterns, streaming chart data, and responsive layout scaling.',
      image: '/src/assets/images/project_fullstack_saas_1792174768012.jpg',
      githubUrl: 'https://github.com/workuedosa/metrixflow-platform',
      liveUrl: 'https://metrixflow-demo.example.com',
      metrics: [
        { label: 'Rendering Latency', value: '< 45ms' },
        { label: 'Test Coverage', value: '94%' },
        { label: 'Data Processing', value: '10k events/s' },
      ],
      highlights: [
        'Built full-stack React frontend with virtualized data grid and dynamic charting.',
        'Engineered secure Express.js REST API with JWT bearer authorization and role-based permissions.',
        'Structured relational PostgreSQL schema with optimized query indexes for sub-100ms analytics queries.',
      ],
      architecture:
        'Client-side SPA connected via authenticated REST APIs to an Express microservice layer, backed by connection-pooled PostgreSQL with Redis caching for hot aggregations.',
    },
    {
      id: 'nexasync-mobile',
      title: 'NexaSync Mobile Wallet',
      subtitle: 'Cross-Platform Financial & Budgeting Mobile Application',
      category: 'Mobile Apps',
      techStack: ['React Native', 'TypeScript', 'Expo', 'SQLite', 'Tailwind/NativeWind'],
      description:
        'High-performance mobile application delivering frictionless personal wealth management, instant budget categorization, QR payments, and secure local encrypted storage.',
      image: '/src/assets/images/project_mobile_app_1792174767955.jpg',
      githubUrl: 'https://github.com/workuedosa/nexasync-mobile',
      liveUrl: 'https://nexasync-app.example.com',
      metrics: [
        { label: 'Frame Rate', value: '60 FPS Solid' },
        { label: 'Offline Sync', value: '100% Guaranteed' },
        { label: 'Cold Startup', value: '0.8s' },
      ],
      highlights: [
        'Designed biometric authentication flow (FaceID/Fingerprint) with fallback passcode encryption.',
        'Implemented offline-first data persistence using SQLite with conflict-free server synchronization.',
        'Created animated gesture-driven transaction cards and interactive budget progress visualizers.',
      ],
      architecture:
        'React Native client utilizing declarative state machines, hardware biometric bridge, and local SQLite engine with background worker queue for automated cloud synchronization.',
    },
    {
      id: 'cloudgrid-gateway',
      title: 'CloudGrid Microservices Gateway',
      subtitle: 'High-Throughput API Routing & Distributed Service Mesh',
      category: 'APIs & Systems',
      techStack: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes', 'REST APIs'],
      description:
        'Resilient backend infrastructure system managing service discovery, rate limiting, request validation, and telemetry forwarding across distributed backend microservices.',
      image: '/src/assets/images/project_cloud_api_1792174768314.jpg',
      githubUrl: 'https://github.com/workuedosa/cloudgrid-gateway',
      liveUrl: 'https://cloudgrid-status.example.com',
      metrics: [
        { label: 'Uptime Reliability', value: '99.98%' },
        { label: 'Throughput', value: '25k req/s' },
        { label: 'Avg Latency Overhead', value: '1.8ms' },
      ],
      highlights: [
        'Built custom token-bucket rate limiting algorithm backed by distributed Redis clusters.',
        'Integrated automated health checks and intelligent failover routing for upstream microservices.',
        'Standardized API payload validation using JSON Schema and strict TypeScript type guards.',
      ],
      architecture:
        'Multi-tiered Node.js edge proxy fronted by NGINX reverse proxy, orchestrating inter-service communication across authenticated VPC networks with comprehensive structured logging.',
    },
    {
      id: 'csetrack-algorithms',
      title: 'AlgoVision Lab & CSE Workbench',
      subtitle: 'Interactive Data Structures & Algorithm Workbench',
      category: 'Full Stack Web',
      techStack: ['HTML5', 'CSS3 Canvas', 'JavaScript', 'TypeScript', 'Web Workers'],
      description:
        'A browser-native educational simulator allowing students and engineers to visualize fundamental Computer Science algorithms (sorting, graph traversals, pathfinding) step-by-step with real-time complexity analysis.',
      image: '/src/assets/images/project_fullstack_saas_1792174768012.jpg',
      githubUrl: 'https://github.com/workuedosa/algovision-cse',
      liveUrl: 'https://algovision.example.com',
      metrics: [
        { label: 'Supported Algorithms', value: '14+' },
        { label: 'Memory Footprint', value: '< 20MB' },
        { label: 'Time Complexity Specs', value: 'O(1) to O(N²)' },
      ],
      highlights: [
        'Custom HTML5 Canvas rendering engine supporting 120Hz smooth state transitions and step replay.',
        'Decoupled computational execution into background Web Workers to maintain 60fps UI responsiveness.',
        'Interactive controls for step-forward, step-back, array randomization, and real-time comparison counters.',
      ],
      architecture:
        'Pure client-side reactive TypeScript application leveraging Web Workers for algorithmic step computation and custom canvas animation loop for fluid structural rendering.',
    },
  ] as Project[],

  educationAndJourney: [
    {
      period: '2022 — Present',
      title: 'B.Sc. in Computer Science & Engineering (CSE)',
      organization: 'University Engineering Department',
      description:
        'Rigorous engineering curriculum covering core computing fundamentals: Data Structures, Advanced Algorithms, Object-Oriented Analysis & Design, Database Engineering, Computer Networks, and Software Testing.',
      achievements: [
        'Top quartile academic ranking in departmental software engineering courses.',
        'Led student developer team for department annual technical symposium project.',
        'Completed Capstone project on distributed offline-first mobile sync.',
      ],
    },
    {
      period: '2023 — Present',
      title: 'Full Stack & Mobile Software Developer',
      organization: 'Independent & Client Projects',
      description:
        'Designing, coding, and deploying production web platforms and native mobile apps for diverse clients. Managing complete lifecycle from wireframing to cloud container deployment.',
      achievements: [
        'Delivered 5+ full-stack production client applications with 100% on-time milestone delivery.',
        'Engineered responsive mobile cross-platform client with offline data persistence.',
        'Architected reusable React UI design component systems with zero-dependency utilities.',
      ],
    },
    {
      period: '2022 — 2023',
      title: 'Junior Web & Software Engineering Intern',
      organization: 'Tech Innovations Lab',
      description:
        'Collaborated with senior software architects to implement responsive HTML5/CSS3 frontend components, optimize REST API queries, and write comprehensive automated test suites.',
      achievements: [
        'Reduced client page load times by 38% through CSS optimization and asset bundling.',
        'Built automated unit and integration tests using Jest and React Testing Library.',
      ],
    },
  ],
};
