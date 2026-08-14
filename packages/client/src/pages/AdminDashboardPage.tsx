import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { CalendarCheck, CircleCheck, CircleDashed, FileText, History, Newspaper, Percent } from 'lucide-react';
import { adminPaths } from '../lib/data';
import { useAuthStore } from '../stores/auth.store';

import blogService from '../services/blog.service';
import activityService from '../services/activity.service';
import dayjs from '../lib/dayjs';

import MetricSummary, { type Metric } from '../components/features/admin/dashboard/metric-summary';
import PublishingTrendChart from '../components/features/admin/dashboard/publishing-trend-chart';
import ChartLegend from '../components/features/admin/dashboard/chart-legend';
import CategoryBarChart from '../components/features/admin/dashboard/category-bar-chart';
import ActivityFeed from '../components/features/admin/dashboard/activity-feed';
import DashboardSkeleton from '../components/features/admin/dashboard/dashboard-skeleton';
import StatusStamp from '../components/features/admin/blog/status-stamp';

const AdminDashboardPage: React.FC = () => {
  const admin = useAuthStore((state) => state.admin);
  const { data, isLoading } = useQuery({ queryKey: ['blog-stats'], queryFn: () => blogService.stats() });
  const { data: activity, isLoading: isActivityLoading } = useQuery({ queryKey: ['activity-recent'], queryFn: () => activityService.recent(8) });

  const metrics: Metric[] = data
    ? [
        { label: 'Total posts', value: String(data.total), icon: Newspaper },
        { label: 'Published', value: String(data.published), icon: CircleCheck },
        { label: 'Drafts', value: String(data.draft), icon: CircleDashed },
        { label: 'Publish rate', value: data.total > 0 ? `${Math.round((data.published / data.total) * 100)}%` : '—', icon: Percent },
        { label: 'Published this month', value: String(data.monthlyBreakdown.at(-1)?.published ?? 0), icon: CalendarCheck },
        { label: 'Updated this week', value: String(data.recentActivity.filter((post) => dayjs().diff(dayjs(post.updatedAt), 'day') <= 7).length), icon: History },
      ]
    : [];

  return (
    <div className="min-h-full bg-surface-muted px-10 py-9">
      <div className="flex flex-col gap-8 max-w-300">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{dayjs().format('dddd, MMMM D YYYY')}</p>
          <h1 className="text-2xl font-semibold text-foreground">Welcome back{admin?.firstName ? `, ${admin.firstName}` : ''}</h1>
        </div>

        {isLoading || !data ? (
          <DashboardSkeleton />
        ) : (
          <div className="flex flex-col gap-6">
            <MetricSummary metrics={metrics} />

            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
              <div className="flex flex-col gap-5 rounded-2xl bg-primary-foreground p-6 shadow-[0_1px_2px_rgba(16,24,40,0.03),0_8px_24px_-16px_rgba(16,24,40,0.1)]">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-medium text-foreground">Publishing trend</h2>
                  <ChartLegend
                    items={[
                      { label: 'Published', color: 'var(--stamp-published)' },
                      { label: 'Draft', color: 'var(--stamp-draft)' },
                    ]}
                  />
                </div>
                <PublishingTrendChart data={data.monthlyBreakdown} />
              </div>

              <div className="flex flex-col gap-4 rounded-2xl bg-primary-foreground p-6 shadow-[0_1px_2px_rgba(16,24,40,0.03),0_8px_24px_-16px_rgba(16,24,40,0.1)]">
                <h2 className="text-base font-medium text-foreground">Recent activity</h2>
                <div className="max-h-65 overflow-y-auto">
                  {isActivityLoading ? (
                    <div className="flex flex-col gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="h-9 w-full animate-pulse rounded-md bg-muted/25" />
                      ))}
                    </div>
                  ) : (
                    <ActivityFeed items={activity ?? []} />
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
              <div className="flex flex-col gap-4 rounded-2xl bg-primary-foreground p-6 shadow-[0_1px_2px_rgba(16,24,40,0.03),0_8px_24px_-16px_rgba(16,24,40,0.1)]">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-medium text-foreground">Recent posts</h2>
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

              <div className="flex flex-col gap-5 rounded-2xl bg-primary-foreground p-6 shadow-[0_1px_2px_rgba(16,24,40,0.03),0_8px_24px_-16px_rgba(16,24,40,0.1)]">
                <h2 className="text-base font-medium text-foreground">Posts by category</h2>
                {data.categoryBreakdown.length === 0 ? (
                  <div className="flex flex-col items-center gap-2 py-10 text-center text-muted-foreground">
                    <FileText className="size-6" strokeWidth={1.5} />
                    <p className="text-sm">No posts yet — categories will appear here.</p>
                  </div>
                ) : (
                  <CategoryBarChart data={data.categoryBreakdown} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
