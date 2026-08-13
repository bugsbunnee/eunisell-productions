import zeroHarm from '../../../assets/icons/hseq/ecosystem-zero-harm.svg';
import compliance from '../../../assets/icons/hseq/ecosystem-compliance.svg';
import riskManagement from '../../../assets/icons/hseq/ecosystem-risk-management.svg';
import qualityAssurance from '../../../assets/icons/hseq/ecosystem-quality-assurance.svg';
import environment from '../../../assets/icons/hseq/ecosystem-environment.svg';
import continuousImprovement from '../../../assets/icons/hseq/ecosystem-continuous-improvement.svg';

const nodes = [
  { icon: zeroHarm, label: 'Zero Harm', position: 'left-1/2 -translate-x-1/2 -top-10' },
  { icon: compliance, label: 'Compliance', position: 'right-62.5 top-20' },
  { icon: riskManagement, label: 'Risk Management', position: 'right-62.5 bottom-20' },
  { icon: qualityAssurance, label: 'Quality Assurance', position: 'left-1/2 -translate-x-1/2 -bottom-10' },
  { icon: environment, label: 'Environment', position: 'left-62.5 bottom-20' },
  { icon: continuousImprovement, label: 'Continuous Imp.', position: 'left-62.5 top-20' },
];

const Node: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex flex-col gap-3.5 items-center">
    <div className="bg-white border-2 border-line rounded-full flex items-center justify-center shadow-md shrink-0 size-20">
      <img src={icon} alt="" className="size-8" />
    </div>
    <p className="font-light text-accent text-base text-center whitespace-nowrap">{label}</p>
  </div>
);

const Ecosystem: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-24 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-col gap-4 items-center max-w-168 w-full">
        <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-5xl leading-[1.5] text-center">The HSEQ Ecosystem</h2>
        <p className="font-light text-navy-subtle text-lg tracking-[-0.02px] text-center">Interconnected principles driving operational excellence.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 items-center justify-items-center w-full max-w-160 lg:hidden">
        {nodes.map(({ icon, label }) => (
          <Node key={label} icon={icon} label={label} />
        ))}
        <div className="bg-secondary border-8 border-white rounded-full drop-shadow-[0px_0px_40px_rgba(0,131,206,0.4)] flex items-center justify-center shrink-0 size-32 col-span-2 sm:col-span-3">
          <p className="font-light text-white text-xl tracking-[2.4px]">HSEQ</p>
        </div>
      </div>

      <div className="hidden lg:flex relative items-center justify-center h-150 w-full max-w-312">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute bg-line h-px left-[117.5px] top-[100px] w-50" />
          <div className="absolute bg-line h-px left-51 -top-25 w-50" />
          <div className="absolute bg-line h-px left-[290.7px] top-[100px] w-50" />
        </div>

        {nodes.map(({ icon, label, position }) => (
          <div key={label} className={`absolute ${position}`}>
            <Node icon={icon} label={label} />
          </div>
        ))}

        <div className="bg-secondary border-12 border-white rounded-full drop-shadow-[0px_0px_40px_rgba(0,131,206,0.4)] flex items-center justify-center shrink-0 size-50">
          <p className="font-light text-white text-2xl tracking-[2.4px]">HSEQ</p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
