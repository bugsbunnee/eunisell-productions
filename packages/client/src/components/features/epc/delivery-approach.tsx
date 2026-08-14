const steps = [
  { number: '01', title: 'Engineering', description: 'Front-end and detailed design for maximum integrity.' },
  { number: '02', title: 'Procurement', description: 'Global supply chain management and quality control.' },
  { number: '03', title: 'Construction', description: 'Safety-first execution with expert field teams.' },
  { number: '04', title: 'Installation', description: 'Precision site mounting and system integration.' },
  { number: '05', title: 'Testing', description: 'Rigorous hydro-testing and NDT verification.' },
  { number: '06', title: 'Commissioning', description: 'Final handover and operational start-up support.' },
];

const DeliveryApproach: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-16 lg:gap-24 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] leading-[1.5] text-center">Project Delivery Approach</h2>

      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
        <div className="absolute hidden lg:block left-0 right-0 top-8 border-t-2 border-dashed border-secondary" />

        {steps.map(({ number, title, description }) => (
          <div key={number} className="flex flex-col gap-6 items-start">
            <div className="flex items-center justify-center bg-secondary rounded-full shadow-[0_0_0_8px_white] size-16">
              <span className="font-light text-white text-xl">{number}</span>
            </div>
            <div className="flex flex-col gap-1.75 items-start">
              <h4 className="font-light text-accent text-lg leading-[1.5]">{title}</h4>
              <p className="font-light text-navy-subtle text-sm leading-[1.5]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryApproach;
