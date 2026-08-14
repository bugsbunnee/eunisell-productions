import { Stagger, StaggerItem } from '../../common/motion';

import peopleImg from '/csr/pillar-people.png';
import communitiesImg from '/csr/pillar-communities.png';
import environmentImg from '/csr/pillar-environment.png';

const pillars = [
  {
    image: peopleImg,
    title: 'People',
    description:
      'At Eunisell, we believe that sustainable impact begins with people. Our people-focused CSR initiatives are designed to empower individuals, nurture talent, support communities and create opportunities for meaningful growth. Through strategic investments in education, sports, youth development and community support, Eunisell seeks to make a positive and lasting difference in the lives of people while contributing to the development of the communities in which we operate.',
  },
  {
    image: communitiesImg,
    title: 'Communities',
    description:
      'At Eunisell, we recognise that strong businesses thrive within strong communities. Our community-focused CSR initiatives are centred on supporting local communities, addressing critical needs and contributing to sustainable social and economic development. Through targeted interventions and partnerships, Eunisell seeks to create meaningful impact, improve livelihoods and build stronger, more resilient communities.',
  },
  {
    image: environmentImg,
    title: 'Environment',
    description:
      'At Eunisell, we are committed to promoting responsible business practices that protect and preserve the environment for future generations. Our environment-focused CSR initiatives support environmental sustainability, responsible resource use, pollution reduction and greater awareness of environmental stewardship. Through practical interventions and collaborative efforts, Eunisell seeks to minimise its environmental footprint while contributing to cleaner, healthier and more sustainable communities.',
  },
];

const Pillars: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-start px-9 md:px-16 lg:px-36 py-16 lg:py-32">
      <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 w-full max-w-360 mx-auto">
        {pillars.map(({ image, title, description }) => (
          <StaggerItem key={title} className="flex flex-col gap-8 items-start">
            <div className="rounded-2xl overflow-hidden h-75 w-full">
              <img src={image} alt={title} className="size-full object-cover transition-transform duration-500 ease-out hover:scale-105" />
            </div>
            <div className="border-l-4 border-secondary pl-6 flex flex-col gap-3.5 items-start">
              <h3 className="font-light text-accent text-[28px] leading-[42px]">{title}</h3>
              <p className="font-light text-[#6c6c6c] text-sm leading-[25.6px]">{description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default Pillars;
