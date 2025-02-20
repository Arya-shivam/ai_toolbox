'use client';

import { cn } from '../lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        className={cn(
          'rounded-lg border bg-card text-card-foreground shadow-sm',
          hoverEffect && 'transition-all hover:shadow-md',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

// Add or update styles for better readability
const cardStyles = {
  color: '#333', // Darker text color for better contrast
  backgroundColor: '#fff', // Ensure background is light for contrast
  // other styles...
};

// Apply these styles to your card component

export { Card };