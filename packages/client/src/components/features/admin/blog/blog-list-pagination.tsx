import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';

const getPaginationRange = (current: number, total: number): (number | 'ellipsis')[] => {
  const range: (number | 'ellipsis')[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);

  if (left > 2) range.push('ellipsis');
  for (let i = left; i <= right; i++) range.push(i);
  if (right < total - 1) range.push('ellipsis');
  if (total > 1) range.push(total);

  return range;
};

interface BlogListPaginationProps {
  page: number;
  totalPages: number;
  pageSize: number;
  pageSizeOptions: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const BlogListPagination: React.FC<BlogListPaginationProps> = ({ page, totalPages, pageSize, pageSizeOptions, onPageChange, onPageSizeChange }) => {
  const paginationRange = getPaginationRange(page, totalPages);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="flex h-9 items-center gap-1 rounded-xl px-3 text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:pointer-events-none"
        >
          <ChevronLeft className="size-4" /> Previous
        </button>

        {paginationRange.map((entry, index) =>
          entry === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className="flex size-9 items-center justify-center text-muted-foreground">
              <MoreHorizontal className="size-4" />
            </span>
          ) : (
            <button
              key={entry}
              type="button"
              onClick={() => onPageChange(entry)}
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium transition-colors',
                entry === page ? 'bg-foreground text-background' : 'border border-border bg-background text-foreground hover:bg-muted'
              )}
            >
              {entry}
            </button>
          )
        )}

        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="flex h-9 items-center gap-1 rounded-xl px-3 text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:pointer-events-none"
        >
          Next <ChevronRight className="size-4" />
        </button>
      </div>

      <Select value={String(pageSize)} onValueChange={(value) => onPageSizeChange(Number(value))}>
        <SelectTrigger className="h-9 w-auto rounded-xl shadow-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="end">
          {pageSizeOptions.map((size) => (
            <SelectItem key={size} value={String(size)}>
              {size}/Page
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BlogListPagination;
