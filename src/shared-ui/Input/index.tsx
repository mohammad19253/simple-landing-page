import React from "react";

type Props = {
  label: string;
  error?: string;
  icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, icon, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold">{label}</label>

        <div className="relative bg-[#FCFCFC] rounded-2xl">
          {icon && (
            <span className="absolute inset-y-0 right-3 flex items-center">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            {...props}
            className={`
              w-full border border-gray-200 rounded-2xl py-2 px-3
              placeholder:text-[#8A8A8A]
              focus:outline-none focus:ring-1 focus:ring-purple-500
              ${icon ? "pr-10" : ""}
              ${className}
            `}
          />
        </div>

        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";