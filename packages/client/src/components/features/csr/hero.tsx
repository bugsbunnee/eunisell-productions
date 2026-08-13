import heroImg from '/csr/hero.png';
import decor1 from '../../../assets/icons/csr/hero-decor-1.svg';
import decor2 from '../../../assets/icons/csr/hero-decor-2.svg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-sidebar flex flex-col items-center justify-center overflow-hidden px-9 md:px-16 lg:px-36 py-16 lg:py-30">
      <img src={decor1} alt="" className="absolute top-0 right-0 size-100 opacity-5" />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,471px)_1fr] gap-12 lg:gap-20 items-center max-w-360 w-full">
        <div className="flex flex-col gap-6 items-start">
          <nav className="flex gap-2 items-center">
            <span className="font-light text-secondary text-sm tracking-[0.35px] uppercase">Home</span>
            <span className="font-light text-muted text-sm tracking-[0.35px] uppercase">/</span>
            <span className="font-light text-secondary text-sm tracking-[0.35px] uppercase">Corporate Social Responsibility</span>
          </nav>

          <div className="flex flex-col gap-4 items-start">
            <p className="font-light text-secondary text-base tracking-[4px] uppercase">Corporate Responsibility</p>
            <h1 className="font-light text-accent text-[40px] md:text-[52px] lg:text-[64px] tracking-[-2px] leading-[1.24]">
              Corporate Social
              <br />
              Responsibility
            </h1>
            <p className="font-light text-accent text-base leading-8 max-w-140">
              At Eunisell Chemicals, our responsibility extends far beyond the industrial solutions we provide. We view Corporate Social Responsibility as a core strategic pillar,
              integrating social, environmental, and economic considerations into our operational DNA.
            </p>
          </div>

          <div className="bg-secondary h-0.5 w-24" />
        </div>

        <div className="relative">
          <div className="bg-transparent border border-accent rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden h-100 lg:h-125">
            <img src={heroImg} alt="Eunisell community engagement" className="size-full object-cover" />
          </div>
          <img src={decor2} alt="" className="hidden lg:block absolute -bottom-8 -right-8 size-48 opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
