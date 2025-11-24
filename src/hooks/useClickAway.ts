import type { RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseClickAway {
  onClickOpen: () => void;
  onClickClose: () => void;
  open: boolean;
  ref: RefObject<HTMLElement | null>;
}

export const useClickAway = (): UseClickAway => {
  const [open, setOpen] = useState<boolean>(false);

  const ref = useRef<HTMLElement | null>(null);

  const onClickClose = useCallback((): void => {
    setOpen(false);
  }, []);

  const onClickOpen = useCallback((): void => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      onClickClose();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [onClickClose]);

  return { open, onClickOpen, onClickClose, ref };
};
