import React from 'react';

import clsx from 'clsx';

interface ImageListItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ImageListItem = ({
  children,
  className,
  onClick,
}: ImageListItemProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx('cursor-pointer overflow-hidden rounded-lg', className)}
    >
      {children}
    </div>
  );
};

export default ImageListItem;
