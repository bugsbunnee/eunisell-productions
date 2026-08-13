const badges = ['ISO 9001 Certified', 'HSE Excellence', 'Global Operations'];

const FinalCta: React.FC = () => {
  return (
    <section className="relative bg-deep-navy flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32 overflow-hidden">
      <div className="absolute bg-primary blur-[80px] rounded-full size-200 -right-100 -top-100 pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-225 w-full text-center">
        <h2 className="font-light text-white text-[36px] md:text-[50px] lg:text-[64px] leading-[1.25] tracking-[-1.7px] pb-8">
          Let&apos;s Build Better Production Performance Together
        </h2>

        <p className="font-light text-navy-subtle text-lg md:text-xl leading-9 tracking-[-0.47px] pb-12">
          Whether your operations require engineering design, EPC delivery, production optimization, facility upgrades, or specialized field services, Eunisell delivers practical
          solutions built around safety, quality, and operational excellence.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          <a
            href="#"
            className="bg-white rounded-full shadow-[0px_10px_15px_-3px_rgba(0,131,206,0.2),0px_4px_6px_-4px_rgba(0,131,206,0.2)] px-12 py-5 font-light text-secondary text-base tracking-[-0.44px] whitespace-nowrap"
          >
            Contact Production Solutions
          </a>
          <a href="#" className="border border-white rounded-full px-12 py-5 font-light text-white text-base tracking-[-0.38px] whitespace-nowrap">
            Request Technical Consultation
          </a>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-center opacity-40 pt-16">
          {badges.map((badge, index) => (
            <span key={badge} className="flex items-center gap-8 font-light text-white text-sm tracking-[-0.16px] whitespace-nowrap">
              {badge}
              {index < badges.length - 1 && <span aria-hidden="true" className="size-1 rounded-full bg-white" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
