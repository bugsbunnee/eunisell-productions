import decor1 from '../../../assets/icons/hseq/final-cta-decor-1.svg';
import decor2 from '../../../assets/icons/hseq/final-cta-decor-2.svg';

const badges = ['ISO 9001 CERTIFIED', 'HSE EXCELLENCE', 'GLOBAL STANDARDS'];

const FinalCta: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <img src={decor1} alt="" className="absolute -right-40 -top-40 size-200 opacity-3" />
      <img src={decor2} alt="" className="absolute -left-20 -bottom-20 size-150 opacity-3" />

      <div className="relative flex flex-col gap-8 items-center w-full max-w-224">
        <h2 className="font-light text-white text-[36px] md:text-[48px] lg:text-[64px] text-center leading-[1.1] tracking-[-0.38px]">Partner With a Team That Puts Safety First</h2>

        <p className="font-light text-navy-subtle text-lg md:text-xl text-center tracking-[-0.1px] max-w-168">
          Contact our HSEQ specialists to learn more about our commitment to operational integrity and project excellence.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center pt-2">
          <a href="#" className="bg-secondary rounded-full flex items-center justify-center px-12 py-6.5 font-light text-white text-base whitespace-nowrap">
            Contact Our Production Team
          </a>
          <a href="#" className="border-2 border-white rounded-full flex items-center justify-center px-12 py-6 font-light text-white text-base whitespace-nowrap">
            Request Technical Consultation
          </a>
        </div>

        <div className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center opacity-40 pt-16">
          {badges.map((badge, index) => (
            <span key={badge} className="flex items-center gap-6 sm:gap-10 font-light text-white text-sm tracking-[2px] whitespace-nowrap">
              {badge}
              {index < badges.length - 1 && <span aria-hidden="true" className="bg-white rounded-full size-1.5 shrink-0" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
