import React from 'react';

interface ImageListProps {
  children: React.ReactNode;
  cols?: number;
  rowHeight?: number;
  gap?: number;
}

const ImageList = ({
  children,
  cols = 3,
  rowHeight = 150,
  gap = 2,
}: ImageListProps) => {
  return (
    <div
      className="grid"
      style={{
        gap: `${gap * 4}px`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridAutoRows: `${rowHeight}px`,
      }}
    >
      {children}
    </div>
  );
};
export default ImageList;
