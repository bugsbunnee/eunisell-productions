import Hero from '../components/features/about/hero';
import Overview from '../components/features/about/overview';
import ExecutiveSummary from '../components/features/about/executive-summary';
import ServiceLines from '../components/features/about/service-lines';
import ValueChain from '../components/features/about/value-chain';
import WhyEunisell from '../components/features/about/why-eunisell';
import Industries from '../components/features/about/industries';
import DeliveryApproach from '../components/features/about/delivery-approach';
import HseqSafety from '../components/features/about/hseq-safety';
import FinalCta from '../components/features/home/final-cta';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Overview />
      <ExecutiveSummary />
      <ServiceLines />
      <ValueChain />
      <WhyEunisell />
      <Industries />
      <DeliveryApproach />
      <HseqSafety />
      <FinalCta />
    </div>
  );
};

export default AboutPage;
