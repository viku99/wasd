
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import VideoPlayer from '../components/VideoPlayer';
import { useAppContext } from '../contexts/AppContext';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { setCursorVariant } = useAppContext();
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found.</p>
        <Link to="/portfolio">Back to portfolio</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full h-[60vh] md:h-screen">
        <motion.div 
            className="absolute inset-0"
            layoutId={`project-container-${project.id}`}
        >
             <VideoPlayer {...project.heroVideo} />
             <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white">
            <div className="container mx-auto">
                 <motion.h1 
                    className="text-4xl md:text-7xl font-bold tracking-tighter"
                 >
                    {project.title}
                </motion.h1>
                <motion.p className="text-lg md:text-xl text-gray-300 mt-2">
                    {project.category}
                </motion.p>
            </div>
        </div>
        
        <Link
            to="/portfolio"
            onMouseEnter={() => setCursorVariant('link')}
            onMouseLeave={() => setCursorVariant('default')}
            className="absolute top-20 left-6 md:left-8 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/40 transition-colors"
        >
            <ArrowLeft size={16} />
            Back to Works
        </Link>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <div className="space-y-4 text-gray-400">
                <div>
                    <h3 className="font-semibold text-accent">Role</h3>
                    <p>{project.details.role}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-accent">Year</h3>
                    <p>{project.details.year}</p>
                </div>
                 <div>
                    <h3 className="font-semibold text-accent">Tech Stack</h3>
                    <ul className="flex flex-wrap gap-2 mt-1">
                        {project.details.techStack.map(tech => (
                            <li key={tech} className="bg-secondary text-gray-300 text-xs font-mono px-2 py-1 rounded">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                {project.details.liveUrl && (
                     <a 
                        href={project.details.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onMouseEnter={() => setCursorVariant('link')}
                        onMouseLeave={() => setCursorVariant('default')}
                        className="inline-flex items-center gap-2 text-accent-hover hover:text-accent transition-colors mt-4"
                    >
                        View Live Site <ExternalLink size={16} />
                    </a>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
