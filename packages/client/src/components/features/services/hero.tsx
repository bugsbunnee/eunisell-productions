import heroRig from '/services/hero-rig-2.png';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden h-100 md:h-125 lg:h-160.5">
      <img src={heroRig} alt="Offshore production platform at sunset" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-accent/67" />

      <div className="relative flex flex-col items-start px-9 md:px-16 lg:px-36 w-full">
        <div className="flex flex-col gap-6 items-start max-w-200 w-full">
          <div className="flex gap-4 items-center">
            <div className="bg-secondary h-0.5 w-12" />
            <p className="font-light text-white text-sm tracking-[1.4px] uppercase">Our Portfolio</p>
          </div>

          <h1 className="font-light text-white text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1]">
            Integrated Service
            <br />
            <span className="text-secondary">Portfolio</span>
          </h1>

          <p className="font-light text-white text-lg md:text-xl lg:text-2xl leading-[1.35] lg:leading-[39px] pt-2">
            Seven service lines, one coordinated delivery capability. We bridge the gap between complex engineering and operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
