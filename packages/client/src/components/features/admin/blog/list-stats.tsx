import { CircleCheck, CircleDashed, Newspaper } from 'lucide-react';
import { cn } from '../../../../lib/utils';

interface ListStatsProps {
  total: number;
  published: number;
  draft: number;
  isLoading?: boolean;
}

const ListStats: React.FC<ListStatsProps> = ({ total, published, draft, isLoading }) => {
  const stats = [
    { label: 'Total Posts', value: total, icon: Newspaper },
    { label: 'Published', value: published, icon: CircleCheck },
    { label: 'Drafts', value: draft, icon: CircleDashed },
  ];

  return (
    <div className="flex items-start gap-6 rounded-2xl bg-primary-foreground p-6">
      {stats.map(({ label, value, icon: Icon }, index) => (
        <div key={label} className={cn('flex flex-1 flex-col gap-4', index < stats.length - 1 && 'border-r border-dashed border-border pr-6')}>
          <div className="flex items-center gap-2">
            <Icon className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
          <span className="text-xl font-medium text-foreground">{isLoading ? '—' : value}</span>
        </div>
      ))}
    </div>
  );
};

export default ListStats;
