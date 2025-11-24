import type { FC, ReactElement } from 'react';

import { useClickAway } from '@/hooks/useClickAway';
import { useUser } from '@/lib/auth';

const UserSideProfile: FC = (): ReactElement | null => {
  const { data: { user: userData } = { user: undefined } } = useUser();
  const {
    id: myProfileId,
    fullName = '',
    username = '',
    avatar = '',
    isPrivateProfile = false,
  } = userData || {};
  const { ref, open, onClickOpen } = useClickAway();

  if (!myProfileId) return null;  

  return (
    <div className="relative">
      <div
        onClick={onClickOpen}
        className="fixed bottom-[13px] flex cursor-pointer items-center rounded-[50px] p-2 px-[15px] py-2.5 hover:bg-gray-100"
      >
        <img
          src={avatar || ''}
          alt={`avatar ${myProfileId}`}
          className="h-10 w-10 rounded-full"
        />
        <div className="ml-2">
          <div className="flex items-center space-x-1">
            <span className="font-semibold">{fullName}</span>
            {isPrivateProfile && <span>🔒</span>}
          </div>
          <span className="text-gray-500">@{username}</span>
        </div>
        <div className="ml-auto">⋯</div>
      </div>

      {open && (
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="absolute top-full right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border bg-white shadow-lg"
        >
          <div className="flex items-center space-x-2 border-b p-3">
            <img
              src={avatar || ''}
              alt={`${myProfileId}`}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1">
              <div className="font-semibold">{fullName}</div>
              <div className="text-sm text-gray-500">@{username}</div>
            </div>
            <div>✓</div>
          </div>
          <ul className="divide-y">
            <li className="cursor-pointer px-3 py-2 hover:bg-gray-100">
              Add an existing account
            </li>
            <li className="cursor-pointer px-3 py-2 hover:bg-gray-100">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserSideProfile;
