import footballImg from '/csr/football-development.png';
import youthImg from '/csr/youth-development.png';

const areas = [
  {
    image: footballImg,
    title: 'Football Development',
    description:
      'Eunisell & Abia Warriors FC Our partnership with Abia Warriors Football Club represents a multi-year commitment to elevating Nigerian football to international standards. By investing in the club, we are investing in the ecosystem that supports players, coaching staff, and local fans.',
  },
  {
    image: youthImg,
    title: 'Youth Development',
    description:
      "The Eunisell Boot Awards celebrates individual excellence, motivate Nigerian Professional League footballers to improve their performance, and generate greater interest and support for Nigerian domestic football. Beyond rewarding goalscoring, the Eunisell Boot represents Eunisell's broader commitment to sports development, Nigerian talent and the growth of the domestic football league. The initiative seeks to inspire footballers, raise the profile of home-grown football talent and encourage greater corporate support for the Nigerian league.",
  },
];

const FocusAreas: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 pt-16 lg:pt-25 pb-16">
      <div className="flex flex-col gap-16 items-center w-full max-w-360">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-[48px] leading-normal text-center">CSR Focus Areas</h2>
          <div className="bg-secondary h-0.75 w-16" />
        </div>

        <div className="flex flex-col gap-8 items-start w-full">
          {areas.map(({ image, title, description }) => (
            <div key={title} className="grid grid-cols-1 md:grid-cols-[384px_1fr] w-full bg-white rounded-2xl shadow-[0px_4px_32px_0px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="h-70 md:h-full">
                <img src={image} alt={title} className="size-full object-cover" />
              </div>
              <div className="flex flex-col items-start justify-center gap-4 p-8 md:p-12">
                <h3 className="font-light text-accent text-2xl tracking-[-0.02px]">{title}</h3>
                <p className="font-light text-[#535353] text-base leading-[25.6px]">{description}</p>
                <a href="#" className="font-light text-secondary text-sm pt-1">
                  CTA Placeholder →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
