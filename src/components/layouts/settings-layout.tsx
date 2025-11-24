import { useMemo, type FC, type ReactElement } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import {
  settingsItemConfig,
  type SettingsItemType,
} from '@/features/settings/settings-config';
import SettingsHeaderWrapper from '@/features/settings/settings-header-wrapper';
import SettingsItem from '@/features/settings/settings-item';

import Icon from '../icons/icon';

const SettingsLayout: FC = (): ReactElement => {
  const location = useLocation();
  const normalizedPath = location.pathname.split('?')[0].replace(/\/+$/, '');

  const selectedIndex = useMemo(() => {
    const currentItem = settingsItemConfig.reduce(
      (bestMatch, currentItem) => {
        if (normalizedPath.startsWith(currentItem.linkTo)) {
          if (
            !bestMatch ||
            currentItem.linkTo.length > bestMatch.linkTo.length
          ) {
            return currentItem;
          }
        }
        return bestMatch;
      },
      null as (typeof settingsItemConfig)[0] | null,
    );

    return currentItem ? currentItem.index : 1;
  }, [normalizedPath]);

  const handleListItemClick = (): void => {
    // Navigation handled inside SettingsItem via Link
  };

  return (
    <div className="flex h-full w-full flex-col bg-white md:mx-auto md:flex-row md:rounded-xl md:bg-white">
      <div className="w-full flex-1 border-r border-[rgb(239,243,244)] md:max-w-[600px]">
        <div className="flex h-[53px] items-center px-4">
          <span className="text-[20px] font-bold text-[rgb(15,20,25)]">
            Settings
          </span>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center rounded-full bg-[rgb(239,243,244)] px-3 py-2">
            <Icon
              name="SearchIcon"
              className="mr-2 h-5 w-5 text-[rgb(83,100,113)]"
            />
            <input
              type="text"
              placeholder="Search Settings"
              className="w-full bg-transparent text-[15px] text-[rgb(15,20,25)] placeholder-[rgb(83,100,113)] outline-none"
            />
          </div>
        </div>
        <ul>
          {settingsItemConfig.map((route: SettingsItemType) => (
            <SettingsItem
              key={route.linkTo}
              index={route.index}
              handleListItemClick={handleListItemClick}
              linkTo={route.linkTo}
              selectedIndex={selectedIndex}
              title={route.title}
              className="text-[15px]"
            />
          ))}
        </ul>
      </div>

      <div className="bg-white md:max-w-[600px]">
        <div className="border-b border-[rgb(239,243,244)] px-4 py-3 md:hidden">
          <SettingsHeaderWrapper />
        </div>
        <div className="px-4 pt-4 pb-8 md:px-6">
          <div className="hidden md:block">
            <SettingsHeaderWrapper />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
