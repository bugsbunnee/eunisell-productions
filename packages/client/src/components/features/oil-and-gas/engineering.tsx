import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import controlRoomImg from '/oil-and-gas/engineering-control-room.jpg';

const stages = ['FEED', 'Detailed Engineering', 'Asset Integrity', 'Brownfield Engineering', 'Optimization', 'Commissioning Support'];

const Engineering: React.FC = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row items-stretch">
      <FadeIn className="flex flex-col gap-10 items-start justify-center w-full lg:w-1/2 px-9 md:px-16 lg:px-16 py-16 lg:py-27.5">
        <div className="flex flex-col gap-3 items-start">
          <p className="font-inter font-bold text-secondary text-sm tracking-[2.8px] uppercase">Engineering-Led</p>
          <h2 className="font-inter font-bold text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15]">
            Engineering Embedded
            <br />
            Across Every Stage of
            <br />
            Delivery
          </h2>
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {stages.map((stage) => (
            <StaggerItem key={stage} className="bg-ice-blue rounded-[16px] flex gap-3 items-center h-16 px-4">
              <div className="bg-secondary rounded-full shrink-0 size-3" />
              <span className="font-inter font-bold text-accent text-base whitespace-nowrap">{stage}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>

      <div className="w-full lg:w-1/2 h-100 lg:h-auto">
        <img src={controlRoomImg} alt="Group of three professional African engineers in a modern control room" className="size-full object-cover" />
      </div>
    </section>
  );
};

export default Engineering;
