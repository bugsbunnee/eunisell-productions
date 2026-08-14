import { Fragment } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export interface BlogFormStep {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface BlogFormStepsProps {
  steps: BlogFormStep[];
  currentStepId: string;
}

const BlogFormSteps: React.FC<BlogFormStepsProps> = ({ steps, currentStepId }) => {
  return (
    <div className="flex w-full flex-col items-start gap-0 rounded-3xl px-2 py-6">
      {steps.map((step, index) => {
        const isActive = step.id === currentStepId;
        const Icon = step.icon;

        return (
          <Fragment key={step.id}>
            <div
              className={cn(
                'flex h-8 w-full items-center gap-2 rounded-lg border-l-2 px-3 text-sm transition-colors',
                isActive ? 'border-secondary bg-divider font-medium text-graphite' : 'border-transparent text-slate'
              )}
            >
              <Icon className="size-4 shrink-0" strokeWidth={1.75} />
              <span className="truncate">{step.label}</span>
            </div>

            {index < steps.length - 1 && <div className="ml-5 h-4 w-px bg-divider" />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default BlogFormSteps;
