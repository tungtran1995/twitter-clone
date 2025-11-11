import type { FC, ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { PROFILE } from '@/constants/path';

interface TweetReplyingUsernameProps {
  addressedId: number;
  addressedUsername: string;
}

const TweetReplyingUsername: FC<TweetReplyingUsernameProps> = ({
  addressedId,
  addressedUsername,
}): ReactElement => {
  return (
    <div className="text-base font-medium">
      {'Replying to'}{' '}
      <Link
        to={`${PROFILE}/${addressedId}`}
        className="font-medium text-blue-600 hover:underline"
      >
        @{addressedUsername}
      </Link>
    </div>
  );
};
export default TweetReplyingUsername;
