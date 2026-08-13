import zeroHarmIcon from '../../../assets/icons/home/hseq-zero-harm.svg';
import complianceIcon from '../../../assets/icons/home/hseq-compliance.svg';
import riskIcon from '../../../assets/icons/home/hseq-risk.svg';
import qualityIcon from '../../../assets/icons/home/hseq-quality.svg';
import environmentIcon from '../../../assets/icons/home/hseq-environment.svg';
import improvementIcon from '../../../assets/icons/home/hseq-improvement.svg';

const pillars = [
  { icon: zeroHarmIcon, title: 'Zero Harm Philosophy', description: 'Our operations are guided by a zero harm commitment that places people first in every decision we make.' },
  {
    icon: complianceIcon,
    title: 'Regulatory Compliance',
    description: 'Full compliance with national and international regulatory frameworks across all jurisdictions and geographies.',
  },
  { icon: riskIcon, title: 'Risk-Based Planning', description: 'Systematic hazard identification and risk mitigation processes integrated into every project phase.' },
  {
    icon: qualityIcon,
    title: 'Quality Management Systems',
    description: 'ISO-certified quality management systems ensuring consistent delivery standards from engineering through handover.',
  },
  {
    icon: environmentIcon,
    title: 'Environmental Stewardship',
    description: 'Minimizing environmental impact through responsible planning, operations monitoring, and comprehensive reporting.',
  },
  {
    icon: improvementIcon,
    title: 'Continuous Improvement',
    description: 'Ongoing performance review and lessons-learned processes that drive operational excellence across all activities.',
  },
];

const Hseq: React.FC = () => {
  return (
    <section className="relative bg-accent flex flex-col items-center px-9 md:px-16 lg:px-36 py-24 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1.25%, rgba(255, 255, 255, 0) 1.25%), linear-gradient(180deg, rgba(255, 255, 255, 0.03) 1.25%, rgba(255, 255, 255, 0) 1.25%)',
        }}
      />

      <div className="relative flex flex-col gap-20 items-start max-w-360 w-full">
        <div className="flex flex-col gap-4 items-center w-full">
          <p className="font-light text-secondary text-lg text-center tracking-[3.85px]">HSEQ</p>
          <h2 className="font-light text-white text-[32px] md:text-[44px] lg:text-[56px] text-center leading-[1.1]">Safety Drives Every Operation</h2>
          <p className="font-light text-navy-subtle text-lg text-center max-w-180 leading-[1.8]">
            Health, Safety, Environment, and Quality are embedded in every project we undertake. Our teams work in accordance with internationally recognized industry standards,
            implementing rigorous risk management, quality assurance, and environmental protection practices to safeguard our people, our clients, and the communities in which we
            operate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {pillars.map(({ icon, title, description }) => (
            <div key={title} className="bg-white border border-secondary rounded-2xl flex flex-col gap-2.75 items-start p-10">
              <div className="bg-secondary rounded-full flex items-center justify-center shrink-0 size-15">
                <img src={icon} alt="" className="size-7" />
              </div>
              <h3 className="font-light text-accent text-lg leading-[27px] pt-3.25">{title}</h3>
              <p className="font-light text-navy-subtle text-sm leading-[24.5px]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hseq;
