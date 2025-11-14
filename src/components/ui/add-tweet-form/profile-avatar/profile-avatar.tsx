import { memo, type ReactElement } from 'react';

import { Link } from 'react-router';

import { PROFILE } from '@/constants/path';
import { DEFAULT_PROFILE_IMG } from '@/constants/url';
import { useUserAvatar } from '@/lib/selector';

const ProfileAvatar = memo((): ReactElement => {
  const { data } = useUserAvatar();

  const avatarUrl = data || DEFAULT_PROFILE_IMG;
  const myProfileId = 1;
  return (
    <Link to={`${PROFILE}/${myProfileId}`}>
      <img
        className="h-[46px] w-[46px] rounded-full"
        src={avatarUrl}
        alt={`avatar/${myProfileId}`}
      />
    </Link>
  );
});

export default ProfileAvatar;
