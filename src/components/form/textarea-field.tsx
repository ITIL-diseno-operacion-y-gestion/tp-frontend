import { forwardRef } from "react";

import { ErrorDisplay } from "./error-display";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  error?: string;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, id, error, className, ...props }, ref) => {
    return (
      <div className={className}>
        <label htmlFor={id} className="mb-2 font-semibold">
          {label}
        </label>
        <textarea
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

TextAreaField.displayName = "TextAreaField";
