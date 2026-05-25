import { Project, TeamMember, Service, Stat, ProcessStep } from '@/types';

export const siteConfig = {
  name: 'Nexus Technology',
  tagline: 'Building Tomorrow\'s Technology, Today',
  description: 'Premium software development company specializing in web, mobile, and AI solutions.',
  email: 'hello@nexustechnology.com',
  phone: '+92 300 0000000',
  address: 'Islamabad, Pakistan',
  hours: 'Mon - Fri, 9AM - 6PM PKT',
  social: {
    linkedin: 'https://linkedin.com/company/nexustechnology',
    github: 'https://github.com/nexustechnology',
    twitter: 'https://x.com/nexustech',
    instagram: 'https://instagram.com/nexustechnology',
  },
};

export const stats: Stat[] = [
  { label: 'Projects Delivered', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 35, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Team Members', value: 8, suffix: '' },
];

export const services: Service[] = [
  {
    title: 'Web Development',
    slug: 'web-development',
    icon: 'Globe',
    description: 'We build fast, scalable web applications using modern frameworks and best practices. From landing pages to complex enterprise platforms, our solutions are crafted for performance and user experience.',
    features: [
      'Next.js & React Applications',
      'Progressive Web Apps',
      'E-Commerce Solutions',
      'CMS Integration',
      'API Development & Integration',
      'Performance Optimization',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Vercel', 'Docker'],
  },
  {
    title: 'App Development',
    slug: 'app-development',
    icon: 'Smartphone',
    description: 'Native and cross-platform mobile applications designed for scale. We deliver polished, performant apps that users love, backed by robust architecture.',
    features: [
      'iOS & Android Development',
      'Cross-Platform Development',
      'UI/UX Design & Prototyping',
      'App Store Optimization',
      'Push Notifications & Analytics',
      'Backend & API Integration',
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase', 'Node.js', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'AI & LLM Solutions',
    slug: 'ai-llm-solutions',
    icon: 'Brain',
    description: 'Custom AI and machine learning solutions that transform raw data into actionable intelligence. We build everything from chatbots to predictive analytics engines.',
    features: [
      'Custom ML Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Chatbot & Virtual Assistants',
      'Data Pipeline Engineering',
    ],
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'HuggingFace', 'FastAPI', 'AWS SageMaker', 'Pinecone'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'Requirements gathering, project scoping, and strategic alignment with your business goals.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Wireframes, prototypes, and high-fidelity designs refined through iterative client feedback.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Agile sprints with regular check-ins, ensuring transparency at every stage of the build.',
  },
  {
    number: '04',
    title: 'Testing & QA',
    description: 'Automated and manual testing across devices, browsers, and edge cases.',
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'CI/CD pipeline setup, production launch, and real-time monitoring from day one.',
  },
  {
    number: '06',
    title: 'Support & Growth',
    description: 'Ongoing maintenance, performance optimization, and feature iterations post-launch.',
  },
];

export const projects: Project[] = [
  {
    slug: 'fintech-dashboard',
    title: 'FinVault Dashboard',
    category: 'web',
    description: 'A comprehensive financial analytics dashboard for a growing fintech startup, processing real-time transaction data.',
    thumbnail: '/portfolio/finvault.jpg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', 'Tailwind CSS'],
    client: 'FinVault Inc.',
    industry: 'Financial Technology',
    duration: '12 Weeks',
    challenge: 'The client needed a real-time analytics platform capable of processing thousands of transactions per second while maintaining a clean, intuitive interface for non-technical stakeholders.',
    solution: 'We built a Next.js application with server-side rendering for initial load performance, WebSocket connections for real-time data, and a custom charting system optimized for financial data visualization.',
    results: [
      '3x faster data processing compared to previous system',
      '40% increase in user engagement',
      'Sub-200ms page load times',
      '99.9% uptime in first 6 months',
    ],
    featured: true,
  },
  {
    slug: 'health-connect-app',
    title: 'HealthConnect',
    category: 'app',
    description: 'Cross-platform telemedicine application connecting patients with healthcare providers for virtual consultations.',
    thumbnail: '/portfolio/healthconnect.jpg',
    technologies: ['Flutter', 'Firebase', 'WebRTC', 'Node.js', 'Stripe'],
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    duration: '16 Weeks',
    challenge: 'Building a HIPAA-compliant telehealth platform with real-time video, secure messaging, and electronic prescription capabilities across iOS and Android.',
    solution: 'We developed a Flutter application with end-to-end encryption, WebRTC video calls, and a secure cloud infrastructure on Firebase with custom security rules.',
    results: [
      '10,000+ downloads in first month',
      '4.8 star rating on both app stores',
      'Average consultation time reduced by 35%',
      'Zero security incidents',
    ],
    featured: true,
  },
  {
    slug: 'ai-content-engine',
    title: 'ContentIQ',
    category: 'ai',
    description: 'AI-powered content generation and optimization engine for enterprise marketing teams.',
    thumbnail: '/portfolio/contentiq.jpg',
    technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL'],
    client: 'MediaFlow Agency',
    industry: 'Marketing & Advertising',
    duration: '10 Weeks',
    challenge: 'The client required a system that could generate brand-consistent marketing copy across multiple channels while learning from performance data.',
    solution: 'We built a custom LLM pipeline using LangChain with fine-tuned prompts, a feedback loop for continuous improvement, and integration with major marketing platforms.',
    results: [
      '70% reduction in content creation time',
      '25% improvement in engagement metrics',
      'Consistent brand voice across 5 channels',
    ],
    featured: true,
  },
  {
    slug: 'ecommerce-platform',
    title: 'ShopNova',
    category: 'web',
    description: 'Full-stack e-commerce platform with inventory management, payment processing, and real-time analytics.',
    thumbnail: '/portfolio/shopnova.jpg',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'AWS S3'],
    client: 'Nova Retail',
    industry: 'E-Commerce',
    duration: '14 Weeks',
    challenge: 'Creating a high-performance e-commerce platform capable of handling flash sales with 10,000+ concurrent users.',
    solution: 'We architected a Next.js storefront with Redis caching, queue-based order processing, and auto-scaling infrastructure on AWS.',
    results: [
      'Handled 15,000 concurrent users during launch sale',
      '$2M+ processed in first quarter',
      'Average page speed score of 95+',
    ],
  },
  {
    slug: 'fleet-tracker',
    title: 'FleetPulse',
    category: 'app',
    description: 'Real-time fleet management and GPS tracking application for logistics companies.',
    thumbnail: '/portfolio/fleetpulse.jpg',
    technologies: ['React Native', 'Node.js', 'Socket.io', 'PostgreSQL', 'Google Maps API'],
    client: 'TransCo Logistics',
    industry: 'Logistics',
    duration: '10 Weeks',
    challenge: 'Building a real-time tracking system with sub-second location updates for a fleet of 500+ vehicles across multiple cities.',
    solution: 'We built a React Native app with Socket.io for real-time updates, custom map clustering for performance, and an analytics dashboard for fleet optimization.',
    results: [
      'Real-time tracking of 500+ vehicles',
      '20% reduction in fuel costs through route optimization',
      '99.5% location accuracy',
    ],
  },
  {
    slug: 'nlp-sentiment-analyzer',
    title: 'SentiScope',
    category: 'ai',
    description: 'NLP-based sentiment analysis tool for monitoring brand perception across social media platforms.',
    thumbnail: '/portfolio/sentiscope.jpg',
    technologies: ['Python', 'PyTorch', 'HuggingFace', 'FastAPI', 'React', 'Redis'],
    client: 'BrandWatch Analytics',
    industry: 'Social Media Analytics',
    duration: '8 Weeks',
    challenge: 'Processing millions of social media posts daily with accurate multilingual sentiment classification.',
    solution: 'We fine-tuned a transformer model on domain-specific data, built a scalable processing pipeline with Redis queues, and created an intuitive dashboard for real-time sentiment monitoring.',
    results: [
      '94% sentiment classification accuracy',
      'Processing 2M+ posts daily',
      'Support for 12 languages',
    ],
  },
];

export const team: TeamMember[] = [
  {
    name: 'Rayyan',
    role: 'Founder & CEO',
    bio: 'Visionary leader with deep expertise in technology strategy and product development.',
    image: '/team/founder.jpg',
    linkedin: '#',
    isFounder: true,
  },
  {
    name: 'Co-Founder Name',
    role: 'Co-Founder & CTO',
    bio: 'Technical architect driving innovation across web, mobile, and AI platforms.',
    image: '/team/cofounder.jpg',
    linkedin: '#',
    isFounder: true,
  },
  {
    name: 'Team Lead Name',
    role: 'Team Lead',
    bio: 'Engineering lead managing delivery across multiple projects with precision.',
    image: '/team/teamlead.jpg',
    linkedin: '#',
  },
];

export const techStack = {
  web: [
    { name: 'React', icon: '⚛' },
    { name: 'Next.js', icon: 'N' },
    { name: 'Node.js', icon: 'N' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'MongoDB', icon: 'M' },
    { name: 'PostgreSQL', icon: 'PG' },
    { name: 'AWS', icon: 'A' },
  ],
  app: [
    { name: 'Flutter', icon: 'F' },
    { name: 'React Native', icon: 'RN' },
    { name: 'Firebase', icon: 'FB' },
    { name: 'Swift', icon: 'S' },
    { name: 'Kotlin', icon: 'K' },
  ],
  ai: [
    { name: 'Python', icon: 'Py' },
    { name: 'TensorFlow', icon: 'TF' },
    { name: 'PyTorch', icon: 'PT' },
    { name: 'OpenAI', icon: 'OA' },
    { name: 'LangChain', icon: 'LC' },
    { name: 'HuggingFace', icon: 'HF' },
  ],
};

export const whyChooseUs = [
  {
    title: 'Expert Team',
    description: 'Specialists across web, mobile, and AI domains with proven delivery records.',
    icon: 'Users',
  },
  {
    title: 'Agile Delivery',
    description: 'Fast iterations with transparent communication and regular progress updates.',
    icon: 'Zap',
  },
  {
    title: 'Modern Stack',
    description: 'Production-ready tools and frameworks that ensure scalability from day one.',
    icon: 'Layers',
  },
  {
    title: 'Client-Centric',
    description: 'Dedicated project managers and direct access to your development team.',
    icon: 'Handshake',
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems designed to grow with your business, from MVP to enterprise scale.',
    icon: 'TrendingUp',
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
];
