import type { FC, ReactElement } from 'react';

import { LikeOutlinedIcon, PinIconFilled, RetweetOutlinedIconSm } from '@/icon';
import { TweetActionResults } from '@/types/tweet';

interface TweetActionResultProps {
  action: TweetActionResults;
  text: string;
}

const TweetActionResult: FC<TweetActionResultProps> = ({
  action,
  text,
}): ReactElement => {
  const showIcon = () => {
    if (action === TweetActionResults.PIN) {
      return PinIconFilled;
    } else if (action === TweetActionResults.RETWEET) {
      return RetweetOutlinedIconSm;
    } else {
      return LikeOutlinedIcon;
    }
  };

  return (
    <div className="mb-1 ml-8 flex items-center text-gray-500 [&>svg]:h-[1.2em] [&>svg]:align-bottom">
      {showIcon()}
      <span className="ml-3 text-sm leading-5 font-bold">{text}</span>
    </div>
  );
};

export default TweetActionResult;
