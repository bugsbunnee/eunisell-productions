import Hero from '../components/features/projects/hero';
import Intro from '../components/features/projects/intro';
import FeaturedFieldDevelopment from '../components/features/projects/featured-field-development';
import DualTestingCards from '../components/features/projects/dual-testing-cards';
import FeaturedAcceleratedEpf from '../components/features/projects/featured-accelerated-epf';
import FieldOperationsBanner from '../components/features/projects/field-operations-banner';
import CaseStudies from '../components/features/projects/case-studies';
import Gallery from '../components/features/projects/gallery';
import Cta from '../components/features/projects/cta';

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <FeaturedFieldDevelopment />
      <DualTestingCards />
      <FeaturedAcceleratedEpf />
      <FieldOperationsBanner />
      <CaseStudies />
      <Gallery />
      <Cta />
    </div>
  );
};

export default ProjectsPage;
