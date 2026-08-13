import epfImg from '/projects/accelerated-epf.png';

const FeaturedAcceleratedEpf: React.FC = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row gap-16 lg:gap-25 items-center px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <div className="flex flex-1 flex-col gap-8 items-start w-full">
        <div className="flex flex-col gap-4.25 items-start pt-0.5">
          <p className="font-light text-secondary text-xl tracking-[1.4px] uppercase">Onshore · OML 13 Qua Iboe</p>
          <h4 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[52px] leading-[1.15]">
            Accelerated EPF
            <br />
            Delivery for First Oil
          </h4>
        </div>

        <p className="font-light text-navy-subtle text-lg leading-[1.78]">
          Eunisell deployed a 10,000-barrel Early Production Facility to enable Network E&amp;P to achieve production milestones in record time.
        </p>

        <div className="relative flex flex-col gap-3 items-start bg-surface border border-line rounded-2xl p-8 overflow-hidden w-full">
          <div className="absolute -bottom-2.5 -right-2.5 border border-dashed border-accent opacity-5 size-50 pointer-events-none" />
          <h5 className="relative font-light text-accent text-xl leading-[1.5]">Outcome</h5>
          <p className="relative font-light text-navy-subtle text-base leading-[1.625]">
            The project enabled rapid monetization of assets, providing the necessary cash flow for further exploration and site development.
          </p>
        </div>
      </div>

      <div className="relative flex-1 w-full pt-10 lg:pt-0">
        <div className="h-100 md:h-125 lg:h-162.5 rounded-2xl overflow-hidden">
          <img src={epfImg} alt="Early production facility pipelines" className="size-full object-cover" />
        </div>

        <div className="hidden md:flex absolute left-0 lg:-left-12 top-[10%] flex-col gap-3.75 items-start bg-white border border-line rounded-xl p-8 max-w-50 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="flex gap-3 items-center">
            <div className="bg-[#22c55e] rounded-full size-3 shrink-0" />
            <p className="font-light text-accent text-sm whitespace-nowrap">Commercial Model: LOM-O</p>
          </div>
          <p className="font-light text-navy-subtle text-[13px] leading-[1.5]">Lease, operate and maintain, then own — a sustainable growth model.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAcceleratedEpf;
