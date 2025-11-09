import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const skills = [
    "React & Next.js", "TypeScript", "Three.js & R3F",
    "Framer Motion", "WebGL & GLSL", "D3.js", "Node.js",
    "UI/UX Design", "Creative Direction"
];

const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-8 pt-40 pb-24 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-16"
          variants={itemVariants}
        >
          Synthesizing Code & Cinema.
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div 
            className="lg:col-span-1" 
            variants={itemVariants}
          >
            <div className="aspect-[3/4] bg-primary rounded-lg overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Vikas" 
                    className="w-full h-full object-cover filter grayscale"
                />
            </div>
          </motion.div>

          <motion.div className="lg:col-span-2 space-y-12" variants={itemVariants}>
            <div>
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                My name is Vikas, and I am a creative developer and motion designer driven by a single passion: to craft digital experiences that resonate with the immersive, emotional power of cinema. My work is a synthesis of fluid animation, interactive 3D graphics, and impeccably clean code.
              </p>
              <p className="text-xl text-neutral-400 leading-relaxed">
                I view the web not just as a medium for information, but as a canvas for storytelling. From data visualizations that breathe life into numbers to WebGL journeys that transport users to other worlds, my goal is to build interfaces that captivate and inspire. My process is a meticulous blend of technical precision and artistic intuition, a constant push to discover the perfect balance that transforms an experience from merely usable to truly unforgettable.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-accent mb-6">Expertise</h2>
              <ul className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <li key={skill} className="bg-neutral-800 text-neutral-200 font-mono px-4 py-2 rounded text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;