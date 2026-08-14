import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

import decor1 from '../../../assets/icons/well-testing/partner-decor-1.svg';
import decor2 from '../../../assets/icons/well-testing/partner-decor-2.svg';

const badges = ['ISO 9001 CERTIFIED', 'HSE EXCELLENCE', 'GLOBAL STANDARDS'];

const PartnerCta: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-accent overflow-hidden flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div
        className="absolute inset-0 opacity-4"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgb(255, 255, 255) 1.25%, rgba(255, 255, 255, 0) 1.25%), linear-gradient(90deg, rgb(255, 255, 255) 1.25%, rgba(255, 255, 255, 0) 1.25%)',
        }}
      />
      <img src={decor1} alt="" className="absolute -right-30 -top-30 size-150 opacity-3" />
      <img src={decor2} alt="" className="absolute -left-25 -bottom-25 size-125 opacity-3" />

      <div className="relative flex flex-col gap-8 items-center w-full">
        <div className="flex gap-4 items-center">
          <div className="bg-secondary h-0.5 w-12" />
          <p className="font-light text-secondary text-[13px] tracking-[4px] uppercase">Partner With Eunisell</p>
          <div className="bg-secondary h-0.5 w-12" />
        </div>

        <h2 className="font-light text-white text-[32px] md:text-[44px] lg:text-[56px] text-center leading-[1.2] tracking-[-0.05px] max-w-220">
          Partnering Across the Production Value Chain
        </h2>

        <p className="font-light text-navy-subtle text-lg text-center tracking-[-0.04px] max-w-200">
          Eunisell Production Solutions — Well Testing · Production Facilities · Operations &amp; Maintenance · Water Solutions · Production Solutions · Equipment Solutions ·
          Engineering Solutions
        </p>

        <div className="flex flex-wrap gap-5 items-center justify-center pt-2">
          <button
            type="button"
            onClick={() => navigate(paths.contact)}
            className="bg-secondary rounded-full flex items-center justify-center px-12 py-5 font-light text-white text-base whitespace-nowrap"
          >
            Contact Our Production Solutions Team
          </button>
          <button
            type="button"
            onClick={() => navigate(paths.contact)}
            className="border-2 border-white rounded-full flex items-center justify-center px-12 py-5 font-light text-white text-base whitespace-nowrap"
          >
            Request Technical Consultation
          </button>
        </div>

        <div className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center opacity-40 pt-6">
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

export default PartnerCta;
