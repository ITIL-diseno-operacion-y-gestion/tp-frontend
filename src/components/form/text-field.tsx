import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { ErrorDisplay } from "./error-display";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string[];
}

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, id, error, className, name, ...props }, ref) => {
    return (
      <div className={cn("w-full", className)}>
        <label htmlFor={id || name} className="mb-2 font-semibold">
          {label}
        </label>
        <input
          className="w-full rounded border border-gray-300 px-3 py-2"
          ref={ref}
          id={id || name}
          name={name}
          {...props}
        />
        <ErrorDisplay error={error} />
      </div>
    );
  },
);

TextField.displayName = "TextField";
