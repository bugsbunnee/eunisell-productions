import React from 'react';

import { Button } from '../ui/button';
import { useFormContext } from './form-context';
import { LoaderCircleIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Props {
  label: string;
  loadingLabel?: string;
  className?: string;
}

const SubmitButton: React.FC<Props> = ({ label, loadingLabel = 'Submitting…', className }) => {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => (
        <Button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className={cn('bg-sidebar-primary w-full h-16 font-bold text-base rounded-[2px] leading-6 text-white uppercase', className)}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2.5 animate-pulse">
              <LoaderCircleIcon size={20} className="animate-spin" />
              {loadingLabel}
            </span>
          ) : (
            label
          )}
        </Button>
      )}
    />
  );
};

export default SubmitButton;
