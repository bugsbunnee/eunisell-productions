import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';

const Cta: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-accent flex flex-col items-center px-9 md:px-16 lg:px-36 py-24 lg:py-36">
      <FadeIn className="flex flex-col gap-10 items-center max-w-225 w-full">
        <h2 className="font-inter font-bold text-white text-[32px] md:text-[40px] lg:text-5xl leading-[1.1] text-center">
          Let's Improve Your Production
          <br />
          Performance
        </h2>

        <div className="flex flex-wrap gap-5 items-center justify-center w-full">
          <motion.button
            type="button"
            onClick={() => navigate(paths.contact)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-inter bg-secondary rounded-[16px] px-6 sm:px-10 py-5.5 font-bold text-white text-lg tracking-[-0.02px] text-center"
          >
            Contact Our Production Solutions Team
          </motion.button>

          <motion.button
            type="button"
            onClick={() => navigate(paths.contact)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-inter border-2 border-secondary rounded-[16px] px-6 sm:px-10 py-5 font-bold text-white text-lg tracking-[-0.02px] text-center"
          >
            Request a Technical Consultation
          </motion.button>
        </div>
      </FadeIn>
    </section>
  );
};

export default Cta;
