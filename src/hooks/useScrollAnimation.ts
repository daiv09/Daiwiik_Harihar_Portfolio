import { useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Returns ref and inView status for triggering animations when element enters viewport
 */
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: triggerOnce,
    margin: "-100px 0px -100px 0px" // Trigger animation slightly before element enters view
  });

  return { ref, isInView };
};

/**
 * Animation variants for common animation patterns
 */
export const animationVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Slide animations
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  slideInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Stagger container for child animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },

  // Stagger child items
  staggerItem: {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Hover animations
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  },

  hoverTilt: {
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  },

  // Button pulse animation
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

/**
 * Scroll progress hook for parallax effects
 */
export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
};