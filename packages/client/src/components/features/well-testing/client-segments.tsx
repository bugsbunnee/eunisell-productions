import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import marginalIcon from '../../../assets/icons/well-testing/client-marginal.svg';
import independentIcon from '../../../assets/icons/well-testing/client-independent.svg';
import iocIcon from '../../../assets/icons/well-testing/competitor-niche.svg';
import epfIcon from '../../../assets/icons/well-testing/client-epf.svg';

const clients = [
  { icon: marginalIcon, title: ['Marginal Field', 'Operators'] },
  { icon: independentIcon, title: ['Independent Oil', 'Companies'] },
  { icon: iocIcon, title: ['IOCs'] },
  { icon: epfIcon, title: ['EPF/CPF Operators'] },
];

const ClientSegments: React.FC = () => {
  return (
    <section className="bg-ice-blue flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <div className="flex flex-col gap-16 w-full max-w-360 mx-auto">
        <FadeIn className="flex flex-col gap-4 items-start">
          <div className="flex gap-4 items-center">
            <div className="bg-secondary h-0.5 w-12" />
            <p className="font-light text-secondary text-[13px] tracking-[4px] uppercase">Potential Clients</p>
          </div>
          <h2 className="font-light text-accent text-[28px] md:text-[36px] lg:text-[44px] leading-[1.3]">Client Segments</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {clients.map(({ icon, title }) => (
            <StaggerItem
              key={title.join(' ')}
              hover
              className="bg-white border border-line rounded-2xl drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-5 items-start p-10 h-full"
            >
              <div className="bg-ice-blue rounded-xl flex items-center justify-center shrink-0 size-12">
                <img src={icon} alt="" className="size-6" />
              </div>
              <h3 className="font-light text-accent text-lg leading-7">
                {title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default ClientSegments;
