import Hero from '../components/features/well-testing/hero';
import Overview from '../components/features/well-testing/overview';
import Capabilities from '../components/features/well-testing/capabilities';
import CompetitiveLandscape from '../components/features/well-testing/competitive-landscape';
import Quote from '../components/features/well-testing/quote';
import RevenueStreams from '../components/features/well-testing/revenue-streams';
import ClientSegments from '../components/features/well-testing/client-segments';
import DeliveryModels from '../components/features/well-testing/delivery-models';
import RelatedServices from '../components/features/well-testing/related-services';
import PartnerCta from '../components/features/well-testing/partner-cta';

const WellTestingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Overview />
      <Capabilities />
      <CompetitiveLandscape />
      <Quote />
      <RevenueStreams />
      <ClientSegments />
      <DeliveryModels />
      <RelatedServices />
      <PartnerCta />
    </div>
  );
};

export default WellTestingPage;
