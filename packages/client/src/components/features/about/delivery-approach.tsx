import discoverIcon from '../../../assets/icons/about/process-discover-mask-img.svg';
import executeIcon from '../../../assets/icons/about/process-execute.svg';
import commissionIcon from '../../../assets/icons/about/process-commission.svg';
import supportIcon from '../../../assets/icons/about/process-support.svg';

const steps = [
  { number: '01', icon: discoverIcon, title: 'Discover', description: 'Understanding operational challenges and project objectives.' },
  { number: '02', icon: discoverIcon, title: 'Design', description: 'Developing practical engineering solutions.' },
  { number: '03', icon: executeIcon, title: 'Execute', description: 'Safe, efficient project implementation.' },
  { number: '04', icon: commissionIcon, title: 'Commission', description: 'Testing, verification, and successful startup.' },
  { number: '05', icon: supportIcon, title: 'Support', description: 'Long-term operations and optimization.' },
];

const DeliveryApproach: React.FC = () => {
  return (
    <section className="bg-surface flex flex-col gap-16 lg:gap-20 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <div className="flex flex-col gap-4 items-center">
        <p className="font-light text-secondary text-sm text-center tracking-[4px] uppercase">Execution Excellence</p>
        <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.5] text-center">Our Project Delivery Approach</h2>
      </div>

      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-300 w-full">
        <div className="absolute hidden lg:block left-0 right-0 top-8 h-px bg-line" />

        {steps.map(({ number, icon, title, description }) => (
          <div key={number} className="relative flex flex-col items-center gap-4 text-center">
            <div className="relative flex items-center justify-center bg-white border border-line rounded-2xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)] size-32">
              <div className="flex items-center justify-center bg-ice-blue rounded-xl size-16">
                <img src={icon} alt="" className="size-8" />
              </div>
              <div className="absolute -top-3 -right-3 flex items-center justify-center bg-secondary border-2 border-white rounded-full size-8">
                <span className="font-light text-white text-xs">{number}</span>
              </div>
            </div>

            <h4 className="font-light text-accent text-xl leading-[1.5]">{title}</h4>
            <p className="font-light text-navy-subtle text-sm leading-[1.43] max-w-45">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryApproach;
