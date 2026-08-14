import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '20+', label: 'Years Experience' },
];

const Intro: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <FadeIn className="grid grid-cols-1 lg:grid-cols-[601fr_804fr] gap-8.75 max-w-360 w-full">
        <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1]">Engineering Expertise Built Around Operational Excellence</h2>

        <div className="flex flex-col gap-8 lg:gap-12 items-start pt-4 lg:pt-0">
          <p className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.9]">
            Our multidisciplinary engineering teams combine technical expertise, field experience, project delivery capability, and global technology partnerships to support oil
            and gas operators from concept through production, maintenance, optimization, and long-term asset management.
          </p>

          <Stagger className="flex gap-8 items-start justify-center w-full">
            {stats.map(({ value, label }) => (
              <StaggerItem key={label} className="flex flex-1 flex-col gap-2 items-start">
                <p className="font-light text-secondary text-[32px] leading-[1.5]">{value}</p>
                <p className="font-light text-navy-subtle text-sm leading-[1.5]">{label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </FadeIn>
    </section>
  );
};

export default Intro;
