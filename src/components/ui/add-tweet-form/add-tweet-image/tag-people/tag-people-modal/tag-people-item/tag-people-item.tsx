import { memo, type FC, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import Avatar from '@/components/ui/avatar/avatar';
import { DEFAULT_PROFILE_IMG } from '@/constants/url';
import type { UserResponse } from '@/types/user';

interface TagPeopleItemProps {
  user: UserResponse;
}

const TagPeopleItem: FC<TagPeopleItemProps> = memo(({ user }): ReactElement => {
  const userAvatar = user?.avatar ?? DEFAULT_PROFILE_IMG;
  const isUserCanTagged = user?.isPrivateProfile && !user.isFollower;

  return (
    <div>
      <div
        className={`mt-1 mb-1 flex w-full items-start pl-4 ${isUserCanTagged ? 'cursor-default opacity-50' : 'cursor-pointer opacity-100'} `}
      >
        <Avatar
          src={userAvatar}
          className="mr-[15px] h-14 w-14 rounded-full object-cover"
        />
        <div className="flex flex-1">
          <div className="flex items-center justify-between">
            <div className="w-[350px]">
              <div>
                <span>{user?.fullName}</span>
                {user?.isPrivateProfile && (
                  <Icon name="LockIcon" className="mb-[-3px] ml-[3px] h-4" />
                )}
              </div>
              <span className="text-base leading-5 font-medium">{`@${user?.username} can’t be tagged in photos`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TagPeopleItem;
