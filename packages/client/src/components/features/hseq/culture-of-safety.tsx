import cultureBg from '/hseq/culture-bg.jpg';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const stats = [
  { value: '0.00', label: 'Lost Time Injury Rate' },
  { value: 'Over 1M', label: 'Safe Man Hours Achieved' },
];

const CultureOfSafety: React.FC = () => {
  return (
    <section className="relative bg-deep-navy overflow-hidden flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <img src={cultureBg} alt="Safety meeting on an offshore platform" className="absolute inset-0 size-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001828] via-[#001828]/0 via-50% to-[#001828]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0, 131, 206, 0.1) 2.5%, rgba(0, 131, 206, 0) 2.5%), linear-gradient(90deg, rgba(0, 131, 206, 0.1) 2.5%, rgba(0, 131, 206, 0) 2.5%)',
        }}
      />

      <FadeIn className="relative flex flex-col gap-6 items-center max-w-256 w-full">
        <h2 className="font-light text-white text-[32px] md:text-[44px] lg:text-[56px] text-center tracking-[-0.11px] leading-[1.5]">
          Building a Culture of Safety and Accountability
        </h2>

        <p className="font-light text-navy-subtle text-lg md:text-xl text-center leading-[1.63] max-w-192">
          Every member of the Eunisell team is empowered with &apos;Stop Work Authority.&apos; We foster an environment where accountability is shared, and safety is the silent
          partner in every successful project milestone.
        </p>

        <Stagger className="flex flex-wrap gap-8 md:gap-12 items-center justify-center pt-4">
          {stats.map(({ value, label }, index) => (
            <StaggerItem key={label} className="flex items-center gap-8 md:gap-12">
              {index > 0 && <div className="bg-white h-20 w-px" />}
              <div className="flex flex-col items-center">
                <p className="font-light text-white text-[42px] leading-[1.5]">{value}</p>
                <p className="font-light text-secondary text-xs tracking-[3px] uppercase">{label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>
    </section>
  );
};

export default CultureOfSafety;
