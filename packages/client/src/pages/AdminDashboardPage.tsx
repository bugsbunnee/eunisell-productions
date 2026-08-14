import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FileText, Loader2 } from 'lucide-react';
import { adminPaths } from '../lib/data';
import { useAuthStore } from '../stores/auth.store';

import blogService from '../services/blog.service';
import dayjs from '../lib/dayjs';

import PublishingChart from '../components/features/admin/dashboard/publishing-chart';
import StatTile from '../components/features/admin/dashboard/stat-tile';
import StatusStamp from '../components/features/admin/blog/status-stamp';

const AdminDashboardPage: React.FC = () => {
  const admin = useAuthStore((state) => state.admin);
  const { data, isLoading } = useQuery({ queryKey: ['blog-stats'], queryFn: () => blogService.stats() });

  return (
    <div className="flex flex-col gap-8 px-10 py-9 max-w-300">
      <div className="flex flex-col gap-1">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{dayjs().format('dddd, MMMM D YYYY')}</p>
        <h1 className="text-2xl font-semibold text-foreground">Welcome back{admin?.firstName ? `, ${admin.firstName}` : ''}</h1>
      </div>

      {isLoading || !data ? (
        <div className="flex items-center justify-center py-24 text-muted-foreground">
          <Loader2 className="size-5 animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <StatTile value={data.total} label="Total posts" accent="var(--foreground)" />
            <StatTile value={data.published} label="Published" accent="var(--chart-2)" />
            <StatTile value={data.draft} label="Drafts" accent="var(--stamp-draft)" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6">
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">Publishing pace</h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Last 6 months</span>
              </div>
              <PublishingChart data={data.monthlyPosts} />
            </div>

            <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">Recent activity</h2>
                <Link to={adminPaths.blog} className="text-xs font-medium text-primary hover:underline">
                  View all
                </Link>
              </div>

              {data.recentActivity.length === 0 ? (
                <div className="flex flex-col items-center gap-2 py-10 text-center text-muted-foreground">
                  <FileText className="size-6" strokeWidth={1.5} />
                  <p className="text-sm">No posts yet — create the first entry in the register.</p>
                </div>
              ) : (
                <ul className="flex flex-col gap-1">
                  {data.recentActivity.map((post) => (
                    <li key={post.id}>
                      <Link to={adminPaths.blogEdit(post.id)} className="flex items-center justify-between gap-3 rounded-md px-2 py-2.5 -mx-2 hover:bg-muted transition-colors">
                        <span className="text-sm text-foreground truncate">{post.title}</span>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-mono text-[11px] text-muted-foreground">{dayjs(post.updatedAt).fromNow()}</span>
                          <StatusStamp status={post.status} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboardPage;
