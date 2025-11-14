import { type FieldError } from 'react-hook-form';

import { Error } from './error';

type FieldWrapperProps = {
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrappedPassThroughProps = Omit<
  FieldWrapperProps,
  'children' | 'className'
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { children, error } = props;

  return (
    <div>
      <div className="mt-1">{children}</div>
      <Error errorMessage={error?.message} />
    </div>
  );
};
