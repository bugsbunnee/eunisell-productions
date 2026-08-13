import overviewImg from '/about/overview-engineers.png';
import badgeDecor from '../../../assets/icons/about/overview-badge.svg';

const paragraphs = [
  'Oil and gas production requires more than equipment—it demands engineering expertise, operational excellence, and reliable execution. Eunisell provides integrated production solutions that support operators throughout the lifecycle of their production assets.',
  'Our multidisciplinary team combines engineering, field services, project management, and specialized technologies to improve production performance, extend equipment life, and ensure safe, uninterrupted operations.',
  "Whether supporting greenfield developments, brownfield upgrades, routine maintenance, or production enhancement projects, we deliver practical solutions that align with our clients' operational objectives while maintaining the highest standards of safety, quality, and environmental stewardship.",
];

const Overview: React.FC = () => {
  return (
    <section className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-25 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <div className="flex flex-col gap-6 items-start w-full lg:max-w-148">
        <p className="font-light text-secondary text-sm tracking-[4px] uppercase">Overview</p>

        <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15]">
          Production
          <br />
          Solutions
        </h2>

        <div className="flex flex-col gap-6 items-start">
          {paragraphs.map((text) => (
            <p key={text} className="font-light text-navy-subtle text-lg leading-[1.7]">
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="relative flex-1 w-full lg:max-w-181">
        <div className="relative h-100 md:h-125 lg:h-150 rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img src={overviewImg} alt="Petroleum engineers on a production facility" className="absolute inset-0 size-full object-cover" />
        </div>

        <div className="hidden md:flex absolute -bottom-8 -left-8 items-center justify-center bg-secondary rounded-xl p-8 size-48 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <img src={badgeDecor} alt="" className="size-full" />
        </div>
      </div>
    </section>
  );
};

export default Overview;
