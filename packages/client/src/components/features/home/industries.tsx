import industryUpstream from '/home/industry-upstream.jpg';
import industryIndependent from '/home/industry-independent.jpg';
import industryIoc from '/home/industry-ioc.jpg';
import industryMarginal from '/home/industry-marginal.jpg';

const industries = [
  {
    image: industryUpstream,
    imageOpacity: 'opacity-60',
    title: 'Upstream Oil & Gas',
    description: 'Supporting onshore, swamp, shallow water, and offshore production operations.',
  },
  {
    image: industryIndependent,
    imageOpacity: 'opacity-40',
    title: 'Independent Operators',
    description: 'Delivering cost-effective production solutions that maximize asset value.',
  },
  {
    image: industryIoc,
    imageOpacity: 'opacity-20',
    title: 'International Oil Companies',
    description: 'Providing engineering, project delivery, maintenance, and production support services.',
  },
  {
    image: industryMarginal,
    imageOpacity: 'opacity-35',
    title: 'Marginal Field Operators',
    description: 'Helping operators improve production efficiency while managing operating costs.',
  },
];

const Industries: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-24 lg:py-35">
      <div className="flex flex-col gap-16 items-start max-w-360 w-full">
        <div className="flex flex-col gap-4 items-center w-full">
          <p className="font-light text-secondary text-lg text-center">INDUSTRIES WE SERVED</p>
          <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] text-center tracking-[-0.05px]">Serving the Full Spectrum of Operators</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {industries.map(({ image, imageOpacity, title, description }) => (
            <div key={title} className="relative flex flex-col justify-end overflow-hidden rounded-2xl h-130 px-5 py-12 bg-deep-navy">
              <img src={image} alt={title} className={`absolute inset-0 size-full object-cover ${imageOpacity}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/70 to-transparent" />

              <div className="relative flex flex-col gap-2.5 items-start">
                <h3 className="font-light text-white text-[28px] leading-[42px]">{title}</h3>
                <p className="font-light text-white text-[15px] leading-[24.75px]">{description}</p>
                <a href="#" className="font-light text-white text-sm pt-3">
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
