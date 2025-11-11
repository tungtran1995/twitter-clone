import type { FC, ReactElement } from 'react';

import { TweetType } from '@/types/common';
import { TweetActionResults } from '@/types/tweet';

import TweetActionResult from '../tweet-action-result/tweet-action-result';

interface TweetActionProps {
  tweetId?: string;
  tweetType?: TweetType;
  activeTab?: number;
}

const TweetActions: FC<TweetActionProps> = ({
  tweetId,
  tweetType,
  activeTab,
}): ReactElement | null => {
  const userProfileId = '123';
  const myProfileId = '456';
  const pinnedTweetId = 'pinned-tweet-id';

  if (activeTab !== 0) {
    return null;
  }

  return (
    <>
      {tweetType === TweetType.RETWEET && (
        <TweetActionResult
          action={TweetActionResults.RETWEET}
          text={myProfileId === userProfileId ? 'You retweeted' : 'Retweeted'}
        />
      )}
      {pinnedTweetId === tweetId && (
        <TweetActionResult
          action={TweetActionResults.PIN}
          text="Pinned Tweet"
        />
      )}
    </>
  );
};

export default TweetActions;
