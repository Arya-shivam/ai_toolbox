'use client';

import Image from 'next/image';
import { cn } from '../lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = 'md', fallback, ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative flex items-center justify-center rounded-full bg-gray-100 overflow-hidden',
          size === 'sm' && 'h-8 w-8',
          size === 'md' && 'h-12 w-12',
          size === 'lg' && 'h-16 w-16',
          className
        )}
        ref={ref}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt || 'Avatar'}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-gray-600 font-medium">
            {fallback?.charAt(0).toUpperCase() || 'U'}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };