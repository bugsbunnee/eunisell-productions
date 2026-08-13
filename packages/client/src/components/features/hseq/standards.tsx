import certificateImg from '/hseq/iso-certificate.png';
import isoBadge from '../../../assets/icons/hseq/iso-badge-check.svg';

const stats = [
  { value: '100%', label: 'Compliance Record' },
  { value: 'Zero', label: 'LTI Incidents Goal' },
];

const Standards: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full max-w-360">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex gap-4 items-center">
            <div className="bg-secondary h-0.5 w-12" />
            <p className="font-light text-secondary text-[17px]">OUR PHILOSOPHY</p>
          </div>

          <h2 className="font-light text-accent text-[28px] md:text-[36px] lg:text-[44px] leading-[1.4]">Uncompromising Standards in Every Environment</h2>

          <p className="font-light text-navy-subtle text-lg leading-[1.9]">
            At Eunisell, HSEQ is not just a policy; it is our culture. We believe that all workplace injuries and environmental incidents are preventable. Our multidisciplinary
            team is dedicated to maintaining the highest safety standards across all operations, from deepwater platforms to swamp facilities.
          </p>

          <div className="flex flex-wrap gap-8 items-start pt-2">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-2 items-start">
                <p className="font-light text-secondary text-[32px] leading-12">{value}</p>
                <p className="font-light text-navy-subtle text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden h-156">
            <img src={certificateImg} alt="ISO 9001:2015 certificate" className="size-full object-contain" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            <div className="absolute inset-0 border border-white/30 rounded-2xl" />
          </div>

          <div className="absolute -bottom-6.5 left-px bg-white border-l-4 border-secondary rounded-xl drop-shadow-[0px_16px_20px_rgba(0,0,0,0.15)] flex gap-6 items-center px-8 py-8">
            <img src={isoBadge} alt="" className="size-10" />
            <div className="flex flex-col items-start">
              <p className="font-light text-accent text-base tracking-[-0.14px]">ISO 9001:2015</p>
              <p className="font-light text-navy-subtle text-sm">Certified Quality Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;
