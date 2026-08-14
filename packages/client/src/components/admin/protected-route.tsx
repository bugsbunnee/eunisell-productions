import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth.store';
import { adminPaths } from '../../lib/data';

const ProtectedRoute: React.FC = () => {
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to={adminPaths.login} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
