const stats = [
  { value: '07', label: 'Service Lines' },
  { value: '100%', label: 'Local Delivery' },
];

const Intro: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 justify-center w-full">
        <h2 className="font-light text-accent text-[28px] md:text-[32px] lg:text-[36px] leading-[1.25]">Coordinated Delivery for the Modern Energy Landscape</h2>

        <div className="flex flex-col gap-6 items-start">
          <p className="font-light text-accent text-lg leading-[1.6]">
            At Eunisell Production Solutions, we have consolidated our expertise into seven core service lines. This integration allows us to provide a seamless transition from
            exploration to full-scale production, ensuring efficiency, safety, and reliability at every stage of the lifecycle.
          </p>

          <div className="flex gap-12 items-start pt-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-start">
                <p className="font-light text-secondary text-4xl leading-10 tracking-[-0.49px]">{value}</p>
                <p className="font-light text-navy-muted text-sm tracking-[0.7px] uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
