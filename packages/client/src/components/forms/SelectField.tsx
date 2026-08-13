import React from 'react';
import { useFieldContext } from './form-context';

interface Props {
  label: string;
  placeholder?: string;
  options: string[];
}

const SelectField: React.FC<Props> = ({ label, placeholder = 'Select an option', options }) => {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-y-2 text-left">
      <label className="font-bold text-xs uppercase text-muted tracking-[0.6px]" htmlFor={field.name}>
        {label}
      </label>

      <select
        id={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        className="bg-sidebar/30 py-4 px-4 border border-[#E2E8F0] rounded-[2px] outline-none focus:border-secondary transition-colors appearance-none"
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {field.state.meta.errors.length > 0 && <span className="text-xs text-destructive">{field.state.meta.errors[0].message}</span>}
    </div>
  );
};

export default SelectField;
