import { FadeIn } from '../../common/motion';

const Intro: React.FC = () => {
  return (
    <section className="bg-surface flex flex-col gap-12 items-start px-9 md:px-16 lg:px-36 py-16 lg:py-25">
      <FadeIn className="flex flex-col lg:flex-row gap-8 items-start lg:items-end justify-between w-full">
        <div className="flex flex-col gap-4 items-start max-w-200 lg:min-w-188">
          <p className="font-light text-secondary text-lg lg:text-xl tracking-[4px] uppercase">Project Showcase</p>
          <h3 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.17]">Strategic Assets &amp; Performance Records</h3>
        </div>

        <div className="flex flex-col items-start max-w-100 lg:pr-8">
          <p className="font-light text-navy-subtle text-lg leading-[1.5]">Over two decades of technical expertise deployed across shallow water and onshore terrains.</p>
        </div>
      </FadeIn>

      <div className="bg-line h-px w-full" />
    </section>
  );
};

export default Intro;
