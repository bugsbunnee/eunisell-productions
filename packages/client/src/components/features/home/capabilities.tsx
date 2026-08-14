import { useNavigate } from 'react-router-dom';
import engineeringIcon from '../../../assets/icons/home/capability-engineering.svg';
import productionIcon from '../../../assets/icons/home/capability-production.svg';
import wellServicesIcon from '../../../assets/icons/home/capability-well-services.svg';
import facilityIcon from '../../../assets/icons/home/capability-facility.svg';
import equipmentIcon from '../../../assets/icons/home/capability-equipment.svg';
import integrityIcon from '../../../assets/icons/home/capability-integrity.svg';
import waterSandIcon from '../../../assets/icons/home/capability-water-sand.svg';
import { paths } from '../../../lib/data';

const capabilities = [
  { icon: engineeringIcon, title: 'Engineering & Project Delivery', description: ['Full project lifecycle management', 'from concept through completion.'] },
  { icon: productionIcon, title: 'Production Optimization', description: ['Targeted interventions to improve', 'rates and reduce deferments.'] },
  { icon: wellServicesIcon, title: 'Well Services', description: ['Comprehensive well intervention and', 'maintenance solutions.'] },
  { icon: facilityIcon, title: 'Facility Operations', description: ['Safe, efficient daily operation of', 'production facilities.'] },
  { icon: equipmentIcon, title: 'Equipment Supply & Support', description: ['Procurement and supply of critical', 'production equipment.'] },
  { icon: integrityIcon, title: 'Asset Integrity Management', description: ['Inspection and maintenance to', 'ensure asset longevity.'] },
  { icon: engineeringIcon, title: 'Maintenance Services', description: ['Routine and specialized maintenance', 'of production facilities.'] },
  { icon: waterSandIcon, title: 'Water & Sand Management', description: ['Solutions for produced water and', 'sand handling.'] },
];

const Capabilities: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-24 lg:py-35">
      <div className="flex flex-col gap-20 items-start max-w-360 w-full">
        <div className="flex flex-col gap-5 items-center w-full">
          <p className="font-light text-secondary text-lg text-center">OUR CAPABILITIES</p>
          <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] text-center leading-[1.1] lg:leading-[57.2px] max-w-190">
            Comprehensive Production Support Across the Asset Lifecycle
          </h2>
          <p className="font-light text-accent text-[15px] text-center max-w-124">Our capabilities cover every critical aspect of oil and gas production operations, including:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {capabilities.map(({ icon, title, description }) => (
            <div key={title} className="bg-white border border-line rounded-xl flex flex-col gap-2 items-start p-9">
              <div className="bg-ice-blue rounded-xl flex items-center justify-center shrink-0 size-13">
                <img src={icon} alt="" className="size-6" />
              </div>

              <h3 className="font-light text-accent text-[17px] leading-[25.5px] pt-3.75">{title}</h3>

              <p className="font-light text-navy-subtle text-sm leading-[23.1px]">
                {description.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <button type="button" onClick={() => navigate(paths.services)} className="font-light text-secondary text-[13px] leading-[19.5px] pt-4">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
