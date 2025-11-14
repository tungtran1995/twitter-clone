import { memo, type FC, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import { useModalWindow } from '@/hooks/useModalWindow';
import type { Image, UserTweetResponse } from '@/types';

import ActionIconButton from '../../action-icon-button/action-icon-button';
import ReplyModal from '../../reply-modal/reply-modal';

interface TweetReplyIconButtonProps {
  tweetId?: number;
  text?: string;
  image?: Image;
  createdAt?: string;
  tweetAuthor?: UserTweetResponse;
  repliesCount?: number;
  isUserCanReply: boolean;
}

const ReplyIconButton: FC<TweetReplyIconButtonProps> = memo(
  ({
    tweetId,
    text,
    image,
    createdAt,
    tweetAuthor,
    repliesCount,
    isUserCanReply,
  }): ReactElement => {
    const { visibleModalWindow, onOpenModalWindow, onCloseModalWindow } =
      useModalWindow();

    return (
      <div className="flex items-center">
        <ActionIconButton
          actionText={'Reply'}
          icon={<Icon name="ReplyIcon" className="h-4.25 w-4.25" />}
          onClick={onOpenModalWindow}
          disabled={isUserCanReply}
        />
        {repliesCount !== 0 && (
          <span id="repliesCount" className="pr-4 align-middle text-[13px]">
            {repliesCount}
          </span>
        )}
        <ReplyModal
        //   author={tweetAuthor!}
        //   tweetId={tweetId!}
        //   text={text!}
        //   image={image}
        //   createdAt={createdAt!}
        //   visible={visibleModalWindow}
        //   onClose={onCloseModalWindow}
        />
      </div>
    );
  },
);

export default ReplyIconButton;
