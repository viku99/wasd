
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-6 md:px-8 py-24 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 md:mb-16">Selected Works</h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
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
