// Input.tsx

import React, { forwardRef } from "react";
import { cn } from "../lib/utils";
import { EyeIcon, EyeOffIcon, XCircleIcon, CheckCircleIcon } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
  isLoading?: boolean;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type = "text",
      label,
      error,
      success,
      helperText,
      leftIcon,
      rightIcon,
      showPasswordToggle = false,
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = showPasswordToggle 
      ? (showPassword ? "text" : "password")
      : type;

    return (
      <div className={cn("space-y-2", containerClassName)}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">{leftIcon}</span>
            </div>
          )}

          <input
            type={inputType}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-10",
              (rightIcon || showPasswordToggle || error || success) && "pr-10",
              error && "border-red-500 focus-visible:ring-red-500",
              success && "border-green-500 focus-visible:ring-green-500",
              className
            )}
            ref={ref}
            disabled={disabled || isLoading}
            {...props}
          />

          {/* Right side icons */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
            {error && <XCircleIcon className="h-5 w-5 text-red-500" />}
            {success && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
            {showPasswordToggle && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            )}
            {rightIcon && !error && !success && (
              <span className="text-gray-500">{rightIcon}</span>
            )}
            {isLoading && (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-700" />
            )}
          </div>
        </div>

        {/* Helper text, error or success message */}
        {(helperText || error || success) && (
          <p
            className={cn(
              "text-sm",
              error && "text-red-500",
              success && "text-green-500",
              !error && !success && "text-gray-500"
            )}
          >
            {error || success || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;