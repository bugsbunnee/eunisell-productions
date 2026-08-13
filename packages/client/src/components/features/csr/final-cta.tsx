import icon1 from '../../../assets/icons/csr/final-icon-1.svg';
import icon2 from '../../../assets/icons/csr/final-icon-2.svg';
import icon3 from '../../../assets/icons/csr/final-icon-3.svg';

const icons = [icon1, icon2, icon3];

const FinalCta: React.FC = () => {
  return (
    <section className="relative bg-deep-navy overflow-hidden flex flex-col items-center justify-end px-9 md:px-16 lg:px-20 pt-16 pb-16 lg:pb-20">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-primary blur-[100px] opacity-20 rounded-full size-300 pointer-events-none" />

      <div className="relative flex flex-col gap-8 items-center max-w-320 w-full">
        <div className="bg-linear-to-b from-secondary to-secondary/0 h-16 w-1" />

        <h2 className="font-light text-white text-[40px] md:text-[52px] lg:text-[64px] text-center tracking-[-0.06px] leading-[1.25]">
          Corporate Social
          <br />
          Responsibility
        </h2>

        <p className="font-light text-muted text-lg md:text-xl text-center tracking-[-0.04px] leading-[1.625] max-w-215">
          A Vision for a Sustainable Energy Future At Eunisell, we envision a sustainable energy future where innovation, responsible business practices and inclusive growth create
          lasting value for all. Our commitment extends beyond powering industries and urban centres to reaching remote communities with solutions that improve livelihoods, create
          opportunities and support a healthier environment. By working collaboratively with our stakeholders, we aim to contribute to an energy future that is more sustainable,
          inclusive, resilient and beneficial to everyone—from major cities to the most underserved communities.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center pt-2">
          <a href="#" className="bg-secondary rounded-full flex items-center justify-center px-12 py-5.5 font-light text-white text-lg whitespace-nowrap">
            Contact Eunisell
          </a>
          <a href="#" className="border-2 border-white rounded-full flex items-center justify-center px-12 py-5 font-light text-white text-lg whitespace-nowrap">
            Explore Eunisell
          </a>
        </div>

        <div className="flex gap-8 md:gap-32 items-center opacity-30 pt-16">
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt="" className="size-16 md:size-24" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
