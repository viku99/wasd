
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { PROJECTS } from '../constants';
import VideoPlayer from './VideoPlayer';

const Showreel = () => {
  const { stopReel, setCursorVariant } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = PROJECTS.map(p => p.heroVideo);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 7000); // Change video every 7 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, videos.length]);

  return (
    <motion.div
      className="fixed inset-0 bg-background z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={stopReel}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-gray-400 hover:text-accent transition-colors"
        onMouseEnter={() => setCursorVariant('link')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <X size={32} />
      </button>

      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <VideoPlayer {...videos[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

       <div className="absolute bottom-8 left-8 z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                {PROJECTS[currentIndex].title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
                {PROJECTS[currentIndex].category}
            </p>
        </div>
    </motion.div>
  );
};

export default Showreel;
