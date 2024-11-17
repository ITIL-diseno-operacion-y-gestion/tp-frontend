import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { ErrorDisplay } from "./error-display";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  children: React.ReactNode;
  error?: string[];
}

export const SelectField = forwardRef<HTMLSelectElement, Props>(
  ({ label, id, error, className, name, children, ...props }, ref) => {
    return (
      <div className={cn("w-full", className)}>
        <label htmlFor={id || name} className="mb-2 font-semibold">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
        <select
          className="w-full rounded border border-gray-300 px-3 py-2"
          ref={ref}
          id={id || name}
          name={name}
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
