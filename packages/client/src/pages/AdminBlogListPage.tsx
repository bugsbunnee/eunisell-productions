import { useEffect, useMemo, useState } from 'react';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

import blogService, { type BlogPost, type BlogStatus } from '../services/blog.service';
import { adminPaths } from '../lib/data';
import { getErrorMessage } from '../lib/utils';

import ListStats from '../components/features/admin/blog/list-stats';
import BlogListFilters from '../components/features/admin/blog/blog-list-filters';
import BlogListTable from '../components/features/admin/blog/blog-list-table';
import BlogListPagination from '../components/features/admin/blog/blog-list-pagination';
import BlogDeleteDialog from '../components/features/admin/blog/blog-delete-dialog';

import { Button } from '../components/ui/button';

const PAGE_SIZE_OPTIONS = [10, 20, 50];

const AdminBlogListPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]!);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [status, setStatus] = useState<BlogStatus | 'ALL'>('ALL');
  const [category, setCategory] = useState<string>('ALL');
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => blogService.remove(id),
    onSuccess: () => {
      toast.success('Post deleted');
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['blog-stats'] });
      setDeleteTarget(null);
    },
    onError: (error) => toast.error(getErrorMessage(error) || 'Could not delete the post'),
  });

  const { data: stats } = useQuery({ queryKey: ['blog-stats'], queryFn: () => blogService.stats() });

  const { data, isLoading } = useQuery({
    queryKey: ['blog-posts', page, pageSize, debouncedSearch, status, category, sort],
    queryFn: () => blogService.list({ page, limit: pageSize, search: debouncedSearch || undefined, status, category, sort }),
    placeholderData: keepPreviousData,
  });

  const { posts, total, totalPages } = useMemo(
    () => ({
      posts: data?.data ?? [],
      total: data?.total ?? 0,
      totalPages: data?.totalPages ?? 1,
    }),
    [data]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  const hasActiveFilters = Boolean(debouncedSearch) || status !== 'ALL' || category !== 'ALL';

  return (
    <div className="min-h-full bg-[#F4F4F4] px-10 py-9">
      <div className="flex flex-col gap-6 max-w-300">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{total} entries</p>
            <h1 className="text-2xl font-semibold text-foreground">Blog Posts</h1>
          </div>

          <Button asChild className="rounded-2xl h-10 text-sm px-4">
            <Link to={adminPaths.blogNew}>
              <Plus className="size-4" />
              New Post
            </Link>
          </Button>
        </div>

        <ListStats total={stats?.total ?? 0} published={stats?.published ?? 0} draft={stats?.draft ?? 0} isLoading={!stats} />

        <div className="flex flex-col gap-6 rounded-2xl bg-primary-foreground p-6">
          <BlogListFilters
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={(value) => {
              setCategory(value);
              setPage(1);
            }}
            status={status}
            onStatusChange={(value) => {
              setStatus(value);
              setPage(1);
            }}
          />

          <BlogListTable
            posts={posts}
            isLoading={isLoading}
            skeletonRowCount={Math.min(pageSize, 5)}
            docNumberForIndex={(index) => total - ((page - 1) * pageSize + index)}
            onSortToggle={() => {
              setSort((value) => (value === 'desc' ? 'asc' : 'desc'));
              setPage(1);
            }}
            emptyMessage={hasActiveFilters ? 'No posts match these filters.' : 'No posts yet — create the first entry.'}
            onDeleteRequest={setDeleteTarget}
          />

          <BlogListPagination
            page={page}
            totalPages={totalPages}
            pageSize={pageSize}
            pageSizeOptions={PAGE_SIZE_OPTIONS}
            onPageChange={setPage}
            onPageSizeChange={(size) => {
              setPageSize(size);
              setPage(1);
            }}
          />
        </div>
      </div>

      <BlogDeleteDialog
        post={deleteTarget}
        isPending={deleteMutation.isPending}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        onConfirm={() => deleteTarget && deleteMutation.mutate(deleteTarget.id)}
      />
    </div>
  );
};

export default AdminBlogListPage;
