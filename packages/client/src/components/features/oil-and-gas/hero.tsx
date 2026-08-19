import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { Stagger, StaggerItem } from '../../common/motion';

import heroBg from '/oil-and-gas/hero-bg.jpg';
import chevron from '../../../assets/icons/oil-and-gas/breadcrumb-chevron-white.svg';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-accent flex items-center py-24 lg:py-0 lg:h-200 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Cinematic wide shot of a massive active oil and gas facility at dusk" className="absolute inset-0 size-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/80 via-50% to-accent/0" />
      </div>

      <div className="relative flex w-full px-9 md:px-16 lg:px-36">
        <Stagger className="flex flex-col gap-3 items-start max-w-200 w-full">
          <StaggerItem className="flex flex-col gap-3 items-start">
            <div className="flex gap-3 items-center">
              <Link to={paths.home} className="font-inter font-medium text-white/60 text-sm tracking-[0.7px] uppercase">
                Home
              </Link>
              <img src={chevron} alt="" className="w-1.5 h-2.5" />
              <Link to={paths.portfolio} className="font-inter font-medium text-white/60 text-sm tracking-[0.7px] uppercase">
                Industries
              </Link>
              <img src={chevron} alt="" className="w-1.5 h-2.5" />
              <span className="font-inter font-medium text-secondary text-sm tracking-[0.7px] uppercase">Oil &amp; Gas</span>
            </div>

            <p className="font-inter font-bold text-secondary text-sm tracking-[2.8px] uppercase">Industries We Serve</p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-inter font-bold text-white text-[44px] md:text-[58px] lg:text-[72px] leading-[1.1] tracking-[-0.07px] pt-1.5">Oil &amp; Gas</h1>
          </StaggerItem>

          <StaggerItem>
            <h2 className="font-inter font-semibold text-white/90 text-4xl leading-[1.2] tracking-[-0.11px] pt-1">
              Integrated Production Support Across the Oil
              <br />
              &amp; Gas Asset Lifecycle
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="font-inter text-white/70 text-lg leading-[1.6] pt-2">
              Eunisell Production Solutions supports oil and gas operators with integrated engineering, field services, production facilities, operations and maintenance, equipment
              solutions, well services, production enhancement, and technical support designed to improve asset reliability and operational performance throughout the production
              lifecycle.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap gap-5 items-center pt-4">
            <button
              type="button"
              onClick={() => navigate(paths.contact)}
              className="font-inter bg-secondary rounded-[16px] flex items-center px-8 py-4.5 font-bold text-white text-base whitespace-nowrap"
            >
              Speak with Our Experts
            </button>
            <button
              type="button"
              onClick={() => navigate(paths.contact)}
              className="font-inter border-2 border-white rounded-[16px] flex items-center px-8 py-4 font-bold text-white text-base tracking-[0.03px] whitespace-nowrap"
            >
              Request a Proposal
            </button>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};

export default Hero;
