import { useMemo, type FC, type ReactElement } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import type { DisplayProps } from '@/components/layouts/side-menu/side-menu-more-item';

import { settingsItemConfig, type SettingsItemType } from './settings-config';
import SettingsHeaderWrapper from './settings-header-wrapper';
import SettingsItem from './settings-item';

const Settings: FC<DisplayProps> = (): ReactElement => {
  const location = useLocation();
  const { pathname } = location;
  const normalizedPath = pathname.split('?')[0].replace(/\/+$/, '');

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

  const handleListItemClick = (index: number): void => {};

  return (
    <>
      <div className="">
        <div>
          <div>
            <span>Settings</span>
          </div>
        </div>
        <div>
          <ul>
            {settingsItemConfig.map((route: SettingsItemType, i: number) => (
              <SettingsItem
                key={i}
                index={route.index}
                handleListItemClick={handleListItemClick}
                linkTo={route.linkTo}
                selectedIndex={selectedIndex}
                title={route.title}
              />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <SettingsHeaderWrapper />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Settings;
