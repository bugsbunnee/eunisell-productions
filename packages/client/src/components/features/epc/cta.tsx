import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const badges = ['ISO 9001 Certified', 'HSE Excellence', 'Global Operations'];

const Cta: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-deep-navy flex flex-col items-center py-16 lg:py-40 overflow-hidden">
      <div className="absolute bg-primary blur-[60px] -right-100 -top-100 rounded-full size-200 pointer-events-none" />

      <div className="relative flex flex-col items-center px-9 md:px-16 lg:px-36 w-full">
        <h2 className="font-light text-white text-[36px] md:text-[50px] lg:text-[64px] leading-[1.25] text-center max-w-225 pb-8">
          Deliver Your Next EPC
          <br />
          Project With Confidence
        </h2>

        <p className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.8] text-center max-w-200 pb-12">
          From concept engineering through commissioning, we provide practical solutions built around safety, quality, and operational excellence.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          <button type="button" onClick={() => navigate(paths.contact)} className="bg-secondary rounded-full px-12 py-5 font-light text-white text-base whitespace-nowrap">
            Contact Our Engineers
          </button>

          <button type="button" onClick={() => navigate(paths.contact)} className="border border-white rounded-full px-12 py-5 font-light text-white text-base whitespace-nowrap">
            Request Technical Consultation
          </button>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-center opacity-40 pt-16">
          {badges.map((badge, index) => (
            <span key={badge} className="flex items-center gap-8 font-light text-white text-sm tracking-[1.4px] uppercase whitespace-nowrap">
              {badge}
              {index < badges.length - 1 && <span aria-hidden="true" className="size-1 rounded-full bg-white" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;
