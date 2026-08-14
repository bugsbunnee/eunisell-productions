import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const stats = [
  { value: '07', title: 'Integrated Service Lines', description: 'Comprehensive technical range across production.' },
  { value: '360°', title: 'Wellhead to Midstream', description: 'End-to-end operational coverage.' },
  { value: '07', title: 'Client Segments Served', description: 'Trusted by global and local operators.' },
  { value: 'Eng', title: 'Engineering Led Model', description: 'Technical strategy at the core of delivery.' },
];

const serviceLines = [
  'Engineering Design (FEED & DED)',
  'EPC & Facility Development',
  'Operations & Maintenance',
  'Well Services & Testing',
  'Production Optimization',
  'Water & Sand Management',
  'Asset Integrity Management',
];

const ServiceLines: React.FC = () => {
  return (
    <section className="bg-surface flex flex-col gap-16 lg:gap-30 items-start px-9 md:px-16 lg:px-36 py-16 lg:py-35">
      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {stats.map(({ value, title, description }) => (
          <StaggerItem
            key={title}
            hover
            className="flex flex-col justify-between gap-8 h-75 items-start bg-white border border-line rounded-2xl p-10 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          >
            <p className="font-light text-secondary text-5xl leading-[1.5]">{value}</p>
            <div className="flex flex-col gap-2 items-start">
              <h4 className="font-light text-accent text-xl leading-[1.5]">{title}</h4>
              <p className="font-light text-navy-subtle text-sm leading-[1.5]">{description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn className="flex flex-col gap-12 items-center w-full">
        <h3 className="font-light text-accent text-4xl leading-[1.5] text-center">The Seven Service Lines</h3>

        <Stagger className="flex flex-wrap gap-4 items-center justify-center max-w-288">
          {serviceLines.map((line) => (
            <StaggerItem key={line}>
              <span className="bg-accent rounded-full px-8 py-4 font-light text-white text-[15px] whitespace-nowrap block">{line}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>
    </section>
  );
};

export default ServiceLines;
