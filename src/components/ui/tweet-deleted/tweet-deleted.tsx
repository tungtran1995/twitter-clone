import { TWITTER_NOTICES } from '@/constants/url';
import { memo, type ReactElement } from 'react';

import { Link } from 'react-router-dom';

const TweetDeleted = memo((): ReactElement => {
  return (
    <div className="rounded-lg bg-gray-100 p-4 text-sm text-gray-600">
      This Tweet was deleted by the Tweet author.
      <Link
        to={TWITTER_NOTICES}
        target="_blank"
        rel="noopener"
        className="text-blue-600 hover:underline"
      >
        Learn more
      </Link>
    </div>
  );
});

export default TweetDeleted;
