import Hero from '../components/features/portfolio/hero';
import Intro from '../components/features/portfolio/intro';
import ServiceGrid from '../components/features/portfolio/service-grid';
import Cta from '../components/features/portfolio/cta';

const PortfolioPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <ServiceGrid />
      <Cta />
    </div>
  );
};

export default PortfolioPage;
