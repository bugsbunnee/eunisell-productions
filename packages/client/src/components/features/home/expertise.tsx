import expertisePlant from '/home/expertise-plant.jpg';
import expertiseRigYard from '/home/expertise-rig-yard.jpg';
import expertisePipes from '/home/expertise-pipes.jpg';
import excellenceGearIcon from '../../../assets/icons/home/excellence-gear.svg';
import engineeringExpertiseSmallIcon from '../../../assets/icons/home/engineering-expertise-small.svg';
import productionOptimisationSmallIcon from '../../../assets/icons/home/production-optimisation-small.svg';
import projectDeliverySmallIcon from '../../../assets/icons/home/project-delivery-small.svg';
import safeOperationsSmallIcon from '../../../assets/icons/home/safe-operations-small.svg';

const excellenceStats = [
  { icon: engineeringExpertiseSmallIcon, title: ['Engineering', 'Expertise'], description: ['Precision-driven design and', 'technical strategy.'] },
  { icon: productionOptimisationSmallIcon, title: ['Production', 'Optimisation'], description: ['Maximizing yield through', 'advanced tech.'] },
  { icon: projectDeliverySmallIcon, title: ['Project Delivery'], description: ['On-time execution of complex', 'facilities.'] },
  { icon: safeOperationsSmallIcon, title: ['Safe Operations'], description: ['Zero-compromise safety', 'standards.'] },
];

const Expertise: React.FC = () => {
  return (
    <section className="relative bg-ice-blue grid grid-cols-1 lg:grid-cols-2 items-center py-16 lg:py-24 lg:min-h-[1117px]">
      <div className="flex flex-col items-start px-9 md:px-16 lg:px-30 relative z-10">
        <div className="flex gap-4 items-center pb-8">
          <div className="bg-secondary h-0.5 w-12" />
          <p className="font-light text-secondary text-lg uppercase">Our Expertise</p>
        </div>

        <h2 className="font-light text-accent text-[42px] md:text-[60px] lg:text-[77px] tracking-[-2.1px] leading-[1.1] lg:leading-[88.2px]">
          Production <span className="text-primary-light">Solutions</span>
        </h2>

        <div className="flex flex-col items-start max-w-160 pb-12 gap-6">
          <p className="font-light text-navy-subtle text-[17px] leading-9">
            Oil and gas production requires more than equipment—it demands engineering expertise, operational excellence, and reliable execution.
          </p>
          <p className="font-light text-navy-subtle text-[17px] leading-9">
            Eunisell provides integrated production solutions that support operators throughout the lifecycle of their production assets. Our multidisciplinary team combines
            engineering, field services, project management, and specialized technologies to improve production performance, extend equipment life, and ensure safe, uninterrupted
            operations.
          </p>
          <p className="font-light text-navy-subtle text-[17px] leading-9">
            Whether supporting greenfield developments, brownfield upgrades, routine maintenance, or production enhancement projects, we deliver practical solutions that align with
            our clients&apos; operational objectives while maintaining the highest standards of safety, quality, and environmental stewardship.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          <a href="#" className="bg-secondary rounded-full px-8 py-5 font-light text-white text-[15px] leading-none whitespace-nowrap">
            Speak with Our Experts
          </a>
          <a href="#" className="border border-accent rounded-full px-2.5 py-3.75 font-light text-accent text-lg tracking-[0.07px] text-center w-72.5">
            Speak With Our Engineers
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:block lg:relative lg:h-full mt-16 lg:mt-0">
        <div className="relative h-125">
          <div className="absolute inset-[10%_10%_23%_20.5%] bg-white rounded-sm shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            <img src={expertisePlant} alt="Industrial chemical processing plant" className="size-full object-cover" />
          </div>

          <div className="absolute inset-[15%_58%_56.5%_5%] bg-white border-8 border-white rounded-sm shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            <img src={expertiseRigYard} alt="Offshore production yard" className="size-full object-cover" />
          </div>

          <div className="absolute inset-[42%_40%_15%_16%] bg-white border-4 lg:border-8 border-white rounded-sm shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            <img src={expertisePipes} alt="Process piping" className="size-full object-cover" />
          </div>
        </div>

        <div className="relative backdrop-blur-md bg-white/95 border border-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-3xl lg:rounded-[50px] flex flex-col gap-8 px-6 md:px-10 py-5 mt-8 lg:mt-0 lg:absolute lg:inset-[63.3%_10%_-3.8%_34.5%]">
          <div className="flex gap-3 items-center">
            <img src={excellenceGearIcon} alt="" className="size-6" />
            <p className="font-light text-accent text-xl md:text-2xl tracking-[-0.07px] leading-8">Integrated Production Excellence</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {excellenceStats.map(({ icon, title, description }) => (
              <div key={title.join(' ')} className="flex flex-col gap-2 items-start">
                <img src={icon} alt="" className="size-5 mb-1" />
                <p className="font-light text-accent text-sm tracking-[0.7px] uppercase leading-5">
                  {title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="font-light text-navy-subtle text-xs leading-[19.5px]">
                  {description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
