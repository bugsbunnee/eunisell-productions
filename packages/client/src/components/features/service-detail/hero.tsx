import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { Stagger, StaggerItem } from '../../common/motion';

import heroBg from '/services/hero-bg.png';
import chevron from '../../../assets/icons/epc/breadcrumb-chevron.svg';
import buttonArrow from '../../../assets/icons/epc/button-arrow.svg';

interface HeroProps {
  breadcrumbLabel: string;
  heading: ReactNode;
  description: string;
  backgroundImage?: string;
  backgroundAlt?: string;
}

const Hero: React.FC<HeroProps> = ({ breadcrumbLabel, heading, description, backgroundImage = heroBg, backgroundAlt = 'Oil and gas production facility' }) => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-deep-navy flex flex-col justify-center h-125 md:h-160 lg:h-200 overflow-hidden">
      <img src={backgroundImage} alt={backgroundAlt} className="absolute inset-0 size-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-linear-to-r from-deep-navy via-deep-navy/80 via-50% to-deep-navy/0" />

      <Stagger className="relative flex flex-col gap-4 items-start px-9 md:px-16 lg:px-36 w-full">
        <StaggerItem className="flex gap-3 items-center">
          <Link to={paths.home} className="font-light text-navy-muted text-sm">
            Home
          </Link>
          <img src={chevron} alt="" className="w-1.5 h-2.5" />
          <Link to={paths.services} className="font-light text-navy-muted text-sm">
            Services
          </Link>
          <img src={chevron} alt="" className="w-1.5 h-2.5" />
          <span className="font-light text-secondary text-sm">{breadcrumbLabel}</span>
        </StaggerItem>

        <StaggerItem className="flex gap-4 items-center">
          <div className="bg-secondary h-0.5 w-12" />
          <p className="font-light text-secondary text-sm">Our Services</p>
        </StaggerItem>

        <StaggerItem>
          <h1 className="font-light text-white text-[44px] md:text-[64px] lg:text-[84px] leading-[1.1] tracking-[-2.1px] pt-1.5">{heading}</h1>
        </StaggerItem>

        <StaggerItem>
          <p className="font-light text-navy-muted text-lg lg:text-xl leading-[1.8] max-w-200 pt-1.5">{description}</p>
        </StaggerItem>

        <StaggerItem className="flex flex-wrap gap-6 items-center pt-2">
          <button
            type="button"
            onClick={() => navigate(paths.contact)}
            className="bg-secondary rounded-full flex gap-3 items-center px-12 py-5 font-light text-white text-base whitespace-nowrap"
          >
            Contact Engineering Team
            <img src={buttonArrow} alt="" className="w-3.5 h-3" />
          </button>
          <button
            type="button"
            onClick={() => navigate(paths.contact)}
            className="border border-white rounded-full flex items-center px-12 py-5 font-light text-white text-base whitespace-nowrap"
          >
            Request Consultation
          </button>
        </StaggerItem>
      </Stagger>
    </section>
  );
};

export default Hero;
