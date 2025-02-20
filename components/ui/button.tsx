'use client';

import { cn } from '../lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full text-sm font-medium transition-transform transform-gpu',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          variant === 'default' && 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 shadow-lg',
          variant === 'outline' && 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground shadow-sm',
          variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };