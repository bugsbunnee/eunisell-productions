import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/** Fades and slides an element in once it scrolls into view. */
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

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  amount?: number;
}

/** Reveals a group of StaggerItem children in sequence once it scrolls into view. */
export const Stagger: React.FC<StaggerProps> = ({ children, className, amount = 0.2 }) => (
  <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount }} variants={containerVariants}>
    {children}
  </motion.div>
);

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
}

/** A single child of Stagger — inherits the fade/slide-in state from its parent. */
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
