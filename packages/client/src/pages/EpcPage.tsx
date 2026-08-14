import Hero from '../components/features/epc/hero';
import Management from '../components/features/epc/management';
import KeyCapabilities from '../components/features/epc/key-capabilities';
import DeliveryApproach from '../components/features/epc/delivery-approach';
import WhyChooseUs from '../components/features/epc/why-choose-us';
import Cta from '../components/features/epc/cta';

const EpcPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Management />
      <KeyCapabilities />
      <DeliveryApproach />
      <WhyChooseUs />
      <Cta />
    </div>
  );
};

export default EpcPage;
