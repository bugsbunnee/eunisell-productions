import { Link } from 'react-router-dom';

import { FadeIn } from '../../common/motion';
import { paths } from '../../../lib/data';

import heroBg from '/management-team/hero-bg.jpg';
import chevron from '../../../assets/icons/epc/breadcrumb-chevron.svg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-surface border-b border-line overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:h-160">
        <FadeIn className="flex flex-col gap-3 justify-center px-9 md:px-16 lg:pl-36 lg:pr-9 py-16 lg:py-0">
          <nav className="flex gap-3 items-center">
            <Link to={paths.home} className="font-light text-navy-subtle text-sm">
              Home
            </Link>
            <img src={chevron} alt="" className="w-1.5 h-2.5" />
            <span className="font-medium text-secondary text-sm">Management Team</span>
          </nav>

          <p className="font-bold text-secondary text-sm uppercase tracking-[1.4px]">Leadership</p>

          <h1 className="font-bold text-accent text-[40px] md:text-[56px] lg:text-7xl leading-[1.1] tracking-[-0.07px] pt-1">
            Executive
            <br />
            Management
          </h1>

          <p className="font-normal text-navy-subtle text-lg leading-[28.8px] max-w-135 pt-2">
            Driving innovation and excellence in production solutions across the African energy landscape through strategic leadership and technical expertise.
          </p>
        </FadeIn>

        <div className="relative h-80 sm:h-100 lg:h-full">
          <img src={heroBg} alt="Aerial view of an Eunisell oil and gas production facility at sunrise" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-surface via-surface/0 to-surface/0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
