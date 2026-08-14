import confidenceImg from '/hseq/operational-confidence.png';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';
import settingsIcon from '../../../assets/icons/hseq/oc-settings.svg';
import reliableDeliveryIcon from '../../../assets/icons/hseq/oc-reliable-delivery.svg';

const items = [
  { icon: settingsIcon, title: 'International Best Practices', description: 'Adopting API, ASME, and ISO standards globally.' },
  { icon: settingsIcon, title: 'Experienced Engineering Teams', description: 'Decades of technical leadership in complex fields.' },
  { icon: reliableDeliveryIcon, title: 'Reliable Project Delivery', description: 'Consistency in timeline and quality outcomes.' },
];

const OperationalConfidence: React.FC = () => {
  return (
    <section className="bg-ice-blue grid grid-cols-1 lg:grid-cols-2 items-stretch">
      <FadeIn className="h-100 lg:h-auto">
        <img src={confidenceImg} alt="Engineer reviewing data on a tablet" className="size-full object-cover" />
      </FadeIn>

      <div className="flex flex-col gap-12 items-start px-9 md:px-16 lg:px-20 py-16 lg:py-24">
        <FadeIn className="flex flex-col gap-6 items-start">
          <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[52px] leading-[1.2]">Delivering Operational Confidence</h2>
          <p className="font-light text-navy-subtle text-lg leading-[1.78]">
            Our engineering rigor is the backbone of our HSEQ success. We integrate technical excellence with safety-critical thinking to deliver projects that are robust,
            reliable, and inherently safe.
          </p>
        </FadeIn>

        <Stagger className="flex flex-col gap-6 items-start w-full">
          {items.map(({ icon, title, description }) => (
            <StaggerItem key={title} className="bg-white border-l-4 border-secondary rounded-2xl drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-6 items-start p-6 w-full">
              <div className="bg-ice-blue rounded-lg flex items-center justify-center p-3 shrink-0">
                <img src={icon} alt="" className="size-6" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <h4 className="font-light text-accent text-base">{title}</h4>
                <p className="font-light text-navy-subtle text-sm">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default OperationalConfidence;
