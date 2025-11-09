
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'project-cyberscape',
    title: 'Project Cyberscape',
    category: 'Interactive Web Experience',
    description: 'A deep dive into a dystopian future, this WebGL experience combines narrative storytelling with interactive 3D environments. Built with React Three Fiber, it pushes the boundaries of web-based graphics.',
    imageUrl: 'https://picsum.photos/seed/cyberscape/800/600',
    cardPreviewVideo: {
      type: 'local',
      src: '/videos/preview1.mp4',
    },
    heroVideo: {
      type: 'local',
      src: '/videos/hero1.mp4',
    },
    details: {
      role: 'Lead Frontend & WebGL Developer',
      techStack: ['React', 'Three.js', 'React Three Fiber', 'GLSL', 'Framer Motion'],
      year: 2023,
      liveUrl: '#',
    },
  },
  {
    id: 'data-vista',
    title: 'Data Vista',
    category: 'Data Visualization Platform',
    description: 'An enterprise-level dashboard that visualizes complex market data in real-time. Features custom D3.js charts and a highly performant, responsive interface for traders and analysts.',
    imageUrl: 'https://picsum.photos/seed/datavista/800/600',
    cardPreviewVideo: {
      type: 'youtube',
      src: 'LDU_Txk06tM', // Example YouTube ID
    },
    heroVideo: {
      type: 'youtube',
      src: 'LDU_Txk06tM', // Example YouTube ID
    },
    details: {
      role: 'Senior Frontend Engineer',
      techStack: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Tailwind CSS'],
      year: 2022,
    },
  },
  {
    id: 'kinetic-ecom',
    title: 'Kinetic E-Commerce',
    category: 'Motion-First E-Commerce',
    description: 'A proof-of-concept e-commerce site where product presentation is driven by video and micro-interactions. The goal was to create a more engaging and tactile shopping experience.',
    imageUrl: 'https://picsum.photos/seed/kineticecom/800/600',
    cardPreviewVideo: {
      type: 'local',
      src: '/videos/preview2.mp4',
    },
    heroVideo: {
      type: 'local',
      src: '/videos/hero2.mp4',
    },
    details: {
      role: 'UI/UX Designer & Developer',
      techStack: ['React', 'Framer Motion', 'Stripe API', 'Styled Components'],
      year: 2023,
      liveUrl: '#',
    },
  },
  {
    id: 'audio-odyssey',
    title: 'Audio Odyssey',
    category: 'Generative Music App',
    description: 'A web application that generates ambient soundscapes based on user input and weather data. It uses the Web Audio API to create a unique and relaxing auditory experience.',
    imageUrl: 'https://picsum.photos/seed/audio/800/600',
    cardPreviewVideo: {
      type: 'youtube',
      src: 'hHW1oY2ir_M', // Example YouTube ID
    },
    heroVideo: {
      type: 'youtube',
      src: 'hHW1oY2ir_M', // Example YouTube ID
    },
    details: {
      role: 'Creator & Sole Developer',
      techStack: ['React', 'Web Audio API', 'TypeScript', 'OpenWeatherMap API'],
      year: 2021,
    },
  },
];
