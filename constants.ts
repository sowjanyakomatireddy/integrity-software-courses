import { CoursePlan } from './types';

export const COURSES: CoursePlan[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Master AI algorithms, machine learning models, and neural networks.',
    monthlyPrice: 8999,
    originalMonthlyPrice: 13000,
    fullCoursePrice: 22000,
    originalFullCoursePrice: 36000,
    durationMonths: 3,
    features: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python for AI'],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'mern',
    title: 'MERN & Mean Stack',
    description: 'Become a full-stack developer with MongoDB, Express, React/Angular, and Node.',
    monthlyPrice: 5999,
    originalMonthlyPrice: 9000,
    fullCoursePrice: 30999,
    originalFullCoursePrice: 46000,
    durationMonths: 6,
    features: ['React.js & Angular', 'Node.js Backend', 'MongoDB Database', 'REST APIs'],
    popular: true,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Create intuitive and beautiful user experiences with modern design principles.',
    monthlyPrice: 4499,
    originalMonthlyPrice: 6000,
    fullCoursePrice: 13499,
    originalFullCoursePrice: 18000,
    durationMonths: 3,
    features: ['Design Fundamentals', 'Figma for UI/UX', 'Design Thinking Process', 'UI/UX Portfolio & Resume'],
    popular: true,
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'devops',
    title: 'DevOps Engineering',
    description: 'Bridge the gap between development and operations with CI/CD tools.',
    monthlyPrice: 4999,
    originalMonthlyPrice: 7000,
    fullCoursePrice: 12999,
    originalFullCoursePrice: 19000,
    durationMonths: 3,
    features: ['Docker & Kubernetes', 'Jenkins CI/CD', 'AWS Cloud Basics', 'Infrastructure as Code'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'java',
    title: 'Java Development',
    description: 'Comprehensive Java training from core concepts to enterprise frameworks.',
    monthlyPrice: 4999,
    originalMonthlyPrice: 6500,
    fullCoursePrice: 11999,
    originalFullCoursePrice: 16500,
    durationMonths: 3,
    features: ['Core Java', 'Spring Boot', 'Hibernate', 'Microservices'],
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Learn the most versatile language for web, data, and automation.',
    monthlyPrice: 4999,
    originalMonthlyPrice: 6500,
    fullCoursePrice: 11999,
    originalFullCoursePrice: 16500,
    durationMonths: 3,
    features: ['Python Syntax', 'Django/Flask', 'Data Structures', 'Scripting'],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Create stunning, responsive websites from scratch.',
    monthlyPrice: 4999,
    originalMonthlyPrice: 6000,
    fullCoursePrice: 11999,
    originalFullCoursePrice: 13500,
    durationMonths: 3,
    features: ['HTML5 & CSS3', 'JavaScript Basics', 'Responsive Layouts', 'Bootstrap/Tailwind', 'Design Fundamentals'],
    popular: true,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'linux',
    title: 'Linux Administration',
    description: 'Master the command line and server administration.',
    monthlyPrice: 3999,
    originalMonthlyPrice: 6000,
    fullCoursePrice: 9999,
    originalFullCoursePrice: 16000,
    durationMonths: 3,
    features: ['Shell Scripting', 'User Management', 'Network Config', 'Security'],
    color: 'from-slate-500 to-gray-600'
  },
  {
    id: 'cpp-oracle',
    title: 'C, C++, Oracle',
    description: 'Foundational programming and database management mastery.',
    monthlyPrice: 3999,
    originalMonthlyPrice: 6000,
    fullCoursePrice: 9999,
    originalFullCoursePrice: 16000,
    durationMonths: 3,
    features: ['Memory Management', 'OOP Concepts', 'SQL Queries', 'PL/SQL'],
    color: 'from-cyan-600 to-blue-700'
  },
  {
    id: 'tally',
    title: 'Tally Packages',
    description: 'Complete accounting and inventory management training.',
    monthlyPrice: 4499,
    originalMonthlyPrice: 7500,
    fullCoursePrice: 7999,
    originalFullCoursePrice: 17000,
    durationMonths: 2,
    features: ['Tally Prime', 'GST Calculation', 'Payroll Management', 'Inventory Control'],
    color: 'from-teal-400 to-emerald-500'
  },
  {
    id: 'hardware',
    title: 'Hardware',
    description: 'Practical computer hardware training and troubleshooting.',
    monthlyPrice: 3999,
    originalMonthlyPrice: 5500,
    fullCoursePrice: 9999,
    originalFullCoursePrice: 16000,
    durationMonths: 3,
    features: ['PC Assembly', 'Troubleshooting', 'OS Installation', 'Teaching + Practical'],
    color: 'from-gray-600 to-zinc-600'
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Understand networks, protocols, and infrastructure.',
    monthlyPrice: 3999,
    originalMonthlyPrice: 5500,
    fullCoursePrice: 9999,
    originalFullCoursePrice: 16000,
    durationMonths: 3,
    features: ['LAN/WAN Config', 'IP Addressing', 'Routing Basics', 'Network Security'],
    color: 'from-indigo-400 to-blue-500'
  },
  {
    id: 'dtp',
    title: 'DTP (Desktop Publishing)',
    description: 'Master design tools for print and digital media.',
    monthlyPrice: 3999,
    originalMonthlyPrice: 6000,
    fullCoursePrice: 6999,
    originalFullCoursePrice: 11000,
    durationMonths: 2,
    features: ['Photoshop', 'CorelDraw', 'PageMaker', 'Design Principles'],
    color: 'from-fuchsia-500 to-purple-500'
  },
  {
    id: 'ms-office',
    title: 'MS Office Tools',
    description: 'Essential office productivity software mastery.',
    monthlyPrice: 3999,
    originalMonthlyPrice: 4500,
    fullCoursePrice: 6999,
    originalFullCoursePrice: 9000,
    durationMonths: 2,
    features: ['Advanced Excel', 'Word Formatting', 'PowerPoint', 'Outlook'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'autocad',
    title: 'AutoCAD',
    description: '2D and 3D computer-aided design for engineering.',
    monthlyPrice: 4499,
    originalMonthlyPrice: 7500,
    fullCoursePrice: 11499,
    originalFullCoursePrice: 17000,
    durationMonths: 3,
    features: ['2D Drafting', '3D Modeling', 'Layouts', 'Engineering Drawing'],
    color: 'from-red-600 to-orange-600'
  }
];

export const APP_CONSTANTS = {
  CURRENCY_SYMBOL: '₹',
  CONTACT_EMAIL: 'hr@digital-itsolutions.com',
  PHONE_NUMBERS: '+91 9652352635, 63013 87792',
  ENROLL_LINK: 'https://docs.google.com/forms/d/e/1FAIpQLSfT6MbE3OYaIv4HjO-NFEvcjRGw3cuzwDJZYvnJZ7Pzs4uFXg/viewform?usp=dialog'
};