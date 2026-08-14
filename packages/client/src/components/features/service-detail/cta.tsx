import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';

const DEFAULT_BADGES = ['ISO 9001 Certified', 'ISO 14001 Certified', 'ISO 45001 Certified'];

interface CtaProps {
  heading: ReactNode;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  badges?: string[];
}

const Cta: React.FC<CtaProps> = ({ heading, description, primaryLabel = 'Contact Our Engineers', secondaryLabel = 'Request Technical Consultation', badges = DEFAULT_BADGES }) => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-deep-navy flex flex-col items-center py-16 lg:py-40 overflow-hidden">
      <div className="absolute bg-primary blur-[60px] -right-100 -top-100 rounded-full size-200 pointer-events-none" />

      <FadeIn className="relative flex flex-col items-center px-9 md:px-16 lg:px-36 w-full">
        <h2 className="font-light text-white text-[36px] md:text-[50px] lg:text-[64px] leading-[1.25] text-center max-w-225 pb-8">{heading}</h2>

        <p className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.8] text-center max-w-200 pb-12">{description}</p>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          <motion.button
            type="button"
            onClick={() => navigate(paths.contact)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-secondary rounded-full px-12 py-5 font-light text-white text-base whitespace-nowrap"
          >
            {primaryLabel}
          </motion.button>

          <motion.button
            type="button"
            onClick={() => navigate(paths.contact)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white rounded-full px-12 py-5 font-light text-white text-base whitespace-nowrap"
          >
            {secondaryLabel}
          </motion.button>
        </div>

        {badges.length > 0 && (
          <div className="flex flex-wrap gap-8 items-center justify-center opacity-40 pt-16">
            {badges.map((badge, index) => (
              <span key={badge} className="flex items-center gap-8 font-light text-white text-sm tracking-[1.4px] uppercase whitespace-nowrap">
                {badge}
                {index < badges.length - 1 && <span aria-hidden="true" className="size-1 rounded-full bg-white" />}
              </span>
            ))}
          </div>
        )}
      </FadeIn>
    </section>
  );
};

export default Cta;
