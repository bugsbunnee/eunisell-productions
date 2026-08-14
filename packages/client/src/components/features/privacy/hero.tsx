import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';
import worldMap from '/contact/world-map.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-surface flex flex-col items-start justify-center px-9 md:px-16 lg:px-36 py-16 lg:py-24 overflow-hidden">
      <img src={worldMap} alt="" className="absolute inset-0 size-full object-cover opacity-10 pointer-events-none" />

      <FadeIn className="relative flex flex-col gap-4 items-start max-w-225 w-full">
        <nav className="flex gap-3 items-center">
          <Link to={paths.home} className="font-light text-secondary text-sm tracking-[0.41px]">
            Home
          </Link>
          <span className="font-light text-muted text-sm">/</span>
          <span className="font-light text-muted text-sm">Privacy Policy</span>
        </nav>

        <p className="font-light text-secondary text-base tracking-[4px] uppercase pt-4">Legal</p>

        <h1 className="font-bold text-accent text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] lg:leading-20 tracking-[-1.8px]">Privacy Policy</h1>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start pt-8">
          <div className="flex flex-col items-start">
            <p className="font-medium text-accent text-base leading-6">Effective Date</p>
            <p className="font-light text-navy-subtle text-base leading-6">October 24, 2023</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="font-medium text-accent text-base leading-6">Last Updated</p>
            <p className="font-light text-navy-subtle text-base leading-6">May 15, 2024</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
