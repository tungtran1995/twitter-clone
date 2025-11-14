import { memo, type FC, type ReactElement } from 'react';

import { useParams } from 'react-router-dom';

import Icon from '@/components/icons/icon';
import { useClickAway } from '@/hooks/useClickAway';
import { useModalWindow } from '@/hooks/useModalWindow';
import type { UserTweetResponse } from '@/types';

import ActionIconButton from '../action-icon-button/action-icon-button';

export interface QuoteIconButtonProps {
  tweetId?: number;
  createdAt?: string;
  text?: string;
  author?: UserTweetResponse;
  isTweetReTweeted?: boolean;
  reTweetsCount?: number;
}

const QuoteIconButton: FC<QuoteIconButtonProps> = memo(
  ({
    tweetId,
    createdAt,
    text,
    author,
    isTweetReTweeted,
    reTweetsCount,
  }): ReactElement => {
    const params = useParams<{ userId: string }>();
    const myProfileId = 1;
    const { open, onClickClose, onClickOpen, ref } = useClickAway();
    const { visibleModalWindow, onOpenModalWindow } = useModalWindow();
    const isOwner = author?.id === myProfileId;

    const onClickRetweet = (): void => {
      onClickClose();
    };

    const handleClickOpenAddTweet = (): void => {
      onClickClose();
      onOpenModalWindow();
    };

    return (
      <div ref={ref} className="relative flex items-center">
        <ActionIconButton
          actionText={isTweetReTweeted ? 'Undo Retweet' : 'Retweet'}
          icon={
            <div>
              {isTweetReTweeted ? (
                <Icon name="ReplyIcon" className="h-4.25 w-4.25" />
              ) : (
                <Icon name="RetweetOutlinedIcon" className="h-4.25 w-4.25" />
              )}
            </div>
          }
          onClick={onClickOpen}
        />
        {reTweetsCount !== 0 && (
          <span id="retweets" className="pr-4 align-middle text-sm font-medium">
            {reTweetsCount}
          </span>
        )}

        {open && (
          <div className="absolute top-full left-1/2 z-20 mt-2 w-max min-w-[200px] -translate-x-1/2 transform rounded-xl bg-white shadow-xl ring-1 ring-gray-200">
            <div className="py-2">
              <div
                id="clickRetweet"
                onClick={onClickRetweet}
                className="flex cursor-pointer items-center space-x-3 px-4 py-2 text-gray-900 hover:bg-gray-100"
              >
                <span className="h-5 w-5 shrink-0">
                  <Icon name="RetweetOutlinedIcon" className="h-4.25 w-4.25" />
                </span>
                {/* Thay thế <Typography> bằng <span> */}
                <span className="text-sm font-medium whitespace-nowrap">
                  {isTweetReTweeted ? 'Undo Retweet' : 'Retweet'}
                </span>
              </div>

              {/* Option 2: Quote Tweet */}
              <div
                id="clickOpenAddTweet"
                onClick={handleClickOpenAddTweet}
                className="flex cursor-pointer items-center space-x-3 px-4 py-2 text-gray-900 hover:bg-gray-100"
              >
                <span className="h-5 w-5 flex-shrink-0">
                  <Icon name="QuoteTweetIcon" className="h-4.25 w-4.25" />
                </span>
                {/* Thay thế <Typography> bằng <span> */}
                <span className="text-sm font-medium whitespace-nowrap">
                  Quote Tweet
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Quote Tweet Modal (Giữ nguyên component) */}
        {/* <QuoteTweetModal
          quoteTweet={
            { id: tweetId, createdAt, text, author } as QuoteTweetResponse
          }
          onClose={closeModalWindow}
          visible={visibleModalWindow}
        /> */}
      </div>
    );
  },
);

export default QuoteIconButton;
