import type { FC, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import Icon from '@/components/icons/icon';
import {
  BOOKMARKS,
  HOME,
  LISTS,
  MESSAGES,
  NOTIFICATIONS,
  PROFILE,
  SEARCH,
} from '@/constants/path';
import {
  BookmarksIcon,
  BookmarksIconFilled,
  ExploreIcon,
  ExploreIconFilled,
  HomeIcon,
  HomeIconFilled,
  ListsIcon,
  ListsIconFilled,
  MessagesIcon,
  MessagesIconFilled,
  NotificationsIcon,
  NotificationsIconFilled,
  ProfileIcon,
  ProfileIconFilled,
} from '@/icon';
import type { IDisplayProps } from '@/types/ui';

import SideMenuHomeItem from './side-menu-home-item';
import SideMenuItem from './side-menu-item';
import SideMenuMessageItem from './side-menu-message-item';
import SideMenuMoreItem from './side-menu-more-item';
import SideMenuNotificationItem from './side-menu-notification-item';
import UserSideProfile from './user-side-profile';

const SideMenu: FC<IDisplayProps> = (): ReactElement => {
  const changeBackgroundColor = () => {};

  const changeColorScheme = () => {};
  return (
    <div className="r fixed top-0 h-full bg-white p-4">
      <ul className="m-0 list-none space-y-2 p-0">
        <li>
          <NavLink
            to={HOME}
            className={({ isActive }) =>
              isActive ? 'flex items-center' : 'flex items-center'
            }
          >
            <div className="ml-2">
              <button
                type="button"
                className="flex min-h-[52px] min-w-[52px] items-center justify-center border-none bg-transparent text-[#1976d2]!"
              >
                <div
                  className="h-8 w-8 [&>svg]:h-full [&>svg]:w-full"
                  style={{ width: '32px', height: '32px' }}
                >
                  <Icon name="XIcon" className="text-black" />
                </div>
              </button>
            </div>
          </NavLink>
        </li>
        <SideMenuHomeItem
          title="Home"
          path={HOME}
          icon={HomeIcon}
          filledIcon={HomeIconFilled}
        />
        <SideMenuItem
          title="Explore"
          path={SEARCH}
          icon={ExploreIcon}
          filledIcon={ExploreIconFilled}
        />
        <SideMenuNotificationItem
          title="Notifications"
          path={NOTIFICATIONS}
          icon={NotificationsIcon}
          filledIcon={NotificationsIconFilled}
        />
        <SideMenuMessageItem
          title="Messages"
          path={MESSAGES}
          icon={MessagesIcon}
          filledIcon={MessagesIconFilled}
        />
        <SideMenuItem
          title="bookmarks"
          path={BOOKMARKS}
          icon={BookmarksIcon}
          filledIcon={BookmarksIconFilled}
        />
        <SideMenuItem
          title="Lists"
          path={LISTS}
          icon={ListsIcon}
          filledIcon={ListsIconFilled}
        />
        <SideMenuItem
          title="Profile"
          path={`${PROFILE}`}
          icon={ProfileIcon}
          filledIcon={ProfileIconFilled}
        />
        <SideMenuMoreItem
          changeColorScheme={changeColorScheme}
          changeBackgroundColor={changeBackgroundColor}
        />
      </ul>
      <UserSideProfile />
    </div>
  );
};

export default SideMenu;
