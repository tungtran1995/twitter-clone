import { useState } from 'react';

interface useModalWindow {
  visibleModalWindow: boolean;
  onOpenModalWindow: () => void;
  onCloseModalWindow: () => void;
}

export const useModalWindow = (): useModalWindow => {
  const [visibleModalWindow, setVisibleModalWindow] = useState<boolean>(false);

  const onOpenModalWindow = () => {
    setVisibleModalWindow(true);
  };

  const onCloseModalWindow = () => {
    setVisibleModalWindow(false);
  };

  return {
    visibleModalWindow,
    onOpenModalWindow,
    onCloseModalWindow,
  };
};
