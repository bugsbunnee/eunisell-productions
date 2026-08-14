import type { ReactNode } from 'react';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '20+', label: 'Years Experience' },
];

interface OverviewProps {
  heading: ReactNode;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

const Overview: React.FC<OverviewProps> = ({ heading, paragraphs, image, imageAlt }) => {
  return (
    <section className="bg-white flex flex-col lg:flex-row gap-16 lg:gap-25 items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <FadeIn className="flex flex-1 flex-col gap-8 items-start w-full">
        <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.21]">{heading}</h2>

        <div className="flex flex-col gap-6 items-start">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.9]">
              {paragraph}
            </p>
          ))}
        </div>

        <Stagger className="flex gap-12 items-start pt-8">
          {stats.map(({ value, label }) => (
            <StaggerItem key={label} className="flex flex-col items-start">
              <p className="font-light text-secondary text-4xl leading-[1.5]">{value}</p>
              <p className="font-light text-navy-subtle text-sm leading-[1.5]">{label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>

      <FadeIn delay={0.15} className="flex-1 w-full">
        <div className="h-100 md:h-125 lg:h-150 rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img src={image} alt={imageAlt} className="size-full object-cover" />
        </div>
      </FadeIn>
    </section>
  );
};

export default Overview;
