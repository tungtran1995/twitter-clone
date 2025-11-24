import React, { useEffect, useRef } from 'react';

export interface PopoverProps {
  id: string | undefined;
  open: boolean;
  anchorEl?: HTMLElement | null;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  onClose?: () => void;
  children: React.ReactNode;
  offset?: number; // khoảng cách từ anchorEl
}

const Popover: React.FC<PopoverProps> = ({
  id,
  open,
  anchorEl,
  children,
  onClose,
  offset = 8,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        anchorEl &&
        !anchorEl.contains(e.target as Node)
      ) {
        onClose?.();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [open, anchorEl, onClose]);

  if (!open || !anchorEl) return null;

  const rect = anchorEl.getBoundingClientRect();

  return (
    <div
      id={id}
      ref={ref}
      style={{
        position: 'fixed',
        top: rect.bottom + offset,
        left: rect.left,
        zIndex: 2000,
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      {children}
    </div>
  );
};

export default Popover;
