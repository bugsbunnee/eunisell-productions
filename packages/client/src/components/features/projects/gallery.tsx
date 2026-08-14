import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import controlRoomImg from '/projects/gallery-control-room.png';
import loadOutImg from '/projects/gallery-load-out.png';
import planningImg from '/projects/gallery-planning.png';

const items = [
  { image: controlRoomImg, title: 'Field Control Room', description: 'Real-time monitoring and asset management from centralized command centers.' },
  { image: loadOutImg, title: 'Well Activation Load-out', description: 'Strategic mobilization of production assets to remote field locations.' },
  { image: planningImg, title: 'EPF Mobilisation & Planning', description: 'Rigorous multidisciplinary planning ensuring project delivery timelines are met.' },
];

const Gallery: React.FC = () => {
  return (
    <section className="bg-surface flex flex-col gap-16 items-start px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <FadeIn className="flex flex-col gap-4 items-center w-full">
        <p className="font-light text-secondary text-base text-center tracking-[4px] uppercase">Project Gallery</p>
        <h3 className="font-light text-accent text-[28px] md:text-[34px] lg:text-[40px] leading-[1.5] text-center">Operations &amp; Engineering Insights</h3>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {items.map(({ image, title, description }) => (
          <StaggerItem key={title} className="group flex flex-col gap-6 items-start">
            <div className="h-100 rounded-2xl overflow-hidden shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] w-full">
              <img src={image} alt={title} className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <h5 className="font-light text-accent text-lg leading-[1.5]">{title}</h5>
              <p className="font-light text-navy-subtle text-sm leading-[1.5]">{description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default Gallery;
