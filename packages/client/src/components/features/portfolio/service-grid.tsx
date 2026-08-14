import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { Stagger, StaggerItem } from '../../common/motion';

import wellTestingImg from '/portfolio/card-well-testing.png';
import productionFacilitiesImg from '/portfolio/card-production-facilities.png';
import operationsMaintenanceImg from '/portfolio/card-operations-maintenance.png';
import waterSolutionsImg from '/portfolio/card-water-solutions.png';
import productionEnhancementImg from '/portfolio/card-production-enhancement.jpeg';
import equipmentSolutionsImg from '/portfolio/card-equipment-solutions.png';
import engineeringServicesImg from '/portfolio/card-engineering-services.png';
import arrowWhite from '../../../assets/icons/services/arrow-white.svg';
import arrowBlue from '../../../assets/icons/services/arrow-blue.svg';

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  size: 'large' | 'small';
  href: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Well Testing',
    description: 'Accurate data acquisition and fluid analysis to maximize reservoir potential.',
    image: wellTestingImg,
    size: 'large',
    href: paths.services + '/well-testing',
  },
  {
    number: '02',
    title: 'Production Facilities',
    description: 'Turnkey design, construction, and management of early production facilities.',
    image: productionFacilitiesImg,
    size: 'small',
    href: '#',
  },
  {
    number: '03',
    title: 'Operations & Maintenance',
    description: 'Comprehensive asset integrity management for long-term operational success.',
    image: operationsMaintenanceImg,
    size: 'small',
    href: '#',
  },
  {
    number: '04',
    title: 'Water Solutions',
    description: 'Advanced produced water management and environmental-friendly disposal solutions.',
    image: waterSolutionsImg,
    size: 'large',
    href: '#',
  },
  {
    number: '05',
    title: 'Production Enhancement',
    description: 'Optimizing flow rates and recovery through innovative chemical and mechanical interventions.',
    image: productionEnhancementImg,
    size: 'small',
    href: '#',
  },
  {
    number: '06',
    title: 'Equipment Solutions',
    description: 'Rental and procurement of mission-critical production equipment and spare parts.',
    image: equipmentSolutionsImg,
    size: 'small',
    href: '#',
  },
  {
    number: '07',
    title: 'Engineering Services',
    description: 'Front-end engineering design (FEED) and detailed project engineering for oil and gas assets.',
    image: engineeringServicesImg,
    size: 'small',
    href: '#',
  },
];

const LargeCard: React.FC<{ service: Service }> = ({ service }) => (
  <StaggerItem hover className="group lg:col-span-2 relative h-140 rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
    <img src={service.image} alt={service.title} className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
    <div className="absolute inset-0 bg-linear-to-t from-accent from-10% to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 items-start p-8 lg:p-12">
      <p className="font-light text-secondary text-2xl leading-8">{service.number}</p>
      <h3 className="font-light text-white text-3xl md:text-4xl leading-10">{service.title}</h3>
      <p className="font-light text-white text-lg leading-[1.6] max-w-145">{service.description}</p>

      <div className="flex items-end justify-between w-full pt-2">
        <Link to={service.href} className="font-light text-secondary text-xs">
          Explore Services
        </Link>
        <Link to={service.href} className="border border-white rounded-full flex items-center justify-center shrink-0 size-12">
          <img src={arrowWhite} alt="" className="w-3.5 h-4" />
        </Link>
      </div>
    </div>
  </StaggerItem>
);

const SmallCard: React.FC<{ service: Service }> = ({ service }) => (
  <StaggerItem hover className="group relative flex flex-col h-140 rounded-2xl overflow-hidden bg-white shadow-lg">
    <div className="h-70 shrink-0 overflow-hidden">
      <img src={service.image} alt={service.title} className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
    </div>

    <div className="flex flex-1 flex-col justify-between p-10">
      <div className="flex flex-col gap-2 items-start">
        <p className="font-light text-secondary text-xl leading-7">{service.number}</p>
        <h3 className="font-light text-accent text-2xl leading-8">{service.title}</h3>
        <p className="font-light text-accent text-sm leading-normal pt-0.75">{service.description}</p>
      </div>

      <div className="flex items-center justify-between w-full">
        <Link to={service.href} className="font-light text-secondary text-xs">
          Explore Services
        </Link>
        <Link to={service.href} className="shrink-0">
          <img src={arrowBlue} alt="" className="size-4" />
        </Link>
      </div>
    </div>
  </StaggerItem>
);

const ServiceGrid: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 w-full">
        {services.map((service) => (service.size === 'large' ? <LargeCard key={service.number} service={service} /> : <SmallCard key={service.number} service={service} />))}
      </Stagger>
    </section>
  );
};

export default ServiceGrid;
