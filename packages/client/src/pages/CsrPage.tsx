import Hero from '../components/features/csr/hero';
import FocusAreas from '../components/features/csr/focus-areas';
import ImpactGallery from '../components/features/csr/impact-gallery';
import Pillars from '../components/features/csr/pillars';
import Governance from '../components/features/csr/governance';
import FinalCta from '../components/features/csr/final-cta';

const CsrPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FocusAreas />
      <ImpactGallery />
      <Pillars />
      <Governance />
      <FinalCta />
    </div>
  );
};

export default CsrPage;
