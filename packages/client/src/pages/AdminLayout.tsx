import { Outlet } from 'react-router-dom';
import Sidebar from '../components/features/admin/layout/sidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="admin flex h-svh w-full overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-background text-foreground font-sans">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
