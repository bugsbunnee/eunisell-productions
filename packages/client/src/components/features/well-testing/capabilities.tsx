import swtIcon from '../../../assets/icons/well-testing/benefit-swt.svg';
import ewtIcon from '../../../assets/icons/well-testing/benefit-ewt.svg';
import cleanupIcon from '../../../assets/icons/well-testing/benefit-cleanup.svg';
import separationIcon from '../../../assets/icons/well-testing/benefit-separation.svg';
import dataIcon from '../../../assets/icons/well-testing/benefit-data.svg';
import flaringIcon from '../../../assets/icons/well-testing/benefit-flaring.svg';

const capabilities = [
  { icon: swtIcon, title: ['Surface Well Testing (SWT)', 'Programs'] },
  { icon: ewtIcon, title: ['Extended Well Testing (EWT)', 'Campaigns'] },
  { icon: cleanupIcon, title: ['Well Clean-Up & Flowback', 'Operations'] },
  { icon: separationIcon, title: ['Test Separation, Metering &', 'Choke Management'] },
  { icon: dataIcon, title: ['Real-Time Data Acquisition &', 'Reservoir Surveillance'] },
  { icon: flaringIcon, title: ['Flaring, Incineration & Waste', 'Management'] },
];

const Capabilities: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-col gap-20 items-center w-full max-w-360">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3]">Well Testing</h2>
          <p className="font-light text-navy-subtle text-lg tracking-[-0.09px]">End-to-end well testing solutions for accurate reservoir characterisation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
          {capabilities.map(({ icon, title }) => (
            <div
              key={title.join(' ')}
              className="bg-white border border-line border-t-3 border-t-secondary rounded-2xl drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-5 items-start p-10"
            >
              <div className="bg-ice-blue rounded-xl flex items-center justify-center shrink-0 size-14">
                <img src={icon} alt="" className="size-7" />
              </div>
              <h3 className="font-light text-accent text-lg leading-7">
                {title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
