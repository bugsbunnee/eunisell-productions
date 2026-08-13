import zeroHarm from '../../../assets/icons/hseq/pillar-zero-harm.svg';
import regulatoryCompliance from '../../../assets/icons/hseq/pillar-regulatory-compliance.svg';
import riskPlanning from '../../../assets/icons/hseq/pillar-risk-planning.svg';
import qualityManagement from '../../../assets/icons/hseq/pillar-quality-management.svg';
import environmentalStewardship from '../../../assets/icons/hseq/pillar-environmental-stewardship.svg';
import continuousImprovement from '../../../assets/icons/hseq/pillar-continuous-improvement.svg';

const pillars = [
  { icon: zeroHarm, title: 'Zero Harm', description: 'A proactive philosophy that prioritizes the health and safety of our people above all else in every decision.' },
  {
    icon: regulatoryCompliance,
    title: 'Regulatory Compliance',
    description: 'Adhering to international best practices and local regulatory frameworks across all operational jurisdictions.',
  },
  {
    icon: riskPlanning,
    title: 'Risk-Based Planning',
    description: 'Systematic identification and mitigation of operational hazards integrated into every phase of project delivery.',
  },
  {
    icon: qualityManagement,
    title: 'Quality Management',
    description: 'Rigorous quality assurance protocols ensuring consistency and precision from engineering design to execution.',
  },
  {
    icon: environmentalStewardship,
    title: 'Environmental Stewardship',
    description: 'Minimizing our footprint through responsible resource management and comprehensive emission monitoring.',
  },
  {
    icon: continuousImprovement,
    title: 'Continuous Improvement',
    description: 'Lessons-learned integration and ongoing performance reviews driving the evolution of our safety culture.',
  },
];

const Pillars: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col gap-10 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-col gap-4 items-center max-w-168 w-full">
        <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-5xl leading-[1.5] text-center">Core HSEQ Pillars</h2>
        <p className="font-light text-navy-subtle text-lg tracking-[-0.04px] text-center">The foundation of our operational integrity and project success.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-360">
        {pillars.map(({ icon, title, description }) => (
          <div key={title} className="bg-white border-t-4 border-secondary rounded-2xl drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-4 items-start p-10">
            <div className="bg-ice-blue rounded-xl flex items-center justify-center size-16">
              <img src={icon} alt="" className="size-8" />
            </div>
            <h3 className="font-light text-accent text-[22px] leading-[1.5] pt-4">{title}</h3>
            <p className="font-light text-navy-subtle text-base leading-[1.75]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
