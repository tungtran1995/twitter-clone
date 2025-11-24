import { memo, useEffect, type FC, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import { useClickAway } from '@/hooks/useClickAway';

import ActionIconButton from '../action-icon-button/action-icon-button';
import { Spinner } from '../spinner';
import AddTweetToBookmarksButton from './add-tweet-to-bookmark-button/add-tweet-to-bookmark-button';
import SendViaDirectMessageButton from './send-via-direct-message-button/send-via-direct-message-button';
import ShareTweet from './share-tweet/share-tweet';

interface ShareTweetProps {
  tweetId: number;
  isFullTweet?: boolean;
}

const ShareTweetIconButton: FC<ShareTweetProps> = memo(
  ({ tweetId, isFullTweet }): ReactElement => {
    const isTweetAdditionalInfoLoading = false;
    const { open, onClickOpen, onClickClose, ref } = useClickAway();

    useEffect(() => {}, []);

    return (
      <div className="relative" ref={ref as React.RefObject<HTMLDivElement>}>
        <ActionIconButton
          actionText="Share"
          onClick={onClickOpen}
          size={isFullTweet ? 'medium' : 'small'}
          icon={<Icon name="ShareIcon" className="h-4.25 w-4.25" />}
        />
        {open && (
          <div className="absolute right-0 z-20 mt-2 w-72 rounded-xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-black">
            {isTweetAdditionalInfoLoading ? (
              <div className="flex h-24 items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <ul className="m-0 list-none p-0">
                <SendViaDirectMessageButton tweetId={tweetId} />
                <AddTweetToBookmarksButton
                  tweetId={tweetId}
                  closeShareTweet={onClickClose}
                />
                {/* <CopyLinkToTweetButton closeShareTweet={onClickClose} /> */}
                <ShareTweet />
              </ul>
            )}
          </div>
        )}
      </div>
      // Loại bỏ ClickAwayListener của Material UI vì chúng ta đang dùng hook useClickAway
      // và đã gán ref vào div cha.
    );
  },
);

export default ShareTweetIconButton;
