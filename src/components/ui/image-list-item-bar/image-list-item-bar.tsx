import React from 'react';

import clsx from 'clsx';

interface ImageListItemBarProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export const ImageListItemBar = ({
  title,
  subtitle,
  className,
}: ImageListItemBarProps) => {
  return (
    <div
      className={clsx(
        'w-full bg-[rgba(0,0,0,0.6)] px-3 py-2 text-white',
        'flex flex-col justify-center',
        className,
      )}
    >
      <div className="text-sm leading-tight font-medium">{title}</div>

      {subtitle && (
        <div className="mt-0.5 text-xs leading-tight text-gray-300">
          {subtitle}
        </div>
      )}
    </div>
  );
};
