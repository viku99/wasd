import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useAppContext } from '../contexts/AppContext';
import Navigation from './Navigation';
import Showreel from './Showreel';

const pageVariants: Variants = {
  initial: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    opacity: 1, // Start with opacity 1 to avoid flashing
  },
  enter: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  out: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { isReelPlaying } = useAppContext();

  return (
    <div className="bg-background text-accent font-sans min-h-screen relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://assets.website-files.com/62338695029a995431057421/62338695029a997230057467_noise.gif')] opacity-5 z-0"></div>
      
      <AnimatePresence mode="wait">
        {isReelPlaying && <Showreel />}
      </AnimatePresence>

      <div className="relative z-10">
        <Navigation />
        <main>
           <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="enter"
              exit="out"
              variants={pageVariants}
              className="bg-background"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Layout;