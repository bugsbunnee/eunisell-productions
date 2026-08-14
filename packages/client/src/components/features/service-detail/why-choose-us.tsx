import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

export interface WhyChooseUsPoint {
  number: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  heading: string;
  points: WhyChooseUsPoint[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ heading, points }) => {
  return (
    <section className="bg-ice-blue flex flex-col gap-16 lg:gap-20 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <FadeIn className="flex flex-col gap-4 items-center">
        <div className="flex gap-4 items-center justify-center">
          <div className="bg-secondary h-0.5 w-12" />
          <p className="font-light text-secondary text-sm">Why Choose Us</p>
          <div className="bg-secondary h-0.5 w-12" />
        </div>
        <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] leading-[1.5] text-center">{heading}</h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {points.map(({ number, title, description }) => (
          <StaggerItem key={number} hover className="flex flex-col gap-6 items-start bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-2xl p-10 h-full">
            <p className="font-light text-secondary text-xs tracking-[1.2px]">{number}</p>
            <h4 className="font-light text-accent text-xl leading-[1.5]">{title}</h4>
            <p className="font-light text-navy-subtle text-sm leading-[1.5]">{description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default WhyChooseUs;
