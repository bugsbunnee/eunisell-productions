import blueprintBg from '/services/cta-blueprint.jpg';

const Cta: React.FC = () => {
  return (
    <section className="relative bg-accent flex flex-col items-center overflow-hidden px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <img src={blueprintBg} alt="" className="absolute inset-0 size-full object-cover opacity-10" />

      <div className="relative flex flex-col gap-8 items-center max-w-7xl w-full text-center">
        <h2 className="font-light text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15]">Ready to Optimize Your Production?</h2>

        <p className="font-light text-white text-lg md:text-xl leading-7 max-w-3xl tracking-[-0.02px]">
          Our multi-disciplinary team is ready to design a tailored solution that meets your specific technical and commercial requirements.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center pt-4">
          <a href="#" className="bg-secondary rounded-full px-10 py-5 font-light text-white text-lg whitespace-nowrap">
            Contact Our Specialists
          </a>

          <a href="#" className="border border-white rounded-full px-10 py-5 font-light text-white text-lg whitespace-nowrap">
            Download Capability Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
