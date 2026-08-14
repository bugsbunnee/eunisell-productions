import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const steps = [
  { number: '01', title: 'Discover', description: 'Understanding operational challenges and project objectives.' },
  { number: '02', title: 'Design', description: 'Developing practical engineering solutions.' },
  { number: '03', title: 'Execute', description: 'Safe, efficient project implementation.' },
  { number: '04', title: 'Commission', description: 'Testing, verification, and successful startup.' },
  { number: '05', title: 'Support', description: 'Long-term operations, maintenance, and optimization.' },
];

const DeliveryApproach: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-16 lg:gap-24 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <FadeIn>
        <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] leading-[1.5] text-center">Our Project Delivery Approach</h2>
      </FadeIn>

      <div className="relative w-full">
        <div className="absolute hidden lg:block left-0 right-0 top-8 border-t-2 border-dashed border-secondary" />

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
          {steps.map(({ number, title, description }) => (
            <StaggerItem key={number} className="flex flex-col gap-6 items-start">
              <div className="flex items-center justify-center bg-secondary rounded-full shadow-[0_0_0_8px_white] size-16">
                <span className="font-light text-white text-xl">{number}</span>
              </div>
              <div className="flex flex-col gap-1.75 items-start">
                <h4 className="font-light text-accent text-lg leading-[1.5]">{title}</h4>
                <p className="font-light text-navy-subtle text-sm leading-[1.5]">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default DeliveryApproach;
