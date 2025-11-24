import type { FC, ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import { PROFILE } from '@/constants/path';
import { formatDate } from '@/utils';

import LinkWrapper from '../../link-wrapper/link-wrapper';

interface TweetHeaderProps {
  dateTime?: string;
  userId?: number;
  fullName?: string;
  username?: string;
  isPrivateProfile?: boolean;
}

const TweetHeader: FC<TweetHeaderProps> = ({
  dateTime,
  userId,
  fullName,
  username,
  isPrivateProfile,
}): ReactElement => {
  return (
    <LinkWrapper path={`${PROFILE}/${userId}`} visiblePopperWindow={false}>
      <span className="text-[15px] font-semibold">{fullName}</span>
      {isPrivateProfile && (
        <span>
          <Icon name="LockIcon" className="mb-[-3px] ml-[3px] h-4" />
        </span>
      )}
      &nbsp;
      <span className="text-[15px] text-gray-600">
        @{username}
        {' · '}
      </span>
      <span className="text-[15px] text-gray-600">
        {formatDate(new Date(dateTime!))}
      </span>
    </LinkWrapper>
  );
};

export default TweetHeader;
