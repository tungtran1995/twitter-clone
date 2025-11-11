import type { FC, ReactElement } from 'react';

import { getYear } from 'date-fns';
import { useLocation } from 'react-router-dom';

import { SETTINGS } from '@/constants/path';
import type { IDisplayProps } from '@/types/ui';

import ActiveLink from '../ui/active-link/active-link';
import SideMenu from './side-menu/side-menu';

interface ContentLayout {
  children: React.ReactNode;
}
const ContentLayout: FC<ContentLayout & IDisplayProps> = ({
  children,
  changeBackgroundColor,
  changeColorScheme,
}): ReactElement => {
  const location = useLocation();

  return (
    <div className="mx-auto h-screen max-w-7xl px-4">
      <div className="flex h-full gap-4">
        <div className="w-[20%]">
          <SideMenu
            changeBackgroundColor={changeBackgroundColor}
            changeColorScheme={changeColorScheme}
          />
        </div>
        {location.pathname.includes('/message') ||
        location.pathname.includes(SETTINGS) ? (
          <div className="flex-1">{children}</div>
        ) : (
          <>
            <div className="flex-1">{children}</div>
            <div className="w-[300px]">
              {/* <SideSearch />
              {tweetImages.length > 0 && <ProfileImages />}
              <Tags />
              <Users /> */}
              <div className="p-4">
                <>
                  <ActiveLink url="/explore">TERM OF SERVICE</ActiveLink>
                  <ActiveLink url="/explore">PRIVACY POLICY</ActiveLink>
                  <ActiveLink url="/explore">COOKIE POLICY</ActiveLink>
                </>
                <>
                  <ActiveLink url="/explore">ADS_INFO</ActiveLink>
                  <span className="pr-3 align-middle text-[13px] leading-4 font-normal text-gray-500 hover:underline">
                    MORE
                    {/* {EditIcon} */}
                  </span>
                  <span className="pr-3 align-middle text-[13px] leading-4 font-normal text-gray-500">{`© ${getYear(Date.now())}`}</span>
                </>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentLayout;
