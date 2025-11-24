import { memo, type FC, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import { useModalWindow } from '@/hooks/useModalWindow';

import GifModalWindow from './gif-modal-window/gif-modal-window';
import ActionIconButton from '../../action-icon-button/action-icon-button';

const GifIconButton: FC = memo((): ReactElement => {
  const { visibleModalWindow, onOpenModalWindow, onCloseModalWindow } =
    useModalWindow();
  return (
    <>
      <ActionIconButton
        actionText="GIF"
        icon={<Icon name="GifIcon" className="h-5 w-5" />}
        onClick={onOpenModalWindow}
      />
      <GifModalWindow
        visible={visibleModalWindow}
        onClose={onCloseModalWindow}
      />
    </>
  );
});

export default GifIconButton;
