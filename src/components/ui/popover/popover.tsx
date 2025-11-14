import React, { useMemo, type ReactNode } from 'react';

import {
  Popover as TinyPopover,
  type PopoverPosition,
} from 'react-tiny-popover';

interface PopoverProps {
  id?: string;
  open: boolean;
  anchorEl: HTMLElement | null; // Vẫn bị bỏ qua định vị
  anchorOrigin: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  onClose: () => void;
  content: ReactNode;
  children: ReactNode;
  classes: {
    popover: string;
  };
}

const mapOriginToPosition = (
  anchor: PopoverProps['anchorOrigin'],
  transform: PopoverProps['transformOrigin'],
): PopoverPosition[] => {
  const mapV = anchor.vertical === 'top' ? 'top' : 'bottom';
  const mapH = anchor.horizontal === 'left' ? 'left' : 'right';
  return [mapV, mapH] as PopoverPosition[];
};

const Popover: React.FC<PopoverProps> = ({
  open,
  anchorOrigin,
  transformOrigin,
  onClose,
  content,
  children,
  classes,
}) => {
  const positions = useMemo(() => {
    if (!anchorOrigin || !transformOrigin)
      return ['bottom', 'right'] as PopoverPosition[];
    return mapOriginToPosition(anchorOrigin, transformOrigin);
  }, [anchorOrigin, transformOrigin]);

  return (
    <TinyPopover
      isOpen={open}
      positions={positions}
      align={
        transformOrigin.horizontal === 'center'
          ? 'center'
          : transformOrigin.horizontal === 'left'
            ? 'start'
            : 'end'
      }
      onClickOutside={onClose}
      content={
        <div className={classes.popover} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      }
    >
      {content}
    </TinyPopover>
  );
};

export default Popover;
