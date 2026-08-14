import partnerImg from '/services/partner-engineer.png';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const differentiators = [
  { number: '01', title: 'Engineering Excellence', description: 'Highly skilled multidisciplinary engineering teams utilizing advanced technologies.' },
  { number: '02', title: 'Proven Delivery', description: 'Over two decades of consistent delivery across complex production environments.' },
  { number: '03', title: 'Field Expertise', description: 'Experienced field personnel with deep knowledge of local and international operations.' },
  { number: '04', title: 'Safety Leadership', description: 'Uncompromising dedication to zero-incident operations across all facilities.' },
  { number: '05', title: 'Quality Assurance', description: 'ISO-certified quality management systems ensuring consistent delivery standards.' },
  { number: '06', title: 'Global Partnerships', description: 'Collaborations with global technology leaders to deliver best-in-class solutions.' },
  { number: '07', title: 'Operational Reliability', description: 'Solutions designed to maximize ROI without compromising quality or safety.' },
  { number: '08', title: 'Production Performance', description: 'Proven track record of improving output and asset longevity for clients.' },
];

const Cta: React.FC = () => {
  return (
    <section className="bg-accent flex flex-col gap-12 lg:gap-20 items-start overflow-hidden py-16 lg:py-35 w-full">
      <FadeIn className="flex flex-col gap-8 items-start px-9 md:px-16 lg:px-36 w-full">
        <div className="flex gap-4 items-center">
          <div className="bg-secondary h-0.5 w-12" />
          <p className="font-light text-secondary text-sm leading-[1.5]">Why Eunisell</p>
        </div>

        <h2 className="font-light text-white text-[32px] md:text-[44px] lg:text-[56px] leading-[1.25] tracking-[-1.5px] max-w-200">
          Trusted Production Partner for Major Operators
        </h2>
      </FadeIn>

      <div className="flex flex-col lg:flex-row items-start w-full">
        <FadeIn className="flex flex-1 items-start px-9 md:px-16 lg:pl-36 lg:pr-12 w-full">
          <img
            src={partnerImg}
            alt="Petroleum engineer explaining technical diagrams to a team on an oil platform"
            className="h-100 lg:h-200 rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full object-cover"
          />
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16 flex-1 px-9 md:px-16 lg:pr-36 lg:pl-0 pt-8 lg:pt-0 w-full">
          {differentiators.map(({ number, title, description }) => (
            <StaggerItem key={number} className="flex flex-col items-start">
              <p className="font-light text-secondary text-xs tracking-[1.2px]">{number}</p>
              <h4 className="font-light text-white text-xl leading-[1.5] pt-2">{title}</h4>
              <p className="font-light text-navy-subtle text-sm leading-[1.5] pt-2">{description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Cta;
