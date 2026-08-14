import type { ReactNode } from 'react';

import { motion, useReducedMotion } from 'motion/react';
import { EASE } from './easing';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className, delay = 0, y = 24 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: EASE, delay: shouldReduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
};
