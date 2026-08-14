import ServiceDetailPage from '../components/features/service-detail/service-detail-page';
import { productionFacilitiesData } from '../components/features/service-detail/data/production-facilities.data';

const ProductionFacilitiesPage: React.FC = () => <ServiceDetailPage data={productionFacilitiesData} />;

export default ProductionFacilitiesPage;
