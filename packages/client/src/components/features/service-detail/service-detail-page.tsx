import Hero from './hero';
import Overview from './overview';
import KeyCapabilities from './key-capabilities';
import DeliveryApproach from './delivery-approach';
import WhyChooseUs from './why-choose-us';
import Cta from './cta';
import type { ServiceDetailData } from './types';

interface ServiceDetailPageProps {
  data: ServiceDetailData;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <Hero breadcrumbLabel={data.breadcrumbLabel} heading={data.heroHeading} description={data.heroDescription} />
      <Overview heading={data.overviewHeading} paragraphs={data.overviewParagraphs} image={data.overviewImage} imageAlt={data.overviewImageAlt} />
      <KeyCapabilities heading={data.capabilitiesHeading} capabilities={data.capabilities} />
      <DeliveryApproach />
      <WhyChooseUs heading={data.whyChooseUsHeading} points={data.whyChooseUsPoints} />
      <Cta heading={data.ctaHeading} description={data.ctaDescription} />
    </div>
  );
};

export default ServiceDetailPage;
