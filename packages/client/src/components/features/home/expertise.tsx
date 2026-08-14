import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';

import expertiseImage from '/home/expertise.svg';

const Expertise: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-ice-blue grid grid-cols-1 lg:grid-cols-2 items-center lg:items-stretch py-16 lg:py-24 lg:min-h-[1117px]">
      <FadeIn className="flex flex-col items-start px-9 md:px-16 lg:px-30 relative z-10">
        <div className="flex gap-4 items-center pb-8">
          <div className="bg-secondary h-0.5 w-12" />
          <p className="font-light text-secondary text-lg uppercase">Our Expertise</p>
        </div>

        <h2 className="font-light text-accent text-[42px] md:text-[60px] lg:text-[77px] tracking-[-2.1px] leading-[1.1] lg:leading-[88.2px]">
          Production <span className="text-primary-light">Solutions</span>
        </h2>

        <div className="flex flex-col items-start max-w-160 pb-12 gap-6">
          <p className="font-light text-navy-subtle text-[17px] leading-9">
            Oil and gas production requires more than equipment—it demands engineering expertise, operational excellence, and reliable execution.
          </p>
          <p className="font-light text-navy-subtle text-[17px] leading-9">
            Eunisell provides integrated production solutions that support operators throughout the lifecycle of their production assets. Our multidisciplinary team combines
            engineering, field services, project management, and specialized technologies to improve production performance, extend equipment life, and ensure safe, uninterrupted
            operations.
          </p>
          <p className="font-light text-navy-subtle text-[17px] leading-9">
            Whether supporting greenfield developments, brownfield upgrades, routine maintenance, or production enhancement projects, we deliver practical solutions that align with
            our clients&apos; operational objectives while maintaining the highest standards of safety, quality, and environmental stewardship.
          </p>
        </div>

        <div className="flex gap-6 flex-col lg:flex-row lg:justify-start justify-center items-center">
          <motion.button
            type="button"
            onClick={() => navigate(paths.contact)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="min-w-72.5 h-14.5 bg-secondary rounded-full px-2.5 flex items-center justify-center font-light text-white text-lg tracking-[0.07px] text-center"
          >
            Speak with Our Experts
          </motion.button>

          <motion.button
            type="button"
            onClick={() => navigate(paths.contact)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="min-w-72.5 h-14.5 border border-accent rounded-full px-2.5 flex items-center justify-center font-light text-accent text-lg tracking-[0.07px] text-center"
          >
            Speak With Our Engineers
          </motion.button>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="flex items-center justify-center mt-16 lg:mt-0 lg:h-full">
        <div className="relative overflow-hidden w-full max-w-125 lg:max-w-none lg:h-full lg:w-auto" style={{ aspectRatio: '864 / 1007.3' }}>
          <img
            src={expertiseImage}
            alt="Eunisell production sites: industrial processing plant, offshore rig platform, and a petroleum engineer reviewing data on a tablet"
            className="w-full h-auto"
            style={{ transform: 'translateY(-9.82%)' }}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Expertise;
