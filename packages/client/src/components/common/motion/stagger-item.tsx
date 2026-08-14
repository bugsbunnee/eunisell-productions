import type { CSSProperties, ReactNode } from 'react';

import { motion, useReducedMotion } from 'motion/react';
import { EASE } from './easing';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className, style, hover }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      variants={{ hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
      whileHover={hover && !shouldReduceMotion ? { y: -6, transition: { duration: 0.25, ease: EASE } } : undefined}
    >
      {children}
    </motion.div>
  );
};
