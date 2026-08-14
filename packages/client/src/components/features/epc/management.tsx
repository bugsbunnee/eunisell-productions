import managementImg from '/epc/management-image.png';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '20+', label: 'Years Experience' },
];

const Management: React.FC = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row gap-16 lg:gap-25 items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-1 flex-col gap-8 items-start w-full">
        <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-[1.21]">
          Comprehensive EPC
          <br />
          Management
        </h2>

        <div className="flex flex-col gap-6 items-start">
          <p className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.9]">
            Eunisell delivers integrated EPC solutions for production facilities, gathering systems, process upgrades, and field infrastructure. Our project teams manage
            engineering, procurement, construction, installation, testing, and commissioning while ensuring projects are delivered safely, on schedule, and within budget.
          </p>
          <p className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.9]">
            We leverage global technology partnerships and deep local field experience to overcome complex logistical and technical challenges, providing a single point of
            accountability for your most critical assets.
          </p>
        </div>

        <div className="flex gap-12 items-start pt-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-start">
              <p className="font-light text-secondary text-4xl leading-[1.5]">{value}</p>
              <p className="font-light text-navy-subtle text-sm leading-[1.5]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="h-100 md:h-125 lg:h-150 rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img src={managementImg} alt="EPC production facility equipment" className="size-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Management;
