export interface Effort {
  team: string;
  deliverables: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: string;
  description: string;
  fullDescription: string;
  overview: string;
  approach: string[];
  strategy: string[];
  effort: Effort;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "💻",
    description: "We build fast, secure, and scalable websites tailored to your business needs.",
    fullDescription: "Innovative, high-performance web solutions built for scale and conversion.",
    overview: "We build robust, scalable, and high-performance websites tailored to your business goals. Our focus is not just on design but on creating digital platforms that drive engagement, conversions, and long-term growth.",
    approach: [
      "Requirement Analysis – Understand business goals, audience, and competitors",
      "Planning & Architecture – Define tech stack, system design, and scalability plan",
      "UI/UX Design – Create wireframes and user-centric designs",
      "Development – Agile-based frontend & backend development",
      "Testing & QA – Performance, security, and cross-browser testing",
      "Deployment & Launch – Smooth rollout with minimal downtime"
    ],
    strategy: [
      "Use modern frameworks (React, Angular, Node.js, etc.)",
      "Implement SEO-friendly structure",
      "Optimize performance (lazy loading, caching, CDN)",
      "Ensure mobile responsiveness and accessibility"
    ],
    effort: {
      team: "UI/UX designer, frontend dev, backend dev, QA",
      deliverables: ["Fully functional website", "Admin panel", "Documentation"]
    }
  },
  {
    slug: "app-development",
    title: "App Development",
    icon: "📱",
    description: "We create high-performance mobile and web applications that deliver seamless user experiences.",
    fullDescription: "Feature-rich mobile and web applications with seamless multi-platform performance.",
    overview: "We develop feature-rich mobile and web applications that provide seamless performance across platforms while maintaining high usability and security standards.",
    approach: [
      "Product Discovery – Define app vision, features, and roadmap",
      "Prototype & Design – Build interactive prototypes",
      "Development – Agile sprints with continuous feedback",
      "Integration – APIs, third-party services, payment systems",
      "Testing – Functional, usability, and performance testing",
      "Deployment – App Store / Play Store launch"
    ],
    strategy: [
      "Native or cross-platform development based on requirement",
      "Scalable backend architecture",
      "Secure authentication & data handling",
      "Performance optimization for low latency"
    ],
    effort: {
      team: "Mobile devs, backend dev, UI/UX, QA",
      deliverables: ["Mobile app", "Backend APIs", "Deployment support"]
    }
  },
  {
    slug: "migration-services",
    title: "Migration Services",
    icon: "🔄",
    description: "Seamless migration of applications, databases, and infrastructure with zero data loss.",
    fullDescription: "Expert system and data migration with guaranteed integrity and minimal downtime.",
    overview: "We ensure seamless migration of applications, databases, and infrastructure with zero data loss and minimal business disruption.",
    approach: [
      "Assessment – Analyze current system and migration needs",
      "Planning – Define migration strategy and risk mitigation",
      "Backup & Security – Ensure complete data safety",
      "Migration Execution – Step-by-step controlled transfer",
      "Validation – Data integrity and system testing",
      "Optimization – Improve performance post-migration"
    ],
    strategy: [
      "Use automated migration tools",
      "Parallel environment testing",
       "Downtime minimization techniques"
    ],
    effort: {
      team: "DevOps engineers, database admins, QA",
      deliverables: ["Migrated system", "Validation reports", "Optimization improvements"]
    }
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: "☁️",
    description: "Scalable, flexible, and cost-efficient cloud infrastructures for modern businesses.",
    fullDescription: "Cloud architecture designed for high availability, security, and effortless scaling.",
    overview: "We design and manage cloud infrastructures that enable scalability, flexibility, and cost efficiency for modern businesses.",
    approach: [
      "Cloud Readiness Assessment",
      "Architecture Design",
      "Deployment & Configuration",
      "Automation (CI/CD & DevOps)",
      "Monitoring & Optimization"
    ],
    strategy: [
      "Use AWS, Azure, or GCP",
      "Implement auto-scaling & load balancing",
      "Ensure high availability and disaster recovery"
    ],
    effort: {
      team: "Cloud architects, DevOps engineers",
      deliverables: ["Cloud setup", "Pipelines", "Monitoring tools"]
    }
  },
  {
    slug: "integrations",
    title: "Integrations",
    icon: "🔗",
    description: "Connect scattered tools to streamline operations and improve business efficiency.",
    fullDescription: "Unified digital ecosystems created through seamless API and system integrations.",
    overview: "We connect different systems and applications to create a unified and efficient ecosystem that improves productivity and reduces manual work.",
    approach: [
      "System Analysis",
      "Integration Planning",
      "API Development",
      "Implementation",
      "Testing & Monitoring"
    ],
    strategy: [
      "RESTful APIs and middleware solutions",
      "Secure authentication (OAuth, JWT)",
      "Real-time and batch integrations"
    ],
    effort: {
      team: "Backend developers, system architects",
      deliverables: ["Integrated systems", "API documentation"]
    }
  },
  {
    slug: "web-scraping",
    title: "Web Scraping",
    icon: "🕸️",
    description: "Intelligent data extraction to gain actionable insights for better decision-making.",
    fullDescription: "Bespoke scraping solutions that transform raw web data into structured business value.",
    overview: "We provide intelligent web scraping solutions to extract valuable data and convert it into actionable insights.",
    approach: [
      "Requirement Understanding",
      "Source Analysis",
      "Scraper Development",
      "Data Processing & Cleaning",
      "Automation Setup"
    ],
    strategy: [
      "Use Python-based scraping tools",
      "Handle dynamic websites and anti-bot systems",
      "Store data in structured formats (CSV, DB, APIs)"
    ],
    effort: {
      team: "Data engineers, backend developers",
      deliverables: ["Scraping scripts", "Datasets", "Dashboards"]
    }
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    icon: "🤖",
    description: "Automate interactions and boost engagement with intelligent AI-powered chatbots.",
    fullDescription: "Smart conversational agents built to solve complex customer Needs 24/7.",
    overview: "We build intelligent chatbots that automate customer interactions, improve engagement, and streamline business operations.",
    approach: [
      "Use Case Definition",
      "Conversation Design",
      "AI/NLP Integration",
      "Development & Integration",
      "Testing & Optimization"
    ],
    strategy: [
      "Use NLP for smart responses",
      "Integrate with WhatsApp, websites, and apps",
      "Continuous learning and improvement"
    ],
    effort: {
      team: "AI/NLP engineers, backend developers, UI/UX designers",
      deliverables: ["Chatbot", "Analytics dashboard", "Integration support"]
    }
  }
];
