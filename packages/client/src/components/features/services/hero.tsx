import heroBg from '/services/hero-bg.png';
import arrowWhite from '../../../assets/icons/services/arrow-white.svg';

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-125 md:h-160 lg:h-200 items-center overflow-hidden bg-deep-navy">
      <img src={heroBg} alt="Offshore oil and gas production facility at dusk" className="absolute inset-0 size-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-linear-to-r from-deep-navy via-deep-navy/80 via-50% to-deep-navy/0" />
      <div className="absolute inset-0 bg-linear-to-t from-deep-navy to-deep-navy/0 opacity-60" />

      <div className="relative flex flex-col gap-6 items-start max-w-300 px-9 md:px-16 lg:px-36 w-full">
        <div className="flex gap-4 items-center">
          <div className="bg-white h-0.5 w-12" />
          <p className="font-light text-white text-[17px] leading-[1.5]">OUR EXPERTISE</p>
        </div>

        <h1 className="font-light text-white text-[44px] md:text-[64px] lg:text-[84px] leading-[1.1] tracking-[-2.1px] pt-2">Our Services</h1>

        <p className="font-light text-navy-muted text-lg lg:text-[22px] leading-[1.625] tracking-[-0.45px] pt-2">
          Delivering Engineering Excellence Across the Entire Production Lifecycle
        </p>

        <p className="font-light text-navy-muted text-base lg:text-lg leading-[1.78] tracking-[-0.4px] max-w-200">
          Eunisell delivers integrated engineering, production, maintenance, installation, commissioning, and equipment support services that help operators improve operational
          performance, maximize asset reliability, and safely deliver production objectives.
        </p>

        <div className="flex flex-wrap gap-6 items-center pt-6">
          <a href="#" className="bg-secondary rounded-full flex gap-4 items-center px-10 py-4.5 font-light text-white text-base tracking-[-0.2px] whitespace-nowrap">
            Explore Our Services
            <img src={arrowWhite} alt="" className="w-3.5 h-3" />
          </a>
          <a href="#" className="border border-white rounded-full flex items-center px-10 py-4.5 font-light text-white text-base tracking-[-0.2px] whitespace-nowrap">
            Speak With Our Engineers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
