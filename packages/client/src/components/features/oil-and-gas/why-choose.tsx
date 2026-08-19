import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import valueChainImg from '/oil-and-gas/why-value-chain.jpg';
import engineeringLedImg from '/oil-and-gas/why-engineering-led.jpg';
import lifeCycleImg from '/oil-and-gas/why-life-cycle.jpg';
import fieldProvenImg from '/oil-and-gas/why-field-proven.jpg';

const reasons = [
  { image: valueChainImg, title: 'Integrated Value Chain Coverage' },
  { image: engineeringLedImg, title: 'Engineering-Led Approach' },
  { image: lifeCycleImg, title: 'Full Asset Life-Cycle Support' },
  { image: fieldProvenImg, title: 'Field-Proven Expertise' },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-36">
      <div className="flex flex-col gap-20 items-center max-w-360 w-full">
        <FadeIn>
          <h2 className="font-inter font-semibold text-accent text-4xl leading-normal text-center">Why Choose Eunisell Production Solutions</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {reasons.map(({ image, title }) => (
            <StaggerItem key={title} hover className="group relative h-75 rounded-[16px] overflow-hidden">
              <img src={image} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-end p-10">
                <h3 className="font-inter font-bold text-white text-2xl leading-normal">{title}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default WhyChoose;
