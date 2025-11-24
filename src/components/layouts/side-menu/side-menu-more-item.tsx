import type { FC, ReactElement } from 'react';

import { Link } from 'react-router-dom';

import Icon from '@/components/icons/icon';
import Popover from '@/components/ui/pop-over/pop-over';
import { LISTS, MESSAGES, SETTINGS } from '@/constants/path';
import { ADS_TWITTER } from '@/constants/url';
import { usePopup } from '@/hooks/usePopup';
import type { BackgroundTheme, ColorScheme } from '@/types';

export interface DisplayProps {
  changeBackgroundColor: (background: BackgroundTheme) => void;
  changeColorScheme: (color: ColorScheme) => void;
}
const SideMenuMoreItem: FC<DisplayProps> = ({
  changeBackgroundColor,
  changeColorScheme,
}): ReactElement => {
  const {
    popoverId,
    anchorEl,
    openPopover,
    handleOpenPopup,
    handleClosePopup,
  } = usePopup();

  return (
    <>
      <li>
        <div onClick={handleOpenPopup} className="cursor-pointer">
          <div className="flex items-center rounded-full px-4 py-3 transition-colors duration-200">
            <span className="mr-4 text-base font-medium">
              <Icon name="MoreIcon" />
            </span>
            <span className="text-base">More</span>
          </div>
        </div>
        <Popover
          id={popoverId}
          open={openPopover}
          anchorEl={anchorEl}
          onClose={handleClosePopup}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Link to={ADS_TWITTER}>
            <div
              id="closePopup"
              onClick={handleClosePopup}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Icon name="AdsIcon" className="h-5 w-5" />

              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Ads
              </span>
            </div>
          </Link>
          <Link to={LISTS}>
            <div
              id="closePopup"
              onClick={handleClosePopup}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Icon name="ListsIcon" className="h-5 w-5" />

              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Lists
              </span>
            </div>
          </Link>
          <Link to={MESSAGES}>
            <div
              id="closePopup"
              onClick={handleClosePopup}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Icon name="ReplyIcon" className="h-5 w-5" />

              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Chat
              </span>
            </div>
          </Link>
          <Link to={SETTINGS}>
            <div
              id="closePopup"
              onClick={handleClosePopup}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Icon name="SettingsIcon" className="h-5 w-5" />

              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Settings and privacy
              </span>
            </div>
          </Link>
        </Popover>
      </li>
    </>
  );
};

export default SideMenuMoreItem;
