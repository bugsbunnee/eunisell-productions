import ServiceDetailPage from '../components/features/service-detail/service-detail-page';
import { operationsMaintenanceData } from '../components/features/service-detail/data/operations-maintenance.data';

const OperationsMaintenancePage: React.FC = () => <ServiceDetailPage data={operationsMaintenanceData} />;

export default OperationsMaintenancePage;
