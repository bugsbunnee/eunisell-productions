import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

const challenges = [
  { title: 'Production Decline', description: 'Addressing natural field depletion with secondary recovery techniques.' },
  { title: 'Facility Bottlenecks', description: 'Optimizing throughput via technical debottlenecking studies.' },
  { title: 'Equipment Reliability', description: 'Proactive maintenance to ensure mission-critical hardware performance.' },
  { title: 'Unplanned Downtime', description: 'Reducing disruptions through rigorous asset integrity programs.' },
  { title: 'Flow Assurance', description: 'Managing waxes, hydrates, and scale to maintain constant production.' },
  { title: 'Water Management', description: 'Efficient handling and disposal of high-volume produced water.' },
  { title: 'Mature Asset Performance', description: 'Extending economic life through late-life optimization strategies.' },
  { title: 'Operational Risk', description: 'Mitigating HSEQ and security risks in challenging environments.' },
];

const Challenges: React.FC = () => {
  return (
    <section className="bg-accent flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-36">
      <div className="flex flex-col gap-20 items-center max-w-360 w-full">
        <FadeIn>
          <h2 className="font-inter font-semibold text-white text-4xl leading-normal text-center">Overcoming Critical Production Challenges</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {challenges.map(({ title, description }) => (
            <StaggerItem key={title} className="flex flex-col gap-3 items-start border-l border-secondary pl-6">
              <h3 className="font-inter font-bold text-white text-lg leading-normal">{title}</h3>
              <p className="font-inter text-white/60 text-sm leading-normal">{description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Challenges;
