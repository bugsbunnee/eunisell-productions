import { cn } from '../../../../lib/utils';
import type { BlogStatus } from '../../../../services/blog.service';

const STATUS_CONFIG: Record<BlogStatus, { label: string; color: string }> = {
  DRAFT: { label: 'Draft', color: 'var(--stamp-draft)' },
  PUBLISHED: { label: 'Published', color: 'var(--stamp-published)' },
};

interface StatusStampProps {
  status: BlogStatus;
  className?: string;
}

const StatusStamp: React.FC<StatusStampProps> = ({ status, className }) => {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[3px] border-[1.5px] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] -rotate-2 select-none whitespace-nowrap',
        className
      )}
      style={{ color: config.color, borderColor: config.color }}
    >
      {config.label}
    </span>
  );
};

export default StatusStamp;
