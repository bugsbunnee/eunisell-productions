import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import ofsIcon from '../../../assets/icons/well-testing/competitor-ofs.svg';
import nicheIcon from '../../../assets/icons/well-testing/competitor-niche.svg';
import inhouseIcon from '../../../assets/icons/well-testing/competitor-inhouse.svg';

const competitors = [
  { icon: ofsIcon, title: 'Global OFS Majors', description: ['Dominate large-scale SWT/EWT', 'campaigns with global equipment fleets'] },
  { icon: nicheIcon, title: 'Niche Testing Contractors', description: ['Single-discipline crews focused only on', 'flow testing'] },
  { icon: inhouseIcon, title: 'In-House Operator Crews', description: ['Some IOCs run internal test teams for', 'routine wells'] },
];

const CompetitiveLandscape: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-col gap-16 w-full max-w-360 mx-auto">
        <FadeIn className="flex flex-col gap-4 items-start">
          <div className="flex gap-4 items-center">
            <div className="bg-secondary h-0.5 w-12" />
            <p className="font-light text-secondary text-[17px] tracking-[4px] uppercase">Who Else Operates Here</p>
          </div>
          <h2 className="font-light text-accent text-[28px] md:text-[36px] lg:text-[44px] leading-[1.3]">Competitive Landscape</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {competitors.map(({ icon, title, description }) => (
            <StaggerItem
              key={title}
              hover
              className="bg-white border border-line rounded-2xl drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-5 items-start p-10 h-full"
            >
              <div className="bg-ice-blue rounded-xl flex items-center justify-center shrink-0 size-12">
                <img src={icon} alt="" className="size-5" />
              </div>
              <h3 className="font-light text-accent text-xl leading-7.5">{title}</h3>
              <p className="font-light text-navy-subtle text-base leading-6.5">
                {description.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default CompetitiveLandscape;
