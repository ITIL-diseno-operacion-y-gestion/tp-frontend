import { forwardRef } from "react";

import { ErrorDisplay } from "./error-display";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  children: React.ReactNode;
  error?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, Props>(
  ({ label, id, error, className, children, ...props }, ref) => {
    return (
      <div className={className}>
        <label htmlFor={id} className="mb-2 font-semibold">
          {label}
        </label>
        <select
          className="w-full rounded border border-gray-300 px-3 py-2"
          ref={ref}
          id={id}
          {...props}
        >
          {children}
        </select>

        <ErrorDisplay error={error} />
      </div>
    );
  },
);

SelectField.displayName = "SelectField";
