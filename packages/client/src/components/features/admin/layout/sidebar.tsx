import { useState } from 'react';
import { LayoutDashboard, Newspaper, LibraryBig, LogOut, ExternalLink, PanelLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminPaths, paths } from '../../../../lib/data';
import { useAuthStore } from '../../../../stores/auth.store';
import { cn } from '../../../../lib/utils';
import logo from '/general/full-logo.png';

const navSections = [
  {
    label: 'Overview',
    items: [{ label: 'Dashboard', to: adminPaths.dashboard, icon: LayoutDashboard, end: true }],
  },
  {
    label: 'Content',
    items: [
      { label: 'Blog Posts', to: adminPaths.blog, icon: Newspaper, end: false },
      { label: 'Knowledge Centre', to: adminPaths.knowledgeCentre, icon: LibraryBig, end: false },
    ],
  },
];

const Sidebar: React.FC = () => {
  const admin = useAuthStore((state) => state.admin);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const initials = admin ? `${admin.firstName[0] ?? ''}${admin.lastName[0] ?? ''}`.toUpperCase() : '';

  const handleLogout = () => {
    logout();
    navigate(adminPaths.login, { replace: true });
  };

  return (
    <aside className={cn('flex h-full shrink-0 flex-col border-r border-divider bg-surface-muted transition-[width] duration-200', collapsed ? 'w-16' : 'w-60')}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && <img src={logo} alt="Eunisell" className="h-5 w-auto object-contain" />}
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="flex size-7 shrink-0 items-center justify-center rounded-md text-slate transition-colors hover:bg-divider/60 hover:text-graphite"
        >
          <PanelLeft className="size-4" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto pb-10">
        {navSections.map((section) => (
          <div key={section.label} className="flex flex-col gap-1 p-2">
            {!collapsed && <p className="px-3 py-2 text-xs font-medium uppercase text-smoke">{section.label}</p>}

            {section.items.map(({ label, to, icon: Icon, end }) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                title={collapsed ? label : undefined}
                className={({ isActive }) =>
                  cn(
                    'flex h-8 items-center gap-2 rounded-lg border-l-2 px-3 text-sm transition-colors',
                    isActive ? 'border-secondary bg-divider font-medium text-graphite' : 'border-transparent text-slate hover:bg-divider/50 hover:text-graphite'
                  )
                }
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.75} />
                {!collapsed && <span className="truncate">{label}</span>}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      {!collapsed && (
        <a
          href={paths.home}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-t border-divider px-4 py-3 text-xs text-slate transition-colors hover:text-graphite"
        >
          <ExternalLink className="size-3.5" strokeWidth={1.75} />
          View public site
        </a>
      )}

      <button type="button" onClick={handleLogout} className="flex h-19 w-full items-center gap-2 border-t border-divider p-4 text-left transition-colors hover:bg-divider/50">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-medium text-secondary">{initials}</div>

        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-graphite">
              {admin?.firstName} {admin?.lastName}
            </p>
            <p className="truncate text-xs text-slate">{admin?.email}</p>
          </div>
        )}

        {!collapsed && <LogOut className="size-4 shrink-0 text-slate" />}
      </button>
    </aside>
  );
};

export default Sidebar;
