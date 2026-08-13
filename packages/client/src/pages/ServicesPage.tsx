import Hero from '../components/features/services/hero';
import Intro from '../components/features/services/intro';
import ServiceGrid from '../components/features/services/service-grid';
import Cta from '../components/features/services/cta';
import FinalCta from '../components/features/services/final-cta';

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <ServiceGrid />
      <Cta />
      <FinalCta />
    </div>
  );
};

export default ServicesPage;
