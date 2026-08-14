import type { ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  amount?: 'some' | 'all' | number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const Stagger: React.FC<StaggerProps> = ({ children, className, amount = 'some' }) => (
  <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount }} variants={containerVariants}>
    {children}
  </motion.div>
);
