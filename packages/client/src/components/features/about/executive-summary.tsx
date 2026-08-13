const ExecutiveSummary: React.FC = () => {
  return (
    <section className="relative bg-accent flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-30 overflow-hidden">
      <div className="absolute inset-y-0 left-1/2 right-0 opacity-10 border border-dashed border-white m-8" />

      <div className="relative flex flex-col gap-6 items-start w-full lg:max-w-250">
        <p className="font-light text-secondary text-sm tracking-[4px] uppercase">Executive Summary</p>

        <h2 className="font-light text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2]">
          A single, engineering-led partner across
          <br />
          the production value chain.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full">
          <p className="font-light text-navy-muted text-lg leading-[1.8]">
            We specialize in delivering integrated solutions that address the core challenges of modern energy production. From complex facility development to day-to-day
            operations and maintenance, our approach is defined by technical rigor and a commitment to excellence.
          </p>
          <p className="font-light text-navy-muted text-lg leading-[1.8]">
            By bridging the gap between engineering design and field execution, we ensure that every project is optimized for safety, cost-efficiency, and long-term asset integrity
            across the entire African energy landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
