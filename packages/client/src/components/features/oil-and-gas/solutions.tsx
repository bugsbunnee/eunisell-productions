import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import wellTestingImg from '/oil-and-gas/solution-well-testing.jpg';
import productionFacilitiesImg from '/oil-and-gas/solution-production-facilities.jpg';
import operationsMaintenanceImg from '/oil-and-gas/solution-operations-maintenance.jpg';
import waterIcon from '../../../assets/icons/oil-and-gas/solution-water.svg';
import productionEnhancementIcon from '../../../assets/icons/oil-and-gas/solution-production-enhancement.svg';
import equipmentIcon from '../../../assets/icons/oil-and-gas/solution-equipment.svg';
import engineeringIcon from '../../../assets/icons/oil-and-gas/solution-engineering.svg';

const photoCards = [
  { image: wellTestingImg, title: 'Well Testing', description: 'Comprehensive data acquisition and analysis to determine reservoir potential.' },
  { image: productionFacilitiesImg, title: 'Production Facilities', description: 'Custom-engineered Early Production Facilities (EPF) and central processing plants.' },
  { image: operationsMaintenanceImg, title: 'Operations & Maintenance', description: 'Maximizing asset uptime through world-class O&M strategies and execution.' },
];

const iconCards = [
  { icon: waterIcon, iconClass: 'w-4.5 h-6', title: 'Water Solutions', description: 'Produced water treatment and injection systems for reservoir pressure maintenance.' },
  {
    icon: productionEnhancementIcon,
    iconClass: 'size-6',
    title: 'Production Enhancement',
    description: 'Chemical and mechanical interventions to stimulate and increase field output.',
  },
  { icon: equipmentIcon, iconClass: 'w-7.5 h-6', title: 'Equipment Solutions', description: 'Supply and integration of critical production and processing equipment.' },
  { icon: engineeringIcon, iconClass: 'size-6', title: 'Engineering Services', description: 'From concept selection to detailed design and brownfield engineering.' },
];

const Solutions: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-36">
      <div className="flex flex-col gap-10 items-center max-w-360 w-full">
        <FadeIn>
          <h2 className="font-inter font-semibold text-accent text-4xl leading-normal text-center tracking-[-0.14px]">Integrated Solutions</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {photoCards.map(({ image, title, description }) => (
            <StaggerItem key={title} hover className="flex flex-col gap-6 items-start">
              <div className="h-70 w-full rounded-[16px] overflow-hidden">
                <img src={image} alt={title} className="size-full object-cover" />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h3 className="font-inter font-bold text-accent text-2xl leading-normal">{title}</h3>
                <p className="font-inter text-navy-subtle text-base leading-normal">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {iconCards.map(({ icon, iconClass, title, description }) => (
            <StaggerItem key={title} hover className="flex flex-col gap-3 items-start bg-ice-blue border border-[#e2e8f0] rounded-[16px] p-8 h-full">
              <img src={icon} alt="" className={iconClass} />
              <h4 className="font-inter font-bold text-accent text-lg leading-normal">{title}</h4>
              <p className="font-inter text-navy-subtle text-sm leading-normal">{description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Solutions;
