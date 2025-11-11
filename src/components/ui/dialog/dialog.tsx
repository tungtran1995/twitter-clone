import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';

interface DialogProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  visible,
  onClose,
  title,
  children,
  footer,
}) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      ></div>
      <div className="z-10 mx-4 w-full max-w-lg transform rounded-lg bg-white shadow-lg">
        {title && (
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        )}
        <div className="px-6 py-4">{children}</div>
        {footer && <div className="border-t px-6 py-4">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
};

export default Dialog;
