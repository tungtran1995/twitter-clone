// Input.tsx

import React from 'react';

import { type UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@/utils';

import {
  FieldWrapper,
  type FieldWrappedPassThroughProps,
} from './field-wrapper';

// Định nghĩa props như cũ
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrappedPassThroughProps & {
    className?: string | null;
    registration?: Partial<UseFormRegisterReturn>;
  };

// Định nghĩa kiểu rõ ràng cho component ForwardRef
type InputComponentType = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>;

// Khai báo component và gán kiểu đã định nghĩa
const Input: InputComponentType = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, type, error, registration, ...props }, ref) => {
  return (
    <FieldWrapper error={error} className={className}>
      <input
        type={type}
        className={cn(
          'border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...registration}
        {...props}
      />
    </FieldWrapper>
  );
});

export { Input };
