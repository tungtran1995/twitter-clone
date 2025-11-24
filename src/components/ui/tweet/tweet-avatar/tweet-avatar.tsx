import type { ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { PROFILE } from '@/constants/path';

interface TweetAvatarProps {
  src?: string;
  userId?: number;
}

const TweetAvatar: React.FC<TweetAvatarProps> = ({
  src,
  userId,
}): ReactElement => {
  return (
    <Link to={`${PROFILE}/${userId}`}>
      <img
        src={src}
        alt={`avatar ${userId}`}
        className="h-10 w-10 rounded-full object-cover"
      />
    </Link>
  );
};

export default TweetAvatar;
