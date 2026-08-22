import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const steps = [
  { number: '01', title: 'Well Evaluation & Testing' },
  { number: '02', title: 'Field & Facility Development' },
  { number: '03', title: 'Production Operations' },
  { number: '04', title: 'Maintenance & Asset Integrity' },
  { number: '05', title: 'Production Enhancement' },
  { number: '06', title: 'Optimization & Support' },
];

const Lifecycle: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col gap-16 lg:gap-20 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-36">
      <FadeIn>
        <h2 className="font-inter font-semibold text-accent text-4xl leading-normal text-center tracking-[-0.07px]">Supporting the Production Lifecycle</h2>
      </FadeIn>

      <div className="relative w-full max-w-360">
        <div className="absolute hidden lg:block bg-secondary/30 h-px left-[5%] right-[5%] top-10" />

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
          {steps.map(({ number, title }, index) => (
            <StaggerItem key={number} className="flex flex-col items-center max-w-45 z-50 mx-auto">
              <div
                className={`flex items-center justify-center rounded-full shadow-lg size-20 shrink-0 mb-6 ${index === 2 ? 'bg-secondary' : 'bg-white border-2 border-secondary'}`}
              >
                <span className={`font-inter font-bold text-2xl leading-9 ${index === 2 ? 'text-white' : 'text-secondary'}`}>{number}</span>
              </div>
              <h3 className="font-inter font-bold text-lg leading-normal text-accent text-center">{title}</h3>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Lifecycle;
