import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { scrollToView } from '../../../lib/utils';

const badges = ['ISO 9001 Certified', '20+ Years Experience', 'Global Operations', 'HSE Excellence'];

interface FinalCtaProps {
  scrollTargetId?: string;
}

const FinalCta: React.FC<FinalCtaProps> = ({ scrollTargetId }) => {
  const navigate = useNavigate();
  const handleCtaClick = () => (scrollTargetId ? scrollToView(scrollTargetId) : navigate(paths.contact));

  return (
    <section className="relative bg-deep-navy flex flex-col items-center px-9 md:px-16 lg:px-36 py-24 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1.25%, rgba(255, 255, 255, 0) 1.25%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 1.25%, rgba(255, 255, 255, 0) 1.25%)',
        }}
      />
      <div className="absolute bg-primary blur-[60px] rounded-full size-200 -right-30 -top-100 pointer-events-none" />

      <div className="relative flex flex-col gap-8 items-center max-w-215 w-full text-center">
        <h2 className="font-light text-white text-[36px] md:text-[50px] lg:text-[64px] leading-[1.05] lg:leading-[67.2px]">
          Let&apos;s Improve Your
          <br />
          Production Performance
        </h2>

        <p className="font-light text-navy-subtle text-lg md:text-xl leading-9 max-w-198">
          Whether you require engineering support, production optimization, maintenance services, or complete EPC project delivery, Eunisell has the expertise and resources to help
          you achieve safer, more efficient, and more reliable production operations.
        </p>

        <div className="flex flex-wrap gap-5 items-center justify-center pt-6">
          <button type="button" onClick={handleCtaClick} className="bg-secondary rounded-full px-10 py-5 font-light text-white text-base whitespace-nowrap">
            Contact Our Production Solutions Team
          </button>
          <button type="button" onClick={handleCtaClick} className="border-2 border-white rounded-full px-10 py-5 font-light text-white text-base whitespace-nowrap">
            Request a Technical Consultation
          </button>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-center pt-4">
          {badges.map((badge, index) => (
            <span key={badge} className="flex items-center gap-8 font-light text-white text-sm whitespace-nowrap">
              {badge}
              {index < badges.length - 1 && <span aria-hidden="true">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
