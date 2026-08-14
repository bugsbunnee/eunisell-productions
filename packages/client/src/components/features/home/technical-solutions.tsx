import { useNavigate } from 'react-router-dom';
import epcWatermark from '../../../assets/icons/home/epc-watermark.svg';
import { paths } from '../../../lib/data';

const services = [
  {
    badge: 'EPC DELIVERY',
    title: 'Engineering, Procurement & Construction',
    description:
      'From concept to completion, Eunisell delivers integrated EPC solutions for production facilities, gathering systems, process upgrades, and field infrastructure. Our project teams manage engineering, procurement, construction, installation, testing, and commissioning while ensuring projects are delivered safely, on schedule, and within budget.',
    cta: 'Explore EPC Services →',
    path: paths.epc,
    gradient: 'linear-gradient(144.5deg, rgb(0, 24, 40) 0%, rgb(0, 62, 97) 50%, rgb(0, 16, 32) 100%)',
    watermark: true,
  },
  {
    badge: 'FIELD SERVICES',
    title: 'Installation & Commissioning',
    description:
      'We provide complete installation and commissioning services for production equipment and facilities, ensuring systems are safely installed, thoroughly tested, and fully operational before handover.',
    cta: 'Explore Service →',
    path: paths.services,
    gradient: 'linear-gradient(144.5deg, rgb(13, 27, 42) 0%, rgb(27, 58, 92) 50%, rgb(13, 27, 42) 100%)',
  },
  {
    badge: 'ENGINEERING',
    title: 'Engineering Design (FEED & DED)',
    description:
      'Our engineering team develops robust Front-End Engineering Design (FEED) and Detailed Engineering Design (DED) packages that reduce project risk, improve constructability, and optimize capital investment.',
    cta: 'Explore Service →',
    path: paths.services,
    gradient: 'linear-gradient(144.5deg, rgb(10, 22, 40) 0%, rgb(0, 85, 142) 50%, rgb(0, 20, 40) 100%)',
  },
  {
    badge: 'OPTIMIZATION',
    title: 'Production Improvement',
    description:
      'We help operators increase production efficiency through engineering interventions, production diagnostics, process optimization, and field improvement initiatives.',
    cta: 'Explore Service →',
    path: paths.services,
    gradient: 'linear-gradient(144.5deg, rgb(0, 16, 32) 0%, rgb(0, 46, 74) 50%, rgb(0, 24, 40) 100%)',
  },
];

const TechnicalSolutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-ice-blue flex flex-col items-center px-9 md:px-16 lg:px-36 py-24 lg:py-35">
      <div className="flex flex-col gap-16 items-start max-w-360 w-full">
        <div className="flex flex-col gap-4 items-center w-full">
          <p className="font-light text-secondary text-lg text-center">FEATURED SERVICES</p>
          <h2 className="font-light text-accent text-[32px] md:text-[42px] lg:text-[52px] text-center tracking-[-0.05px]">Engineering &amp; Technical Solutions</h2>
          <p className="font-light text-navy-subtle text-lg text-center max-w-141.5">Delivering technical excellence across the full scope of production engineering.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 w-full">
          {services.map(({ badge, title, description, cta, path, gradient, watermark }) => (
            <div key={title} className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-12 min-h-120" style={{ backgroundImage: gradient }}>
              {watermark && <img src={epcWatermark} alt="" className="absolute left-0 top-0 size-10 opacity-30" />}

              <div className="flex flex-col gap-3.75 items-start relative">
                <span className="border border-white rounded-full px-3 py-1 font-light text-white text-xs tracking-[0.15px]">{badge}</span>
                <h3 className="font-light text-white text-[32px] leading-[36.8px] tracking-[-0.03px] pt-2">{title}</h3>
                <p className="font-light text-white text-base leading-[27.2px]">{description}</p>
              </div>

              <div className="border-t border-white pt-6 mt-16 relative">
                <button type="button" onClick={() => navigate(path)} className="font-light text-white text-sm">
                  {cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSolutions;
