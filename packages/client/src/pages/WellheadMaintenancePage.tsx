import ServiceDetailPage from '../components/features/service-detail/service-detail-page';
import { wellheadMaintenanceData } from '../components/features/service-detail/data/wellhead-maintenance.data';

const WellheadMaintenancePage: React.FC = () => <ServiceDetailPage data={wellheadMaintenanceData} />;

export default WellheadMaintenancePage;
