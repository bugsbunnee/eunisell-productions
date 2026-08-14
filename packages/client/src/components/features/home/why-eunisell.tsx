import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const reasons = [
  { number: '01', title: 'Multidisciplinary engineering expertise', description: ['Highly skilled multidisciplinary engineering teams', 'utilizing advanced technologies.'] },
  { number: '02', title: 'Proven project delivery capability', description: ['Over two decades of consistent delivery across', 'complex production environments.'] },
  { number: '03', title: 'Strong HSE culture', description: ['Uncompromising dedication to zero-incident', 'operations across all our facilities.'] },
  { number: '04', title: 'Experienced field personnel', description: ['Strong commitment to developing local capacity and', 'sustainable community relations.'] },
  { number: '05', title: 'Global technology partnerships', description: ['Collaborations with global technology leaders to', 'deliver best-in-class solutions.'] },
  { number: '06', title: 'Rapid mobilization', description: ['Seamless coordination from conceptual design', 'through to field execution and maintenance.'] },
  { number: '07', title: 'Quality-driven execution', description: ['Optimized solutions designed to maximize ROI', 'without compromising quality or safety.'] },
  { number: '08', title: 'End-to-end production support', description: ['Flexible project delivery models tailored to meet', 'specific client operational requirements.'] },
  { number: '09', title: 'Local expertise with international standards', description: ['Strong commitment to developing local capacity and', 'sustainable community relations.'] },
];

const WhyEunisell: React.FC = () => {
  return (
    <section className="bg-accent flex flex-col items-center px-9 md:px-16 lg:px-36 py-24 lg:py-35">
      <div className="flex flex-col gap-16 items-start max-w-360 w-full">
        <FadeIn className="flex flex-col gap-4 items-center w-full">
          <p className="font-light text-secondary text-lg text-center tracking-[3.85px]">WHY EUNISELL</p>
          <h2 className="font-light text-white text-[36px] md:text-[46px] lg:text-[56px] text-center tracking-[-0.11px] leading-[1.2] lg:leading-[84px]">
            Trusted Production Partner
          </h2>
          <p className="font-light text-navy-subtle text-lg text-center max-w-160">
            Operators choose Eunisell because we combine engineering expertise with decades of field experience.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {reasons.map(({ number, title, description }) => (
            <StaggerItem key={number} hover className="bg-white border border-secondary rounded-xl flex gap-5 items-start p-8 h-full">
              <div className="bg-secondary h-12 w-0.75 shrink-0" />
              <div className="flex flex-col gap-1 items-start">
                <p className="font-light text-secondary text-[11px] tracking-[0.55px]">{number}</p>
                <h3 className="font-light text-accent text-lg leading-[27px]">{title}</h3>
                <p className="font-light text-navy-subtle text-sm leading-[23.1px] pt-1">
                  {description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default WhyEunisell;
