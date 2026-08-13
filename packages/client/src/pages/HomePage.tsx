import Hero from '../components/features/home/hero';
import Expertise from '../components/features/home/expertise';
import Capabilities from '../components/features/home/capabilities';
import TechnicalSolutions from '../components/features/home/technical-solutions';
import WhyEunisell from '../components/features/home/why-eunisell';
import Industries from '../components/features/home/industries';
import Process from '../components/features/home/process';
import Hseq from '../components/features/home/hseq';
import FinalCta from '../components/features/home/final-cta';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Expertise />
      <Capabilities />
      <TechnicalSolutions />
      <WhyEunisell />
      <Industries />
      <Process />
      <Hseq />
      <FinalCta />
    </div>
  );
};

export default HomePage;
