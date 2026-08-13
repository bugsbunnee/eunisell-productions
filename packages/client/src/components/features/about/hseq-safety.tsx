import safetyImg from '/about/hseq-safety.png';
import zeroHarmIcon from '../../../assets/icons/about/hseq-zero-harm.svg';
import isoIcon from '../../../assets/icons/about/hseq-iso.svg';

const badges = [
  { icon: zeroHarmIcon, label: 'Zero Harm Philosophy' },
  { icon: isoIcon, label: 'ISO 9001 Certified' },
];

const HseqSafety: React.FC = () => {
  return (
    <section className="bg-accent flex flex-col lg:flex-row items-center">
      <div className="w-full lg:flex-1 h-75 lg:h-175">
        <img src={safetyImg} alt="Worker holding a safety railing on an oil platform" className="size-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-4 items-start px-9 md:px-16 lg:px-25 py-16 lg:py-0 w-full">
        <p className="font-light text-secondary text-sm tracking-[4px] uppercase">HSEQ Standards</p>

        <h2 className="font-light text-white text-[32px] md:text-[42px] lg:text-[56px] leading-[1.1]">
          Safety Drives
          <br />
          Every Operation
        </h2>

        <p className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.625] pt-4">
          Health, Safety, Environment, and Quality are embedded in every project we undertake. Our teams work in accordance with internationally recognized industry standards,
          implementing rigorous risk management to safeguard our people, our clients, and the communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-8">
          {badges.map(({ icon, label }) => (
            <div key={label} className="flex gap-4 items-center">
              <div className="flex items-center justify-center bg-secondary rounded-full size-12 shrink-0">
                <img src={icon} alt="" className="size-6" />
              </div>
              <p className="font-light text-white text-base">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HseqSafety;
