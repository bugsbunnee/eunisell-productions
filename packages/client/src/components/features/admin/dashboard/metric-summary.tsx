import { Fragment } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface MetricSummaryProps {
  metrics: Metric[];
}

const MetricSummary: React.FC<MetricSummaryProps> = ({ metrics }) => {
  const rows: Metric[][] = [];
  for (let i = 0; i < metrics.length; i += 3) rows.push(metrics.slice(i, i + 3));

  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-primary-foreground p-6">
      {rows.map((row, rowIndex) => (
        <Fragment key={rowIndex}>
          {rowIndex > 0 && <div className="h-px w-full bg-border" />}

          <div className="flex items-center gap-6">
            {row.map(({ label, value, icon: Icon }, index) => (
              <div key={label} className={cn('flex flex-1 flex-col gap-4 min-w-0', index < row.length - 1 && 'border-r border-dashed border-border pr-6')}>
                <div className="flex items-center gap-2">
                  <Icon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground truncate">{label}</span>
                </div>
                <span className="text-lg font-medium text-foreground tabular-nums">{value}</span>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default MetricSummary;
