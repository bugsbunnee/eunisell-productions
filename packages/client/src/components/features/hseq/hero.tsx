import heroBg from '/hseq/hero-bg.png';
import heroDecor1 from '../../../assets/icons/hseq/hero-decor-1.svg';
import heroDecor2 from '../../../assets/icons/hseq/hero-decor-2.svg';
import btnArrow from '../../../assets/icons/hseq/btn-arrow.svg';
import safetyFirst from '../../../assets/icons/hseq/safety-first.svg';
import qualityAssured from '../../../assets/icons/hseq/quality-assured.svg';
import environmentalResponsibility from '../../../assets/icons/hseq/environmental-responsibility.svg';
import operationalExcellence from '../../../assets/icons/hseq/operational-excellence.svg';

const highlights = [
  { icon: safetyFirst, title: 'Safety First', subtitle: 'Zero incident milestone philosophy' },
  { icon: qualityAssured, title: 'Quality Assured', subtitle: 'ISO 9001 certified management' },
  { icon: environmentalResponsibility, title: 'Environmental Responsibility', subtitle: 'Sustainable operational practices' },
  { icon: operationalExcellence, title: 'Operational Excellence', subtitle: 'Efficiency driven by expertise' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-deep-navy">
      <img src={heroBg} alt="HSEQ field operations" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-deep-navy via-deep-navy/85 via-50% to-deep-navy/0" />
      <img src={heroDecor1} alt="" className="absolute -left-20 -top-20 size-100 opacity-10" />
      <img src={heroDecor2} alt="" className="absolute bottom-20 right-40 size-75 opacity-10" />

      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 px-9 md:px-16 lg:px-36 py-25 max-w-384 w-full">
        <div className="flex flex-col gap-6 items-start max-w-180">
          <div className="flex gap-4 items-center">
            <div className="bg-white h-0.5 w-12" />
            <p className="font-light text-white text-[17px]">OUR COMMITMENT</p>
          </div>

          <h1 className="font-light text-white text-[44px] md:text-[56px] lg:text-[72px] leading-[1.1]">
            Safety Drives Every
            <br />
            <span className="text-secondary">Operation</span>
          </h1>

          <p className="font-light text-navy-muted text-lg md:text-xl leading-[1.8] tracking-[-0.04px] max-w-165">
            Health, Safety, Environment, and Quality are embedded in every project we undertake. Our teams work in accordance with internationally recognized industry standards.
          </p>

          <div className="flex flex-wrap gap-5 items-center pt-4">
            <a href="#" className="bg-secondary rounded-full flex gap-3 items-center px-10 py-5.25 font-light text-white text-base whitespace-nowrap">
              Contact Our Team
              <img src={btnArrow} alt="" className="w-3.5 h-3" />
            </a>
            <a href="#" className="border border-white rounded-full flex items-center px-10 py-5 font-light text-white text-base whitespace-nowrap">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="backdrop-blur-md bg-accent/40 border border-secondary rounded-3xl flex flex-col gap-8 items-start p-10 w-full sm:w-110 shrink-0">
          <h3 className="font-light text-white text-2xl tracking-[0.6px]">HSEQ Excellence</h3>

          <div className="flex flex-col gap-6 items-start w-full">
            {highlights.map(({ icon, title, subtitle }) => (
              <div key={title} className="flex gap-4 items-start w-full">
                <div className="bg-secondary rounded-xl flex items-center justify-center p-3 shrink-0">
                  <img src={icon} alt="" className="size-5" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-light text-white text-base">{title}</p>
                  <p className="font-light text-navy-muted text-sm">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
