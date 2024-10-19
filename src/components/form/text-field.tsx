import { forwardRef } from "react";

import { ErrorDisplay } from "./error-display";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, id, error, className, ...props }, ref) => {
    return (
      <div className={className}>
        <label htmlFor={id} className="mb-2 font-semibold">
          {label}
        </label>
        <input
          className="w-full rounded border border-gray-300 px-3 py-2"
          ref={ref}
          id={id}
          {...props}
        />
        <ErrorDisplay error={error} />
      </div>
    );
  },
);

TextField.displayName = "TextField";
