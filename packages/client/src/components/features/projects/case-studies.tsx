import decliningYieldsImg from '/projects/case-declining-yields.png';
import secondaryRecoveryImg from '/projects/case-secondary-recovery.png';

import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-20 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <FadeIn className="flex flex-col gap-4 items-center max-w-200 w-full">
        <p className="font-light text-secondary text-base text-center tracking-[4px] uppercase">Case Studies</p>
        <h3 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.17] text-center">Production Enhancement Solutions</h3>
      </FadeIn>

      <Stagger className="flex flex-col gap-20 items-start w-full">
        <StaggerItem className="flex flex-col lg:flex-row gap-12 items-stretch bg-surface border border-line rounded-3xl overflow-hidden w-full">
          <div className="lg:w-110 shrink-0">
            <img src={decliningYieldsImg} alt="Gas lift production equipment" className="size-full h-75 lg:h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center gap-8 items-start p-8 md:p-12 flex-1">
            <div className="flex flex-col gap-3.75 items-start pt-0.75">
              <span className="bg-accent rounded-full px-3 py-0.625 font-light text-white text-[11px] tracking-[0.55px] uppercase">OML 30</span>
              <h4 className="font-light text-accent text-2xl md:text-[32px] leading-[1.5]">Reversing Declining Yields</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-4 items-start">
                <h5 className="font-light text-accent text-[15px] leading-[1.5]">The Challenge</h5>
                <p className="font-light text-navy-subtle text-sm leading-[1.57]">Significant production drop across multiple low-pressure wells threatened asset viability.</p>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <h5 className="font-light text-accent text-[15px] leading-[1.5]">The Solution</h5>
                <p className="font-light text-navy-subtle text-sm leading-[1.57]">Implementation of Gas Lift systems and production optimization workflows.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-white border-l-4 border-secondary rounded-xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-6 w-full">
              <div className="flex flex-col items-start shrink-0">
                <p className="font-light text-secondary text-[32px] leading-[1.5] tracking-[-0.22px]">15,000</p>
                <p className="font-light text-navy-subtle text-[11px] leading-[1.5] tracking-[1.1px] uppercase">
                  B/Day
                  <br />
                  Reached
                </p>
              </div>
              <div className="bg-line h-10 w-px shrink-0 hidden sm:block" />
              <p className="font-light text-accent text-sm leading-[1.5]">Increased production from 3,000 to 15,000 BPD and significantly extended field life.</p>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem className="flex flex-col lg:flex-row-reverse gap-12 items-stretch bg-deep-navy border border-primary rounded-3xl overflow-hidden w-full">
          <div className="lg:w-110 shrink-0">
            <img src={secondaryRecoveryImg} alt="Triplex pump maintenance team" className="size-full h-75 lg:h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center gap-8 items-start p-8 md:p-12 flex-1">
            <div className="flex flex-col gap-3.75 items-start pt-0.75">
              <span className="bg-secondary rounded-full px-3 py-0.625 font-light text-white text-[11px] tracking-[0.55px] uppercase">OML 56 Kwale</span>
              <h4 className="font-light text-white text-2xl md:text-[32px] leading-[1.5]">Secondary Recovery Excellence</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-4 items-start">
                <h5 className="font-light text-white text-[15px] leading-[1.5]">The Challenge</h5>
                <p className="font-light text-navy-subtle text-sm leading-[1.57]">Combating reservoir depletion and declining pressure in mature zones.</p>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <h5 className="font-light text-white text-[15px] leading-[1.5]">The Solution</h5>
                <p className="font-light text-navy-subtle text-sm leading-[1.57]">Mobilization of trapped oil through advanced secondary recovery and hydrocarbon redirection.</p>
              </div>
            </div>

            <div className="flex flex-col items-start bg-accent border-l-4 border-secondary rounded-xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)] pt-5.75 pb-6 px-6 w-full">
              <p className="font-light text-navy-muted text-[15px] leading-[1.5]">
                &quot;Successful recovery of depleted zones and overall production improvement through technical innovation.&quot;
              </p>
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
};

export default CaseStudies;
