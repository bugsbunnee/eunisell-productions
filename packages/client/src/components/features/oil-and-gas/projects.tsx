import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { FadeIn, Stagger, StaggerItem } from '../../common/motion';

import omlAtala from '/oil-and-gas/project-oml-46.jpg';
import omlDelta from '/oil-and-gas/project-oml-56.jpg';
import oml30 from '/oil-and-gas/project-oml-30.jpg';

const projects = [
  { image: omlAtala, badge: 'PRODUCTION FACILITIES', title: 'OML 46 Atala', description: 'Full production operations and facility maintenance support.' },
  { image: omlDelta, badge: 'WELL SERVICES', title: 'OML 56 Delta State', description: 'Integrated well testing and evaluation for asset optimization.' },
  { image: oml30, badge: 'ASSET INTEGRITY', title: 'OML 30', description: 'Ongoing maintenance and production enhancement interventions.' },
];

const Projects: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-9 md:px-16 lg:px-36 py-16 lg:py-36">
      <FadeIn className="flex flex-col gap-15 items-center max-w-360 w-full">
        <div className="flex items-end justify-between w-full">
          <h2 className="font-inter font-semibold text-accent text-4xl leading-normal">Featured Projects</h2>
          <Link to={paths.projects} className="font-inter font-bold text-secondary text-base border-b-2 border-secondary pb-1 whitespace-nowrap">
            View All Projects
          </Link>
        </div>

        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {projects.map(({ image, badge, title, description }) => (
            <StaggerItem key={title} hover className="flex flex-col gap-6 items-start">
              <div className="h-87.5 w-full rounded-[16px] overflow-hidden">
                <img src={image} alt={title} className="size-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="font-inter font-bold text-secondary text-sm">{badge}</p>
                <h3 className="font-inter font-bold text-accent text-xl leading-normal">{title}</h3>
                <p className="font-inter text-navy-subtle text-base leading-normal">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>
    </section>
  );
};

export default Projects;
