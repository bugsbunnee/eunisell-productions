import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import upstreamImg from '/about/industry-upstream.png';
import independentImg from '/about/industry-independent.png';
import iocImg from '/about/industry-ioc.png';
import marginalImg from '/about/industry-marginal.png';

interface Industry {
  title: string;
  description: string;
  image: string;
  imageOpacity: string;
  gradient: string;
  imageClassName: string;
}

const industries: Industry[] = [
  {
    title: 'Upstream Oil & Gas',
    description: 'Supporting onshore, swamp, shallow water, and offshore production operations.',
    image: upstreamImg,
    imageOpacity: 'opacity-60',
    gradient: 'bg-linear-to-t from-[#001020] via-[rgba(0,26,48,0.8)] via-50% to-[rgba(10,42,74,0.4)]',
    imageClassName: 'absolute inset-0 size-full object-cover',
  },
  {
    title: 'Independent Operators',
    description: 'Delivering cost-effective production solutions that maximize asset value.',
    image: independentImg,
    imageOpacity: 'opacity-41',
    gradient: 'bg-linear-to-t from-[#0d1a0a] via-[rgba(26,45,18,0.8)] via-[99.839%] to-[rgba(42,64,32,0)]',
    imageClassName: 'absolute h-full max-w-none top-0 left-[-35.15%] w-[270.31%]',
  },
  {
    title: 'International Oil Companies',
    description: 'Providing engineering, project delivery, maintenance, and production support services.',
    image: iocImg,
    imageOpacity: 'opacity-17',
    gradient: 'bg-linear-to-t from-[#001228] via-[rgba(0,32,64,0.8)] via-50% to-[rgba(0,52,104,0.4)]',
    imageClassName: 'absolute h-full max-w-none top-0 left-[0.13%] w-[152.05%]',
  },
  {
    title: 'Marginal Field Operators',
    description: 'Helping operators improve production efficiency while managing operating costs.',
    image: marginalImg,
    imageOpacity: 'opacity-37',
    gradient: 'bg-linear-to-t from-[#0a1020] from-[57.692%] via-[rgba(20,32,48,0.8)] via-[99.99%] to-[rgba(26,48,64,0.4)]',
    imageClassName: 'absolute inset-0 size-full object-cover',
  },
];

const Industries: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <div className="flex flex-col gap-16 items-start max-w-360 w-full">
        <FadeIn className="flex flex-col gap-4 items-center w-full">
          <p className="font-light text-secondary text-base text-center">INDUSTRIES WE SERVED</p>
          <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] leading-[1.5] text-center">Serving the Full Spectrum of Operators</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {industries.map(({ title, description, image, imageOpacity, gradient, imageClassName }) => (
            <StaggerItem key={title} hover className={`relative flex flex-col justify-end h-130 rounded-2xl overflow-hidden px-5 py-12 ${gradient}`}>
              <div className={`absolute inset-0 overflow-hidden ${imageOpacity}`}>
                <img src={image} alt={title} className={imageClassName} />
              </div>

              <div className="relative flex flex-col gap-2.7 items-start w-full">
                <h3 className="font-light text-white text-[28px] leading-[1.5]">{title}</h3>
                <p className="font-light text-white text-[15px] leading-[1.65]">{description}</p>
                <button type="button" onClick={() => navigate(paths.portfolio)} className="font-light text-white text-sm pt-3.3">
                  Explore →
                </button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Industries;
