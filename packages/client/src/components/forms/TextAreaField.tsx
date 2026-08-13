import React from 'react';
import { useFieldContext } from './form-context';

interface Props {
  label: string;
  placeholder?: string;
  rows?: number;
}

const TextAreaField: React.FC<Props> = ({ label, placeholder, rows = 5 }) => {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-y-2 text-left">
      <label className="font-bold text-xs uppercase text-muted tracking-[0.6px]" htmlFor={field.name}>
        {label}
      </label>

      <textarea
        id={field.name}
        placeholder={placeholder}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        rows={rows}
        className="bg-sidebar/30 py-4 px-4 border border-[#E2E8F0] rounded-[2px] outline-none focus:border-secondary transition-colors resize-none placeholder:text-sidebar-foreground/40"
      />

      {field.state.meta.errors.length > 0 && <span className="text-xs text-destructive">{field.state.meta.errors[0].message}</span>}
    </div>
  );
};

export default TextAreaField;
