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
      "Requirement Analysis – We start by deeply understanding your business goals, target audience, and competitive landscape. We conduct stakeholder interviews and gather all necessary requirements to ensure our development aligns perfectly with your strategic vision, identifying key performance indicators from the top down.",
      "Planning & Architecture – Based on our analysis, we define the optimal technology stack, craft a robust system architecture, and map out a comprehensive scalability plan. This phase includes drafting technical specifications, database schemas, and setting up project milestones.",
      "UI/UX Design – Our design team creates intuitive wireframes, interactive prototypes, and visually stunning, user-centric interfaces. We prioritize seamless user journeys, responsive layouts, and brand consistency to guarantee a compelling digital experience for your customers.",
      "Development – Utilizing an Agile methodology, our expert engineers build the front-end and back-end simultaneously. We maintain clean, maintainable code through rigorous peer reviews, regular sprint demonstrations, and continuous integration practices, keeping you involved every step of the way.",
      "Testing & QA – We perform exhaustive quality assurance, including automated and manual testing, to guarantee stability and performance. Our tests cover cross-browser compatibility, security vulnerabilities, mobile responsiveness, and load balancing under extreme traffic conditions.",
      "Deployment & Launch – Our DevOps team manages a seamless and secure deployment process with minimal downtime. We configure CI/CD pipelines, optimize server performance, and conduct final pre-launch checks to ensure a flawless transition from staging to production, followed by ongoing post-launch monitoring."
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
      "Product Discovery – We begin by mapping out the application’s core vision, feature requirements, and strategic roadmap. Our team collaborates with you to identify user personas and define the minimum viable product (MVP) to ensure rapid time-to-market.",
      "Prototype & Design – Our designers construct high-fidelity, interactive prototypes to visualize the user journey. We focus on modern app ergonomics, incorporating fluid animations and intuitive interfaces tailored for both iOS and Android guidelines.",
      "Development – Through iterative Agile sprints, our mobile experts build a highly responsive and scalable application. We prioritize performance optimization and provide you with continuous updates and early builds to gather ongoing feedback.",
      "Integration – We seamlessly integrate robust backend APIs, third-party services, and secure payment gateways. Our team ensures that cross-platform data flows securely and reliably, maintaining complete data integrity and compliance.",
      "Testing – We conduct rigorous multi-device testing encompassing functional, usability, and performance assessments. Your app undergoes strict security checks and memory leak testing to guarantee flawless operation across a vast range of real-world devices.",
      "Deployment – We manage the complete submission process for the Apple App Store and Google Play Store. Following the launch, we provide continuous monitoring, analytics tracking, and rapid bug-fixing to sustain an exceptional user experience."
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
      "Assessment – We conduct a comprehensive audit of your current system architecture, database structures, and performance bottlenecks to determine your exact migration needs and constraints.",
      "Planning – Our specialists define a tailored migration strategy that includes detailed timelines and strict risk mitigation contingencies. We prioritize eliminating business disruptions and coordinate closely with your team before execution.",
      "Backup & Security – Before initiating any transfer, we establish secure redundancy protocols and comprehensive data backups. Our approach guarantees complete data safety and full compliance with standard security regulations.",
      "Migration Execution – We perform a step-by-step, highly controlled transfer of your applications and data to the new infrastructure. By leveraging automated migration tools, we minimize human error and drastically reduce operational downtime.",
      "Validation – Post-transfer, we rigorously verify data integrity through comprehensive system testing. Our team runs parallel environment checks to ensure that all services operate identically to or better than the original setup.",
      "Optimization – We don't just migrate; we optimize the new environment for maximum performance. This includes fine-tuning database queries, configuring load balancers, and establishing continuous monitoring for future stability."
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
      "Readiness Assessment – We evaluate your current on-premise or legacy infrastructure to determine cloud viability. This involves analyzing workload demands, security requirements, and cost projections to recommend the ideal cloud provider (AWS, Azure, or GCP).",
      "Architecture Design – Our cloud architects design a secure, highly-available, and scalable environment tailored to your specific application needs. We focus on modern principles like microservices, serverless computing, and robust disaster recovery planning.",
      "Deployment & Configuration – We execute the seamless provisioning of cloud resources using Infrastructure as Code (IaC) principles. Our team ensures that storage, compute instances, and networking layers are securely configured and strictly governed.",
      "DevOps Automation – We implement rigorous automation by establishing robust CI/CD pipelines. This enables rapid, reliable software delivery, automated testing, and zero-downtime deployments to accelerate your overall development lifecycle.",
      "Optimization & Monitoring – We continuously monitor resource utilization, performance metrics, and security logs to fine-tune your cloud environment. Our ongoing optimization significantly reduces operational costs while maintaining peak system performance."
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
      "System Analysis – We thoroughly document your existing software tools, databases, and third-party services to identify integration opportunities. Our analysis focuses on streamlining business workflows and eliminating frustrating data silos.",
      "Integration Planning – We architect the integration layer, mapping out precise data flow, synchronization rules, and transformation logic. This blueprint ensures that disparate systems can communicate natively without compromising system security.",
      "API Development – Our back-end engineers build robust, scalable RESTful APIs and middleware components. We utilize industry-standard protocols, including OAuth and JWT, to guarantee secure authentication and lightning-fast data transmission.",
      "Implementation – We deploy the integrations in a controlled environment, synchronizing your CRM, ERP, payment gateways, and custom software. This unified ecosystem reduces manual data entry and drastically improves operational efficiency.",
      "Testing & Monitoring – We conduct exhaustive end-to-end testing to validate real-time event triggers and batch processing routines. Post-launch, we provide continuous monitoring to catch API deprecations and ensure uninterrupted connectivity."
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
      "Requirement Understanding – We begin by pinpointing the specific data points you require for competitive advantage or operational needs. We evaluate the volume, frequency, and desired output format to design the most effective data extraction strategy.",
      "Source Analysis – Our specialists analyze target websites and APIs to understand their structure, dynamic loading behaviors, and defensive measures. We craft strategies to reliably bypass sophisticated anti-bot constraints and CAPTCHAs.",
      "Scraper Development – Utilizing advanced Python frameworks and headless browsers, we build robust, custom scraping algorithms. Our scrapers are engineered to handle dynamic JavaScript rendering and rapid site layout alterations seamlessly.",
      "Data Processing – Extracted raw data is rigorously sanitized, structured, and cross-verified for accuracy. We eliminate duplicates, normalize chaotic text strings, and format the intelligence into pristine CSVs, databases, or direct API feeds.",
      "Automation Setup – We configure cloud-based automation to run your scrapers on a dedicated schedule. This continuous data pipeline feeds real-time intelligence into your analytics dashboards, empowering immediate, data-driven decision making."
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
      "Use Case Definition – We work closely with your team to identify the precise workflows our chatbot should handle, ranging from customer support and lead generation to internal HR queries. We set clear metrics to measure the bot's success and ROI.",
      "Conversation Design – Our conversational UX experts script intuitive, human-like dialogue flows tailored to your brand's unique voice. We map out complex decision trees and fallback protocols to ensure the bot can gracefully handle unexpected questions.",
      "AI/NLP Integration – We equip the chatbot with state-of-the-art Natural Language Processing (NLP) engines. This allows your virtual assistant to accurately grasp user intent, understand sentiment, and provide highly contextual, intelligent responses.",
      "Development & Integration – The chatbot is engineered and seamlessly embedded into your primary communication channels, including your website, mobile app, WhatsApp, or Slack. We ensure it connects with your backend CRM for personalized interactions.",
      "Testing & Optimization – We conduct extensive beta testing with real users to identify conversational dead-ends and friction points. Post-deployment, the AI model undergoes continuous training based on real interaction data to progressively enhance accuracy."
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
