import fieldDevImg from '/projects/field-development.png';

const FeaturedFieldDevelopment: React.FC = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row gap-16 lg:gap-20 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <div className="relative flex-1 w-full pb-10 lg:pb-0 lg:pr-10">
        <div className="h-100 md:h-125 lg:h-150 rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img src={fieldDevImg} alt="Early production facility on shallow water" className="size-full object-cover" />
        </div>

        <div className="absolute -bottom-10 -right-4 lg:-right-10 flex flex-col gap-1 items-start bg-deep-navy border border-secondary rounded-2xl p-10 max-w-75 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <p className="font-light text-secondary text-4xl leading-[1.5]">10k</p>
          <p className="font-light text-white text-sm tracking-[0.7px] uppercase">BPD Capacity</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-8 items-start w-full">
        <div className="flex flex-col gap-4.25 items-start pt-0.5">
          <p className="font-light text-secondary text-xl tracking-[1.4px] uppercase">Shallow Water · OML 46 Atala</p>
          <h4 className="font-light text-accent text-[36px] md:text-[44px] lg:text-[56px] leading-[1.14]">
            Field Development
            <br />& EPF Deployment
          </h4>
        </div>

        <div className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col gap-2 items-start w-full">
            <h5 className="font-light text-accent text-lg leading-[1.5]">The Solution</h5>
            <p className="font-light text-navy-subtle text-[17px] leading-[1.65]">
              Eunisell deployed a 10,000 barrel per day Early Production Facility, managing the full engineering, construction and mobilization lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-ice-blue border border-line rounded-xl p-8 w-full">
            <div className="flex flex-col gap-2 items-start">
              <h5 className="font-light text-secondary text-sm uppercase">Outcome</h5>
              <p className="font-light text-accent text-[15px] leading-[1.47]">First Oil achieved in record time, enabling self-funding of CapEx from early revenue streams.</p>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <h5 className="font-light text-secondary text-sm uppercase">ROI Strategy</h5>
              <p className="font-light text-accent text-[15px] leading-[1.47]">Targeted full facility ownership and profitable operation within 3–5 years.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFieldDevelopment;
