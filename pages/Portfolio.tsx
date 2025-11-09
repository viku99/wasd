import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      clipPath: 'inset(50% 50% 50% 50%)' // Start collapsed to the center
    },
    visible: { 
        opacity: 1,
        clipPath: 'inset(0% 0% 0% 0%)', // Reveal to full size
        transition: { 
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1]
        } 
    },
  };

  return (
    <div className="container mx-auto px-6 md:px-8 pt-40 pb-24">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        Selected Works
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;