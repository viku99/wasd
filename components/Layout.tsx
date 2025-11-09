import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '../contexts/AppContext';
import Navigation from './Navigation';
import CustomCursor from './CustomCursor';
import Showreel from './Showreel';

const pageVariants = {
  initial: {
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    transition: { duration: 0.5 },
  },
  // FIX: Renamed variant from 'in' to 'enter' to resolve a TypeScript error with framer-motion's Variants type. The 'in' keyword can cause conflicts with type definitions.
  enter: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  out: {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { isReelPlaying } = useAppContext();

  return (
    <div className="bg-background text-accent font-sans min-h-screen relative overflow-hidden">
      {/* Living Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://assets.website-files.com/62338695029a995431057421/62338695029a997230057467_noise.gif')] opacity-5 z-0"></div>

      <CustomCursor />
      
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
              // FIX: Updated `animate` prop to match the renamed variant 'enter'.
              animate="enter"
              exit="out"
              variants={pageVariants}
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