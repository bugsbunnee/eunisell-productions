import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const badges = ['ISO 9001 Certified', '20+ Years Experience', 'Global Operations', 'HSE Excellence'];

const Cta: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-deep-navy flex flex-col items-center py-16 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-deep-navy to-accent" />
      <div className="absolute bg-primary blur-[80px] opacity-20 -right-100 -top-100 rounded-full size-200 pointer-events-none" />

      <div className="relative flex flex-col items-center px-9 md:px-16 lg:px-36 w-full">
        <h2 className="font-light text-white text-[36px] md:text-[50px] lg:text-[64px] leading-[1.125] tracking-[-0.2px] text-center max-w-225 pb-8">
          Ready to Optimize Your
          <br />
          Production Assets?
        </h2>

        <p className="font-light text-navy-subtle text-lg lg:text-xl leading-[1.8] text-center max-w-200 pb-12">
          Whether you require engineering support, production optimization, or complete EPC project delivery, Eunisell has the expertise to help you achieve safer operations.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          <button
            type="button"
            onClick={() => navigate(paths.contact)}
            className="bg-secondary rounded-full shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] px-10 py-5.5 font-light text-white text-base whitespace-nowrap"
          >
            Contact Our Production Solutions Team
          </button>
          <button type="button" onClick={() => navigate(paths.contact)} className="border-2 border-white rounded-full px-10 py-5 font-light text-white text-base whitespace-nowrap">
            Request a Technical Consultation
          </button>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-center opacity-60 pt-16">
          {badges.map((badge, index) => (
            <span key={badge} className="flex items-center gap-8 font-light text-white text-sm whitespace-nowrap">
              {badge}
              {index < badges.length - 1 && <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;
