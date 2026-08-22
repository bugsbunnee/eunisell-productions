import { useEffect, useMemo, useState } from 'react';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

import knowledgeResourceService, { type KnowledgeResource, type KnowledgeResourceStatus } from '../services/knowledge-resource.service';
import { adminPaths } from '../lib/data';
import { getErrorMessage } from '../lib/utils';

import ListStats from '../components/features/admin/blog/list-stats';
import KnowledgeListFilters from '../components/features/admin/knowledge-centre/knowledge-list-filters';
import KnowledgeListTable from '../components/features/admin/knowledge-centre/knowledge-list-table';
import BlogListPagination from '../components/features/admin/blog/blog-list-pagination';
import KnowledgeDeleteDialog from '../components/features/admin/knowledge-centre/knowledge-delete-dialog';

import { Button } from '../components/ui/button';

const PAGE_SIZE_OPTIONS = [10, 20, 50];

const AdminKnowledgeCentreListPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]!);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [status, setStatus] = useState<KnowledgeResourceStatus | 'ALL'>('ALL');
  const [category, setCategory] = useState<string>('ALL');
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [deleteTarget, setDeleteTarget] = useState<KnowledgeResource | null>(null);

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => knowledgeResourceService.remove(id),
    onSuccess: () => {
      toast.success('Resource deleted');
      queryClient.invalidateQueries({ queryKey: ['knowledge-resources'] });
      queryClient.invalidateQueries({ queryKey: ['knowledge-resource-stats'] });
      setDeleteTarget(null);
    },
    onError: (error) => toast.error(getErrorMessage(error) || 'Could not delete the resource'),
  });

  const { data: stats } = useQuery({ queryKey: ['knowledge-resource-stats'], queryFn: () => knowledgeResourceService.stats() });

  const { data, isLoading } = useQuery({
    queryKey: ['knowledge-resources', page, pageSize, debouncedSearch, status, category, sort],
    queryFn: () => knowledgeResourceService.list({ page, limit: pageSize, search: debouncedSearch || undefined, status, category, sort }),
    placeholderData: keepPreviousData,
  });

  const { resources, total, totalPages } = useMemo(() => {
    return {
      resources: data?.data ?? [],
      total: data?.total ?? 0,
      totalPages: data?.totalPages ?? 1,
    };
  }, [data]);

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
            <h1 className="text-2xl font-semibold text-foreground">Knowledge Centre</h1>
          </div>

          <Button asChild className="rounded-2xl h-10 text-sm px-4">
            <Link to={adminPaths.knowledgeCentreNew}>
              <Plus className="size-4" />
              New Resource
            </Link>
          </Button>
        </div>

        <ListStats total={stats?.total ?? 0} published={stats?.published ?? 0} draft={stats?.draft ?? 0} isLoading={!stats} />

        <div className="flex flex-col gap-6 rounded-2xl bg-primary-foreground p-6">
          <KnowledgeListFilters
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

          <KnowledgeListTable
            resources={resources}
            isLoading={isLoading}
            skeletonRowCount={Math.min(pageSize, 5)}
            docNumberForIndex={(index) => total - ((page - 1) * pageSize + index)}
            onSortToggle={() => {
              setSort((value) => (value === 'desc' ? 'asc' : 'desc'));
              setPage(1);
            }}
            emptyMessage={hasActiveFilters ? 'No resources match these filters.' : 'No resources yet — add the first entry.'}
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

      <KnowledgeDeleteDialog
        resource={deleteTarget}
        isPending={deleteMutation.isPending}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        onConfirm={() => deleteTarget && deleteMutation.mutate(deleteTarget.id)}
      />
    </div>
  );
};

export default AdminKnowledgeCentreListPage;
