import type { FC, ReactElement } from 'react';

import { getYear } from 'date-fns';
import { useLocation } from 'react-router-dom';

import { SETTINGS } from '@/constants/path';
import type { IDisplayProps } from '@/types/ui';

import ActiveLink from '../ui/active-link/active-link';
import SideMenu from './side-menu/side-menu';

interface MainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayout & IDisplayProps> = ({
  children,
  changeBackgroundColor,
  changeColorScheme,
}): ReactElement => {
  const location = useLocation();

  return (
    <div className="mx-[295px] h-full">
      <div className="flex h-full">
        <div className="w-[275px] border-r border-gray-200">
          <div className="sticky top-0 h-screen">
            <SideMenu
              changeBackgroundColor={changeBackgroundColor}
              changeColorScheme={changeColorScheme}
            />
          </div>
        </div>

        {location.pathname.includes('/message') ||
        location.pathname.includes(SETTINGS) ? (
          <div className="flex-1">{children}</div>
        ) : (
          <>
            <div className="flex-1">{children}</div>
            <div className="w-[300px]">
              {/* Right column extras (search, tags, users, etc.) */}
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

export default MainLayout;
