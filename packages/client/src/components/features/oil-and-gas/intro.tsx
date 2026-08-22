import { FadeIn } from '../../common/motion';

import introImg from '/oil-and-gas/intro-engineers.jpg';

const Intro: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-36">
      <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[175px] items-center max-w-360 w-full">
        <div className="flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-3 items-start">
            <p className="font-inter font-bold text-secondary text-sm tracking-[2.8px] uppercase">Oil &amp; Gas Operations</p>
            <h2 className="font-inter font-bold text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15]">
              Supporting Reliable
              <br />
              Production from
              <br />
              Field Development
              <br />
              to Long-Term
              <br />
              Operations.
            </h2>
          </div>

          <div className="bg-secondary h-1 w-20" />

          <p className="font-inter text-navy-subtle text-lg leading-[1.6] tracking-[-0.018px]">
            Our approach combines technical excellence with deep regional experience to ensure that energy assets operate at peak efficiency. We understand the complexities of the
            African energy landscape and provide tailored solutions that mitigate risk and maximize output.
          </p>
        </div>

        <div className="bg-white rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden h-150">
          <img src={introImg} alt="Close up of professional African male and female engineers in white hard hats and blue coveralls" className="size-full object-cover" />
        </div>
      </FadeIn>
    </section>
  );
};

export default Intro;
