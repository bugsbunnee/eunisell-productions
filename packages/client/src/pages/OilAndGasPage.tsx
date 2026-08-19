import Hero from '../components/features/oil-and-gas/hero';
import Intro from '../components/features/oil-and-gas/intro';
import Lifecycle from '../components/features/oil-and-gas/lifecycle';
import Terrain from '../components/features/oil-and-gas/terrain';
import Solutions from '../components/features/oil-and-gas/solutions';
import Challenges from '../components/features/oil-and-gas/challenges';
import Engineering from '../components/features/oil-and-gas/engineering';
import Segments from '../components/features/oil-and-gas/segments';
import WhyChoose from '../components/features/oil-and-gas/why-choose';
import Process from '../components/features/oil-and-gas/process';
import Safety from '../components/features/oil-and-gas/safety';
import Projects from '../components/features/oil-and-gas/projects';
import Cta from '../components/features/oil-and-gas/cta';

const OilAndGasPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <Lifecycle />
      <Terrain />
      <Solutions />
      <Challenges />
      <Engineering />
      <Segments />
      <WhyChoose />
      <Process />
      <Safety />
      <Projects />
      <Cta />
    </div>
  );
};

export default OilAndGasPage;
