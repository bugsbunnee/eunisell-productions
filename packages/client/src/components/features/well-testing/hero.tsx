import heroBg from '/services/well-testing/hero-bg.png';
import heroDecor1 from '../../../assets/icons/well-testing/hero-decor-1.svg';
import heroDecor2 from '../../../assets/icons/well-testing/hero-decor-2.svg';
import btnArrow from '../../../assets/icons/well-testing/btn-arrow.svg';

const capabilities = ['Surface Well Testing', 'Extended Well Testing', 'Reservoir Surveillance', 'Real-Time Data Acquisition'];

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-deep-navy lg:h-205">
      <img src={heroBg} alt="Well testing operations" className="absolute inset-0 size-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/85 to-accent/40" />
      <img src={heroDecor1} alt="" className="absolute -left-19.5 -top-19.5 size-99" />
      <img src={heroDecor2} alt="" className="absolute right-15 bottom-20 size-70 opacity-10" />

      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 px-9 md:px-16 lg:px-36 py-25 w-full">
        <div className="flex flex-col gap-6 items-start max-w-180">
          <p className="font-light text-navy-muted text-sm">
            Home <span className="opacity-50">/</span> Integrated Service Portfolio <span className="opacity-50">/</span> Well Testing
          </p>

          <div className="flex gap-4 items-center">
            <div className="bg-secondary h-0.5 w-12" />
            <p className="font-light text-secondary text-[13px] tracking-[4px] uppercase">01</p>
          </div>

          <h1 className="font-light text-white text-[44px] md:text-[56px] lg:text-[72px] leading-[1.1]">Well Testing</h1>

          <p className="font-light text-navy-muted text-lg md:text-xl leading-[1.7] max-w-150">Surface &amp; Extended Well Testing (SWT, EWT) and reservoir surveillance</p>

          <div className="flex flex-wrap gap-5 items-center pt-4">
            <a href="#" className="bg-secondary rounded-full flex gap-3 items-center px-10 py-4.5 font-light text-white text-base whitespace-nowrap">
              Speak With Our Team
              <img src={btnArrow} alt="" className="w-3.5 h-3" />
            </a>
            <a href="#" className="border border-white rounded-full flex items-center px-10 py-4.25 font-light text-white text-base whitespace-nowrap">
              Request Technical Consultation
            </a>
          </div>
        </div>

        <div className="bg-accent border border-secondary rounded-xl drop-shadow-[0px_25px_25px_rgba(0,0,0,0.4)] flex flex-col gap-6 items-start p-10 w-full sm:w-85 shrink-0">
          <div className="flex gap-3 items-center">
            <div className="bg-secondary h-0.5 w-8" />
            <p className="font-light text-secondary text-[11px] tracking-[3px] uppercase">Service Capabilities</p>
          </div>

          <div className="flex flex-col gap-5 items-start w-full">
            {capabilities.map((label) => (
              <div key={label} className="flex gap-3.5 items-center">
                <div className="bg-secondary h-5 w-0.75 rounded-full shrink-0" />
                <p className="font-light text-white text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
