import { Stagger, StaggerItem } from '../../common/motion';

import wellTestingImg from '/projects/well-testing-equipment.png';
import multiEfficiencyImg from '/projects/multi-efficiency-test.png';

const DualTestingCards: React.FC = () => {
  return (
    <section className="bg-surface flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        <StaggerItem hover className="flex flex-col justify-between gap-10 items-start bg-white border border-line rounded-3xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)] pt-12 px-12">
          <div className="flex flex-col gap-6 items-start pb-8 w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-secondary h-1 w-12 shrink-0" />
              <p className="font-light text-secondary text-xl tracking-[1.2px] uppercase">Onshore · OML 56 Delta State</p>
            </div>
            <h4 className="font-light text-accent text-[28px] md:text-[32px] lg:text-4xl leading-[1.5] pt-2">
              Matsogo Field
              <br />
              Extended Well Testing
            </h4>
            <p className="font-light text-navy-subtle text-lg leading-[1.67]">Specialized EWT operations to determine reservoir behavior and commercial viability.</p>
            <div className="h-62 rounded-xl overflow-hidden pt-2 w-full">
              <img src={wellTestingImg} alt="Oil and gas well testing equipment" className="size-full object-cover" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-line pt-13.5 pb-4.5 w-full">
            <p className="font-light text-accent text-[17px] leading-[1.32]">&quot;Achieved optimum flow parameters with unique accuracy.&quot;</p>
          </div>
        </StaggerItem>

        <StaggerItem hover className="flex flex-col justify-between gap-10 items-start bg-accent rounded-3xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] pt-12 px-12">
          <div className="flex flex-col gap-6 items-start pb-8 w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-secondary h-1 w-12 shrink-0" />
              <p className="font-light text-secondary text-xl tracking-[1.2px] uppercase">Onshore · OML 111 Oredo</p>
            </div>
            <h4 className="font-light text-white text-[28px] md:text-[32px] lg:text-4xl leading-[1.5] pt-2">
              Multi-Efficiency
              <br />
              Rate Test (SWT)
            </h4>
            <p className="font-light text-ice-blue text-lg leading-[1.67]">Surface Well Testing operation to optimize field production strategy through rigorous data analysis.</p>
            <div className="h-62 rounded-xl overflow-hidden opacity-60 pt-2 w-full">
              <img src={multiEfficiencyImg} alt="Multi-efficiency rate test site" className="size-full object-cover" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-primary pt-8 pb-8 w-full">
            <p className="font-light text-white text-[17px] leading-[1.32]">Determined optimum flow choke and rate for enhanced recovery.</p>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
};

export default DualTestingCards;
