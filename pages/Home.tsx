import React from 'react';
// FIX: Imported the `Variants` type from framer-motion to explicitly type the variants object.
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const Home = () => {
  const { setCursorVariant } = useAppContext();
  const name = "VIKAS";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // FIX: Explicitly typed `letterVariants` with `Variants` to resolve a type inference issue with the 'type' property in the transition object.
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };
  
  const subtitleVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <motion.h1
        className="text-7xl md:text-9xl font-extrabold tracking-tighter text-accent select-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={name}
        onMouseEnter={() => setCursorVariant('text')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        {name.split('').map((letter, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p 
        className="mt-4 text-lg md:text-2xl text-gray-400 max-w-2xl"
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
      >
        A motion-first developer crafting cinematic digital experiences.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-12"
      >
        <Link
          to="/portfolio"
          onMouseEnter={() => setCursorVariant('link')}
          onMouseLeave={() => setCursorVariant('default')}
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide uppercase border border-secondary text-accent-hover hover:text-accent hover:border-accent transition-all duration-300"
        >
          Explore Work
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;