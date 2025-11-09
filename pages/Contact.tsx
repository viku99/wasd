import React from 'react';
// FIX: Import `Variants` to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

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

// FIX: Added `Variants` type annotation to resolve type error with the `ease` property.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Contact = () => {
  return (
    <div className="container mx-auto px-6 md:px-8 pt-40 pb-24 min-h-screen flex items-center justify-center">
      <motion.div
        className="max-w-xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          variants={itemVariants}
        >
          Let's Create.
        </motion.h1>
        <motion.p
          className="text-xl text-neutral-400 mb-12"
          variants={itemVariants}
        >
          Have a project in mind or just want to connect? Drop me a line.
        </motion.p>
        
        <motion.div
          className="flex justify-center gap-8 mb-12"
          variants={itemVariants}
        >
          <a href="#" className="text-neutral-500 hover:text-accent transition-colors"><Github size={28} /></a>
          <a href="#" className="text-neutral-500 hover:text-accent transition-colors"><Linkedin size={28} /></a>
          <a href="mailto:hello@example.com" className="text-neutral-500 hover:text-accent transition-colors"><Mail size={28} /></a>
        </motion.div>

        <motion.form 
            className="space-y-6"
            variants={itemVariants}
        >
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-primary border border-secondary px-4 py-3 text-accent placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full bg-primary border border-secondary px-4 py-3 text-accent placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
          />
          <textarea 
            placeholder="Your Message" 
            rows={5}
            className="w-full bg-primary border border-secondary px-4 py-3 text-accent placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
          ></textarea>
          <button 
            type="submit"
            className="w-full bg-accent text-background font-bold py-4 px-6 rounded hover:bg-neutral-300 transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;