import heroBg from '/about/hero-bg.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-deep-navy flex items-center h-100 md:h-140 lg:h-180 overflow-hidden">
      <img src={heroBg} alt="Oil and gas production facility" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-deep-navy via-deep-navy/80 via-50% to-deep-navy/0" />

      <div className="relative flex flex-col gap-6 items-start max-w-300 px-9 md:px-16 lg:px-36 w-full">
        <div className="flex gap-4 items-center">
          <div className="bg-white h-px w-12" />
          <p className="font-light text-white text-sm tracking-[4px] uppercase">Eunisell Production Solutions</p>
        </div>

        <h1 className="font-light text-white text-[36px] md:text-[52px] lg:text-[72px] leading-[1.1] tracking-[-1.8px]">
          Integrated Engineering &amp;
          <br />
          Field Services Across the
          <br />
          Oil &amp; Gas Value Chain
        </h1>

        <p className="font-light text-navy-muted text-lg lg:text-2xl leading-[1.4] max-w-175">A single, engineering-led partner across the production value chain.</p>
      </div>
    </section>
  );
};

export default Hero;
