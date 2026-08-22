import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn } from '../../common/motion';
import breadcrumbChevron from '../../../assets/icons/knowledge-centre/breadcrumb-chevron.svg';
import heroBrochures from '/knowledge-centre/hero-brochures.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-accent flex flex-col items-center justify-center overflow-hidden px-9 md:px-16 lg:px-36 py-16 md:py-24 lg:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-25 items-center max-w-432 w-full">
        <FadeIn className="flex flex-col gap-3 items-start">
          <nav className="flex gap-3 items-center">
            <Link to={paths.home} className="font-medium text-muted text-sm tracking-[1.4px] uppercase">
              Home
            </Link>
            <img src={breadcrumbChevron} alt="" className="w-1.5 h-2.5" />
            <span className="font-medium text-secondary text-sm tracking-[1.4px] uppercase">Knowledge Centre</span>
          </nav>

          <p className="font-bold text-secondary text-sm tracking-[2.8px] uppercase">Resources</p>

          <h1 className="font-bold text-white text-[44px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-1.8px] pt-3">
            Knowledge
            <br />
            Centre
          </h1>

          <p className="font-normal text-muted text-lg leading-[1.6] max-w-115 pt-3">
            Access and download Eunisell Production Solutions brochures, service materials, and technical resources.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="relative flex items-center justify-center h-100 lg:h-125">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,131,206,0.35),transparent_65%)] opacity-60" />
          <img
            src={heroBrochures}
            alt="Stack of Eunisell Production Solutions brochures and technical documents"
            className="relative max-h-full w-auto object-contain drop-shadow-[0px_25px_25px_rgba(0,0,0,0.15)]"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
