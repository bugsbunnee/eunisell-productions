import waterIcon from '../../../assets/icons/about/valuechain-water.svg';
import enhancementIcon from '../../../assets/icons/about/valuechain-enhancement.svg';
import equipmentIcon from '../../../assets/icons/about/valuechain-equipment.svg';
import engineeringIcon from '../../../assets/icons/about/valuechain-engineering.svg';

const steps = [
  { step: 'STEP 01', title: 'Well Testing', description: 'Data acquisition and reservoir characterization for informed production strategy.' },
  { step: 'STEP 02', title: 'Facility Development', description: 'Fast-track delivery of Early Production Facilities (EPF) and Central Processing Facilities (CPF).' },
  { step: 'STEP 03', title: 'Operations & Maintenance', description: 'Turnkey O&M solutions focused on uptime, safety, and operational efficiency.' },
  { step: 'STEP 04', title: 'Midstream Support', description: 'Optimizing flow assurance and processing integrity for transportation systems.' },
];

const crossCutting = [
  { icon: waterIcon, label: 'Water Solutions' },
  { icon: enhancementIcon, label: 'Production Enhancement' },
  { icon: equipmentIcon, label: 'Equipment Solutions' },
  { icon: engineeringIcon, label: 'Engineering Services' },
];

const ValueChain: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-16 items-start px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <div className="flex flex-col gap-4 items-center w-full">
        <p className="font-light text-secondary text-sm text-center tracking-[4px] uppercase">The Value Chain</p>
        <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.5] text-center">Integrated Operational Lifecycle</h2>
      </div>

      <div className="flex flex-col gap-8 items-start w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {steps.map(({ step, title, description }) => (
            <div key={step} className="flex flex-col gap-2 items-start bg-ice-blue border-t-4 border-secondary rounded-xl p-8">
              <p className="font-light text-secondary text-sm">{step}</p>
              <h4 className="font-light text-accent text-xl leading-[1.5] pt-2">{title}</h4>
              <p className="font-light text-navy-subtle text-sm leading-[1.625]">{description}</p>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col items-start pt-12 w-full">
          <div className="absolute top-0 left-0 right-0 border-t border-dashed border-line" />
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white px-6">
            <p className="font-light text-navy-subtle text-xs tracking-[1.2px] uppercase whitespace-nowrap">Cross-Cutting Engineering Services</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {crossCutting.map(({ icon, label }) => (
              <div key={label} className="flex gap-4 items-center">
                <div className="flex items-center justify-center bg-line rounded shrink-0 size-10">
                  <img src={icon} alt="" className="size-6" />
                </div>
                <p className="font-light text-accent text-base whitespace-nowrap">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
