import type { FC, ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import { useModalWindow } from '@/hooks/useModalWindow';

interface SendViaDirectMessageButtonProps {
  tweetId: number;
}
const SendViaDirectMessageButton: FC<SendViaDirectMessageButtonProps> = ({
  tweetId,
}): ReactElement => {
  const { visibleModalWindow, onOpenModalWindow, onCloseModalWindow } =
    useModalWindow();

  return (
    <>
      <div
        id="clickSendViaDirectMessage"
        onClick={onOpenModalWindow}
        className="flex w-full cursor-pointer items-center rounded-lg px-4 py-2 text-gray-800 transition-colors hover:bg-gray-100"
      >
        {/* Icon */}
        <span className="mr-3 h-5 w-5 flex-shrink-0">
          <Icon name="MessagesIcon" className="h-4.25 w-4.25" />
        </span>

        {/* Text Label */}
        <span className="text-base font-medium">Send via Direct Message</span>
      </div>
      {/* <SendDirectTweetModal
        tweetId={tweetId}
        visible={visibleModalWindow}
        onClose={onCloseModalWindow}
      /> */}
    </>
  );
};

export default SendViaDirectMessageButton;
