import { memo, type FC, type ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { HOME_TWEET } from '@/constants/path';
import { textFormatter } from '@/utils/text-formatter';

interface TweetTextProps {
  tweetId?: string;
  text?: string;
}

const TweetText: FC<TweetTextProps> = memo(
  ({ tweetId, text }): ReactElement => {
    return (
      <p>
        <Link
          id="handleClickTweet"
          to={`${HOME_TWEET}/${tweetId}`}
          className="mt-2 block w-[490px] text-sm text-inherit no-underline"
        >
          {textFormatter(text!)}
        </Link>
      </p>
    );
  },
);

export default TweetText;
