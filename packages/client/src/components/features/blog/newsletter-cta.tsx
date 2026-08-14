import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';
import bgPattern from '../../../assets/icons/blog/cta-bg-pattern.svg';

const NewsletterCta: React.FC = () => {
  return (
    <section className="px-9 md:px-16 lg:px-36 pb-16 lg:pb-20">
      <div className="relative bg-accent rounded-3xl flex flex-col items-center justify-center px-9 md:px-20 py-16 md:py-25 overflow-hidden">
        <img src={bgPattern} alt="" className="absolute inset-0 size-full object-cover pointer-events-none" />

        <FadeIn className="relative flex flex-col gap-8 items-center w-full">
          <div className="flex flex-col gap-4 items-center max-w-175 text-center">
            <h2 className="font-bold text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.5] tracking-[0.14px]">Stay Informed</h2>
            <p className="font-normal text-navy-subtle text-lg leading-[1.5] tracking-[-0.04px]">
              Get the latest technical insights, industry trends, and project updates from Eunisell Production Solutions directly to your inbox.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center justify-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to={paths.blog} className="inline-flex bg-secondary rounded-full px-8 py-[18px] font-bold text-white text-base">
                Explore More Insights
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to={paths.contact} className="inline-flex border border-white rounded-full px-8 py-[18px] font-bold text-white text-base whitespace-nowrap">
                Contact Our Production Solutions Team
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default NewsletterCta;
