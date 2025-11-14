import type { FC, ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import { usePopup } from '@/hooks/usePopup';

import ActionIconButton from '../../action-icon-button/action-icon-button';
import Popover from '../../pop-over/pop-over';

interface EmojiData {
  id: string;
  native: string;
  name: string;
  shortcodes: string;
  unified: string;
}

interface EmojiIconButtonProps {
  addEmoji: (emoji: EmojiData) => void;
}

const EmojiIconButton: FC<EmojiIconButtonProps> = ({
  addEmoji,
}): ReactElement => {
  const {
    anchorEl,
    openPopover,
    handleOpenPopup,
    handleClosePopup,
    popoverId,
  } = usePopup();

  return (
    <>
      <ActionIconButton
        id="onClickAddEmoji"
        actionText="Emoji"
        icon={<Icon name="EmojiIcon" />}
        onClick={handleOpenPopup}
        size="medium"
      />
      <Popover
        id={popoverId}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopup}
        onSelect={addEmoji}
      />
    </>
  );
};

export default EmojiIconButton;
