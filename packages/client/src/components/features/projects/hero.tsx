import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';

import heroBg from '/projects/hero-bg.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-deep-navy flex items-center h-100 md:h-125 lg:h-150 overflow-hidden">
      <img src={heroBg} alt="Industrial petroleum facility at dusk" className="absolute inset-0 size-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-linear-to-r from-deep-navy via-deep-navy/80 via-50% to-deep-navy/0" />

      <FadeIn className="relative flex flex-col gap-6 items-start w-full px-9 md:px-16 lg:px-36">
        <div className="flex gap-3 items-center">
          <Link to={paths.home} className="font-light text-secondary text-sm">
            Home
          </Link>
          <span className="font-light text-muted text-sm">/</span>
          <span className="font-light text-muted text-sm">Projects</span>
        </div>

        <h1 className="font-light text-white text-[40px] md:text-[56px] lg:text-[72px] leading-[1.11] tracking-[-2px] pt-2">
          Delivering Excellence
          <br />
          In Every Barrel.
        </h1>

        <p className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.6] max-w-175">
          Explore our portfolio of integrated production solutions, from early production facilities to complex optimization projects across Sub-Saharan Africa.
        </p>
      </FadeIn>
    </section>
  );
};

export default Hero;
