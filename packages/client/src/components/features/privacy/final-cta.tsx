import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';

const FinalCta: React.FC = () => {
  return (
    <section className="relative bg-accent flex flex-col items-center justify-center px-9 md:px-16 lg:px-36 py-24 lg:py-32 overflow-hidden">
      <div className="absolute -left-20 -top-20 bg-primary blur-[60px] opacity-40 rounded-full size-165 pointer-events-none" />

      <FadeIn className="relative flex flex-col gap-6 items-center max-w-200 w-full text-center">
        <h2 className="font-bold text-white text-[36px] md:text-[44px] lg:text-[56px] leading-[1.25] tracking-[-0.05px]">Trust & Reliability</h2>

        <p className="font-light text-navy-subtle text-lg md:text-xl leading-7 max-w-165">
          We are committed to maintaining the highest standards of data security and professional integrity across all our global operations.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center pt-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to={paths.home} className="inline-flex bg-secondary rounded-full px-10 py-[22px] font-medium text-white text-base">
              Return to Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to={paths.services} className="inline-flex border-2 border-white rounded-full px-10 py-5 font-medium text-white text-base">
              Our Services
            </Link>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
};

export default FinalCta;
