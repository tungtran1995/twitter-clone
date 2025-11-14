import React, { useEffect, useRef } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

interface EmojiData {
  id: string;
  native: string;
  name: string;
  shortcodes: string;
  unified: string;
}

interface PopoverProps {
  id?: string;
  open?: boolean;
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
  emoji?: string;
  set?: string;
  onSelect: (emoji: EmojiData) => void;
}

const Popover: React.FC<PopoverProps> = ({
  id,
  open = false,
  anchorEl,
  onClose,
  onSelect,
}) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        anchorEl &&
        !anchorEl.contains(e.target as Node)
      ) {
        onClose?.();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [open, anchorEl, onClose]);

  if (!open) return null;

  return (
    <div
      id={id}
      ref={popoverRef}
      style={{
        position: 'fixed',
        top: anchorEl ? anchorEl.getBoundingClientRect().bottom + 8 : '50%',
        left: anchorEl ? anchorEl.getBoundingClientRect().left : '50%',
        transform: anchorEl ? 'none' : 'translate(-50%, -50%)',
        zIndex: 1000,
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        background: '#fff',
      }}
    >
      <Picker
        data={data}
        onEmojiSelect={(emoji: EmojiData) => {
          onSelect(emoji);
          onClose?.();
        }}
        emojiSize={24}
        perLine={8}
      />
    </div>
  );
};

export default Popover;
