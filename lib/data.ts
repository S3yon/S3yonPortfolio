export const projects = [
  {
    title: "404cast",
    slug: "404cast",
    description:
      "Interactive gamified safety awareness web app for urban environments. Built for Hack404, uses Toronto Police Service data with machine learning to teach users about neighborhood safety through Street View challenges.",
    techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Google Maps API", "PWA", "JavaScript"],
    icon: "🚨",
    award: "Built for Hack404",
    features: [
      {
        title: "Interactive Street View Gaming",
        description: "Users guess kidnapping likelihood for Toronto locations using Google Maps Street View panoramas",
      },
      {
        title: "Machine Learning Risk Assessment",
        description: "ML model trained on official Toronto Police Service data provides accurate neighborhood risk predictions",
      },
      {
        title: "Progressive Web App",
        description: "Full PWA functionality with offline support and mobile-responsive design using Vite PWA",
      },
      {
        title: "Competitive Leaderboard System",
        description: "Real-time scoring system with MongoDB backend tracking user performance and rankings",
      },
    ],
    achievements: [
      "Developed for Hack404 hackathon with complete full-stack implementation",
      "Integrated Google Maps Street View API for immersive location-based gameplay",
      "Implemented machine learning model using real Toronto Police Service crime data",
      "Built responsive PWA supporting both mobile and desktop with offline capabilities",
      "Created competitive scoring system with MongoDB for persistent user data",
    ],
    links: [
      { label: "Live Site", url: "https://www.404cast.com" },
      { label: "DevPost", url: "https://devpost.com/software/404cast" }
    ],
  },
  {
    title: "ThyroTrack",
    slug: "thyrotrack",
    description:
      "AI-powered health monitoring app for thyroid patients using Python to track and analyze 10+ key health metrics. Built with XGBoost machine learning model for predictive health insights.",
    techStack: ["Python", "XGBoost", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Imblearn"],
    icon: "🏥",
    award: "2nd Place @ AI in Healthcare Hackathon",
    features: [
      {
        title: "Health Metrics Tracking",
        description: "Monitor and analyze 10+ key thyroid health indicators with real-time data visualization",
      },
      {
        title: "AI-Powered Predictions",
        description: "XGBoost machine learning model provides predictive health insights and trend analysis",
      },
      {
        title: "Data Visualization",
        description: "Interactive charts and graphs using Matplotlib and Seaborn for clear health insights",
      },
      {
        title: "Cross-Validation",
        description: "Robust model reliability through comprehensive cross-validation testing",
      },
    ],
    achievements: [
      "Won 2nd Place at AI in Healthcare Hackathon (Feb 2025)",
      "Collaborated with healthcare students to align technical solutions with medical needs",
      "Implemented secure coding practices for sensitive health data protection",
      "Created comprehensive data visualizations for effective health communication",
    ],
    links: [{ label: "View Certificate", url: "#" }],
  },
  {
    title: "UNO Multiplayer Game",
    slug: "uno-game",
    description:
      "Full-featured multiplayer UNO game built in Java applying Object-Oriented Programming principles and design patterns. Features complete rule enforcement and modular architecture.",
    techStack: ["Java", "NetBeans", "Git", "OOP", "UML", "Design Patterns"],
    icon: "🎮",
    features: [
      {
        title: "Multiplayer Support",
        description: "Full multiplayer functionality with turn-based gameplay and real-time updates",
      },
      {
        title: "Complete Rule Enforcement",
        description: "100% UNO rule implementation with validation across 25+ test scenarios",
      },
      {
        title: "Design Patterns",
        description: "Implemented Singleton and State design patterns for clean, maintainable code",
      },
      {
        title: "Comprehensive Documentation",
        description: "8+ UML diagrams and 6 detailed use case narratives for system design",
      },
    ],
    achievements: [
      "Achieved 100% rule enforcement across 25+ test scenarios",
      "Reduced logic complexity through modular design patterns",
      "Applied full SDLC methodology for project delivery",
      "Created comprehensive UML documentation and use cases",
    ],
  },
  {
    title: "Records Management System",
    slug: "records-system",
    description:
      "Comprehensive relational database system for student academic records management. Features 10+ interconnected tables with complete data integrity and efficient querying capabilities.",
    techStack: ["SQL", "MySQL Workbench", "Database Design", "ERD"],
    icon: "📊",
    features: [
      {
        title: "Relational Database Design",
        description: "10+ interconnected tables with proper normalization and relationships",
      },
      {
        title: "Data Integrity",
        description: "Complete constraint implementation ensuring data consistency and validity",
      },
      {
        title: "Efficient Querying",
        description: "15+ optimized multi-table queries for complex data retrieval operations",
      },
      {
        title: "Visual Documentation",
        description: "Complete ERD and Data Structure Diagrams for system understanding",
      },
    ],
    achievements: [
      "Designed comprehensive Entity-Relationship Diagram",
      "Implemented complete data integrity with key constraints",
      "Created 15+ complex multi-table queries for data analysis",
      "Established efficient academic records tracking system",
    ],
  },
  {
    title: "S3yon Portfolio",
    slug: "s3yon-portfolio",
    description:
      "Modern portfolio website built with Next.js 14 featuring advanced visual effects, film grain noise, particle systems, and dark/light theme support. Showcases projects with interactive animations and clean design.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React", "shadcn/ui", "CSS Animations"],
    icon: "💼",
    features: [
      {
        title: "Advanced Visual Effects",
        description: "Authentic film grain noise and sophisticated particle systems with edge-aware alpha blending",
      },
      {
        title: "Responsive Design",
        description: "Fully responsive layout with mobile-first approach and seamless device adaptation",
      },
      {
        title: "Theme System",
        description: "Dynamic dark/light theme switching with smooth transitions and theme-aware components",
      },
      {
        title: "Interactive Animations",
        description: "Custom particle physics, draggable interfaces, and smooth CSS animations throughout",
      },
    ],
    achievements: [
      "Implemented advanced particle system with 500+ particles and performance optimization",
      "Created authentic film grain effect using real texture assets and step-based animations",
      "Built theme-aware component system with seamless light/dark mode transitions",
      "Achieved 100% responsive design across all device sizes and orientations",
    ],
    links: [
      { label: "Live Site", url: "https://seyons.com" },
      { label: "GitHub", url: "https://github.com/S3yon/S3yonPortfolio" }
    ],
  },
  {
    title: "PriceValve",
    slug: "pricevalve",
    description:
      "Intelligent Steam game pricing platform that analyzes real-time data and provides revenue-optimizing pricing recommendations. Built for SpurHacks 2025 with full-stack Next.js and Express architecture.",
    techStack: ["Next.js 15", "TypeScript", "Express.js", "Node.js", "Tailwind CSS", "shadcn/ui", "Steam API", "SteamSpy API"],
    icon: "🎮",
    award: "Built for SpurHacks 2025",
    features: [
      {
        title: "Real-time Steam Data Analysis",
        description: "Fetch and analyze game data from Steam Web API, SteamSpy API, and ITAD for comprehensive market insights",
      },
      {
        title: "Revenue Optimization Engine",
        description: "Advanced pricing algorithms with confidence scores and demand estimation models for maximum revenue",
      },
      {
        title: "Competitor Analysis Dashboard",
        description: "Comprehensive market positioning analysis with visual charts and competitor comparison tools",
      },
      {
        title: "Full-Stack Architecture",
        description: "Modern TypeScript-based backend with Express.js and Next.js 15 frontend using App Router",
      },
    ],
    achievements: [
      "Developed for SpurHacks 2025 hackathon with complete full-stack implementation",
      "Integrated multiple Steam APIs for comprehensive game data analysis",
      "Built intelligent pricing recommendation engine with confidence scoring",
      "Created modern responsive interface with real-time data visualization",
    ],
    links: [
      { label: "DevPost", url: "https://devpost.com/software/pricevalve" },
      { label: "GitHub", url: "https://github.com/S3yon/PriceValve" }
    ],
  },
]
