
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { useAppContext } from '../contexts/AppContext';
import VideoPlayer from './VideoPlayer';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setCursorVariant } = useAppContext();

  return (
    <Link
      to={`/portfolio/${project.id}`}
      className="block group"
      onMouseEnter={() => {
        setIsHovered(true);
        setCursorVariant('link');
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorVariant('default');
      }}
    >
      <motion.div layoutId={`project-container-${project.id}`} className="relative aspect-[4/3] overflow-hidden bg-primary">
        <AnimatePresence>
          {!isHovered && (
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              layoutId={`project-image-${project.id}`}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && (
             <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <VideoPlayer {...project.cardPreviewVideo} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="mt-4">
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium tracking-wide text-accent">{project.title}</h3>
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
        <p className="text-sm text-gray-400 mt-1">{project.category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
