import overviewImg from '/services/well-testing/overview.png';
import isoBadge from '../../../assets/icons/well-testing/iso-badge.svg';

const stats = [
  { value: '100%', label: 'Compliance Record' },
  { value: 'Zero', label: 'LTI Incidents Goal' },
  { value: '15+', label: 'Years Experience' },
];

const Overview: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-18 items-center w-full max-w-360">
        <div className="flex flex-col gap-7 items-start">
          <div className="flex gap-4 items-center">
            <div className="bg-secondary h-0.5 w-12" />
            <p className="font-light text-secondary text-[17px] tracking-[4px] uppercase">Well Testing</p>
          </div>

          <h2 className="font-light text-accent text-[28px] md:text-[36px] lg:text-[44px] leading-[1.3]">
            Surface &amp; Extended Well Testing (SWT, EWT) and reservoir surveillance
          </h2>

          <div className="bg-secondary/20 h-0.5 w-full rounded-full" />

          <p className="font-light text-navy-subtle text-lg leading-[1.9]">
            Eunisell Production Solutions delivers comprehensive well testing services across all environments — deepwater, swamp, and onshore. Our integrated approach combines
            precision surface test equipment with advanced data acquisition systems, enabling operators to make confident investment decisions grounded in accurate reservoir
            characterisation and reliable production data.
          </p>

          <p className="font-light text-navy-subtle text-lg leading-[1.9]">
            From first-oil clean-up to extended production testing, our multidisciplinary teams ensure safe, efficient operations with full regulatory compliance and real-time
            reporting capabilities.
          </p>

          <div className="flex flex-wrap gap-12 items-start pt-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1.5 items-start">
                <p className="font-light text-secondary text-4xl leading-11">{value}</p>
                <p className="font-light text-navy-subtle text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden h-130">
            <img src={overviewImg} alt="Well testing operations overview" className="size-full object-cover" />
          </div>

          <div className="absolute -bottom-6.5 left-px bg-white rounded-xl drop-shadow-[0px_16px_20px_rgba(0,0,0,0.15)] flex gap-5 items-center px-7 py-5">
            <img src={isoBadge} alt="" className="size-9" />
            <div className="flex flex-col items-start">
              <p className="font-light text-accent text-[15px] leading-5.5">ISO 9001:2015</p>
              <p className="font-light text-navy-subtle text-xs leading-4.5">Certified Quality Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
