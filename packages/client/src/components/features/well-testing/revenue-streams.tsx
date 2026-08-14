import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const streamsColumnOne = [
  'SWT & EWT service contracts',
  'Well clean-up & flowback services',
  'Test equipment rental (separators, chokes, burners)',
  'Real-time monitoring & data acquisition',
];

const streamsColumnTwo = [
  'Reservoir/well performance analysis & reporting',
  'Flare & incineration management',
  'Sand detection & monitoring services',
  'Mobilization, standby & demobilization',
];

const RevenueStreams: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-col gap-18 w-full max-w-360 mx-auto">
        <FadeIn className="flex flex-col gap-4 items-start">
          <div className="flex gap-4 items-center">
            <div className="bg-secondary h-0.5 w-12" />
            <p className="font-light text-secondary text-[13px] tracking-[4px] uppercase">Revenue Streams</p>
          </div>
          <h2 className="font-light text-accent text-[28px] md:text-[36px] lg:text-[44px] leading-[1.3]">Revenue &amp; Commercial Model</h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 w-full">
          {[streamsColumnOne, streamsColumnTwo].map((column, colIndex) => (
            <Stagger key={colIndex} className="flex flex-col items-start w-full">
              {column.map((label, index) => {
                const number = colIndex * column.length + index + 1;
                const isLast = index === column.length - 1;
                return (
                  <StaggerItem key={label} className={`flex gap-6 items-start py-7 w-full ${isLast ? '' : 'border-b border-line'}`}>
                    <span className="font-light text-secondary text-[22px] leading-8 w-10 shrink-0">{number}</span>
                    <p className="font-light text-accent text-lg leading-7">{label}</p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueStreams;
