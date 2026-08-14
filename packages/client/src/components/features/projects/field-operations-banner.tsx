import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import bannerImg from '/projects/field-operations-banner.png';

const stats = [
  { value: '5,000', label: 'B/Day Capacity' },
  { value: 'Akwa Ibom', label: 'Location Hub' },
];

const FieldOperationsBanner: React.FC = () => {
  return (
    <section className="relative flex items-center h-125 lg:h-200 overflow-hidden">
      <img src={bannerImg} alt="Field operations mobilization site" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex flex-col items-start px-9 md:px-16 lg:px-36 w-full">
        <FadeIn className="backdrop-blur-md bg-deep-navy/90 border-l-8 border-secondary rounded-2xl flex flex-col gap-3.875 items-start max-w-150 p-8 md:p-12">
          <p className="font-light text-secondary text-xl tracking-[4px] uppercase">Field Operations</p>
          <h3 className="font-light text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.17]">
            EWT/EPF Package
            <br />
            Mobilization
          </h3>

          <Stagger className="flex flex-wrap gap-8 items-start pt-6.25">
            {stats.map(({ value, label }) => (
              <StaggerItem key={label} className="flex flex-col gap-1 items-start min-w-47.5">
                <p className="font-light text-secondary text-3xl leading-[1.5]">{value}</p>
                <p className="font-light text-navy-muted text-xs tracking-[0.6px] uppercase">{label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>
      </div>
    </section>
  );
};

export default FieldOperationsBanner;
