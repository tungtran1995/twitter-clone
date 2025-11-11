import { memo, type ReactElement } from 'react';

import { Link } from 'react-router';

import { PROFILE } from '@/constants/path';
import { DEFAULT_PROFILE_IMG } from '@/constants/url';

const ProfileAvatar = memo((): ReactElement => {
  const myProfileId = 1;
  const avatar = DEFAULT_PROFILE_IMG; // Replace with actual logic to get the user's profile ID
  return (
    <Link to={`${PROFILE}/${myProfileId}`}>
      <img
        className="h-[46px] w-[46px] rounded-full"
        src={avatar}
        alt={`avatar/${myProfileId}`}
      />
    </Link>
  );
});

export default ProfileAvatar;
