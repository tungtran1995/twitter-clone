import { memo, type FC, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import { useModalWindow } from '@/hooks/useModalWindow';

import ActionIconButton from '../../action-icon-button/action-icon-button';

const GifIconButton: FC = memo((): ReactElement => {
  const { visibleModalWindow, onOpenModalWindow, onCloseModalWindow } =
    useModalWindow();
  return (
    <>
      <ActionIconButton
        actionText="GIF"
        icon={<Icon name="GifIcon" />}
        onClick={onOpenModalWindow}
        size="medium"
      />
    </>
  );
});

export default GifIconButton;
