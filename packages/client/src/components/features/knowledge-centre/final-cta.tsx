import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';

const FinalCta: React.FC = () => {
  return (
    <section className="bg-accent flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 md:py-24 lg:py-36 w-full">
      <FadeIn className="flex flex-col gap-8 items-center text-center max-w-200 w-full">
        <h2 className="font-bold text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25]">Need More Information?</h2>

        <p className="font-normal text-muted text-lg leading-[1.6]">
          Contact our team for additional technical specifications, case studies, or to learn more about how our integrated production solutions can optimize your assets.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center pt-2">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to={paths.contact} className="flex flex-col items-center bg-secondary rounded-full px-15 py-5.5 font-bold text-white text-lg leading-[1.5]">
              <span>Contact Our Production Solutions</span>
              <span>Team</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to={paths.contact} className="flex flex-col items-center border-2 border-white rounded-full px-23 py-5 font-bold text-white text-lg leading-[1.5]">
              <span>Request a Technical</span>
              <span>Consultation</span>
            </Link>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
};

export default FinalCta;
