import whyImg from '/about/why-eunisell.png';

const points = [
  {
    number: '01',
    title: 'Integrated Value Chain Coverage',
    description: 'From the reservoir to the point of sale, we provide a unified technical interface that reduces contractor complexity.',
  },
  {
    number: '02',
    title: 'Engineering-Led Approach',
    description: "We don't just provide labor; we provide technical strategy and multidisciplinary engineering expertise at every stage.",
  },
  {
    number: '03',
    title: 'Full Asset Life-Cycle Support',
    description: "Whether it's a greenfield startup or brownfield optimization, we support the asset's entire productive life.",
  },
  {
    number: '04',
    title: 'Field-Proven, Locally Grounded',
    description: 'Deep local knowledge combined with international execution standards ensures seamless regional delivery.',
  },
];

const WhyEunisell: React.FC = () => {
  return (
    <section className="bg-deep-navy flex flex-col gap-16 items-start px-9 md:px-16 lg:px-36 py-16 lg:py-40">
      <div className="flex flex-col gap-4 items-start w-full">
        <p className="font-light text-secondary text-sm tracking-[4px] uppercase">Our Advantage</p>
        <h2 className="font-light text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.5]">Why Eunisell Production Solutions</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-center w-full">
        <div className="flex flex-1 flex-col gap-12 items-start w-full min-w-0">
          {points.map(({ number, title, description }) => (
            <div key={number} className="flex gap-8 items-start w-full">
              <p className="font-light text-secondary text-3xl leading-[1.5] opacity-30 shrink-0">{number}</p>
              <div className="flex flex-col gap-4 items-start">
                <h4 className="font-light text-white text-2xl leading-[1.5]">{title}</h4>
                <p className="font-light text-navy-subtle text-base leading-[1.625]">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex-1 w-full lg:max-w-169">
          <img src={whyImg} alt="Field engineer inspecting wind turbine infrastructure" className="w-full h-75 lg:h-140 object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-deep-navy to-deep-navy/0" />
        </div>
      </div>
    </section>
  );
};

export default WhyEunisell;
