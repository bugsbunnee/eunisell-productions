import { CircleCheck, CircleDashed } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import type { BlogStatus } from '../../../../services/blog.service';

const STATUS_CONFIG: Record<BlogStatus, { label: string; icon: typeof CircleCheck; className: string }> = {
  PUBLISHED: { label: 'Published', icon: CircleCheck, className: 'bg-green-50 text-green-700' },
  DRAFT: { label: 'Draft', icon: CircleDashed, className: 'bg-muted text-muted-foreground' },
};

interface StatusPillProps {
  status: BlogStatus;
  className?: string;
}

const StatusPill: React.FC<StatusPillProps> = ({ status, className }) => {
  const { label, icon: Icon, className: colorClassName } = STATUS_CONFIG[status];

  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full py-0.5 pl-1 pr-2 text-xs whitespace-nowrap', colorClassName, className)}>
      <Icon className="size-3.5" />
      {label}
    </span>
  );
};

export default StatusPill;
