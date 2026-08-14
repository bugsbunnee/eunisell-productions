import { useNavigate } from 'react-router-dom';
import industryUpstream from '/home/industry-upstream.jpg';
import industryIndependent from '/home/industry-independent.jpg';
import industryIoc from '/home/industry-ioc.jpg';
import industryMarginal from '/home/industry-marginal.jpg';
import { paths } from '../../../lib/data';

const industries = [
  {
    image: industryUpstream,
    imageOpacity: 'opacity-60',
    gradient: 'bg-linear-to-t from-[#001020] via-[rgba(0,26,48,0.8)] via-50% to-[rgba(10,42,74,0.4)]',
    title: 'Upstream Oil & Gas',
    description: 'Supporting onshore, swamp, shallow water, and offshore production operations.',
  },
  {
    image: industryIndependent,
    imageOpacity: 'opacity-41',
    gradient: 'bg-linear-to-t from-[#0d1a0a] via-[rgba(26,45,18,0.8)] via-[99.839%] to-[rgba(42,64,32,0)]',
    title: 'Independent Operators',
    description: 'Delivering cost-effective production solutions that maximize asset value.',
  },
  {
    image: industryIoc,
    imageOpacity: 'opacity-17',
    gradient: 'bg-linear-to-t from-[#001228] via-[rgba(0,32,64,0.8)] via-50% to-[rgba(0,52,104,0.4)]',
    title: 'International Oil Companies',
    description: 'Providing engineering, project delivery, maintenance, and production support services.',
  },
  {
    image: industryMarginal,
    imageOpacity: 'opacity-37',
    gradient: 'bg-linear-to-t from-[#0a1020] from-[57.692%] via-[rgba(20,32,48,0.8)] via-[99.99%] to-[rgba(26,48,64,0.4)]',
    title: 'Marginal Field Operators',
    description: 'Helping operators improve production efficiency while managing operating costs.',
  },
];

const Industries: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-24 lg:py-35">
      <div className="flex flex-col gap-16 items-start max-w-360 w-full">
        <div className="flex flex-col gap-4 items-center w-full">
          <p className="font-light text-secondary text-lg text-center">INDUSTRIES WE SERVED</p>
          <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] text-center tracking-[-0.05px]">Serving the Full Spectrum of Operators</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {industries.map(({ image, imageOpacity, gradient, title, description }) => (
            <div key={title} className={`relative flex flex-col justify-end overflow-hidden rounded-2xl h-130 px-5 py-12 ${gradient}`}>
              <img src={image} alt={title} className={`absolute inset-0 size-full object-cover ${imageOpacity}`} />

              <div className="relative flex flex-col gap-2.5 items-start">
                <h3 className="font-light text-white text-[28px] leading-[42px]">{title}</h3>
                <p className="font-light text-white text-[15px] leading-[24.75px]">{description}</p>
                <button type="button" onClick={() => navigate(paths.portfolio)} className="font-light text-white text-sm pt-3">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
