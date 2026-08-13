import Hero from '../components/features/hseq/hero';
import Standards from '../components/features/hseq/standards';
import Pillars from '../components/features/hseq/pillars';
import CultureOfSafety from '../components/features/hseq/culture-of-safety';
import Ecosystem from '../components/features/hseq/ecosystem';
import OperationalConfidence from '../components/features/hseq/operational-confidence';
import FinalCta from '../components/features/hseq/final-cta';

const HseqPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Standards />
      <Pillars />
      <CultureOfSafety />
      <Ecosystem />
      <OperationalConfidence />
      <FinalCta />
    </div>
  );
};

export default HseqPage;
