import { Stagger, StaggerItem } from '../../common/motion';

import terrainOnshore from '/oil-and-gas/terrain-onshore.jpg';
import terrainSwamp from '/oil-and-gas/terrain-swamp.jpg';
import terrainOffshore from '/oil-and-gas/terrain-offshore.jpg';

const terrains = [
  { image: terrainOnshore, title: 'Onshore' },
  { image: terrainSwamp, title: 'Swamp' },
  { image: terrainOffshore, title: 'Offshore' },
];

const Terrain: React.FC = () => {
  return (
    <section className="w-full">
      <Stagger className="grid grid-cols-1 lg:grid-cols-3">
        {terrains.map(({ image, title }) => (
          <StaggerItem key={title} hover className="group relative h-125 overflow-hidden">
            <img src={image} alt={title} className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-black/40 p-10">
              <h3 className="font-inter font-bold text-white text-[28px] leading-[1.5]">{title}</h3>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default Terrain;
