import { Link } from 'react-router-dom';

import ActionIconButton from '@/components/ui/action-icon-button/action-icon-button';
import DropdownDrawer from '@/components/ui/dropdown-drawer/dropdown-drawer';
import { SETTINGS_CONTENT_PREFERENCES } from '@/constants/path';
import { useClickAway } from '@/hooks/useClickAway';
import {
  SeeLatestIcon,
  SettingsIcon,
  ShowLatestTweets,
  ShowTopTweets,
  TopTweets,
} from '@/icon';

interface TopTweetActionsProps {
  switchTweets: boolean;
  handleLateestTweets: () => void;
  handleTopTweets: () => void;
}

const TopTweetActions: React.FC<TopTweetActionsProps> = ({
  switchTweets,
  handleLateestTweets,
  handleTopTweets,
}) => {
  const { open, onClickOpen, onClickClose } = useClickAway();

  return (
    <DropdownDrawer onClickOutside={onClickClose}>
      <div className="relative">
        <div className="pr-2.5">
          <ActionIconButton
            actionText="Top Tweets"
            icon={TopTweets}
            onClick={onClickOpen}
          />
        </div>
        {open && (
          <div className="absolute right-0 z-50 mt-3 w-80 rounded-xl border border-gray-200 bg-white shadow-lg">
            <div className="flex items-start gap-3 py-4">
              <div className="flex h-8 w-8 items-center justify-center">
                {switchTweets ? ShowLatestTweets : ShowTopTweets}
              </div>
              <p className="text-[15px] font-semibold text-gray-800">
                {switchTweets
                  ? 'Lastest Tweets show up as they happen'
                  : 'Home shows you the top Tweets first'}
              </p>
            </div>
            <div className="border-t border-gray-200" />

            <ul className="divide-y divide-gray-100">
              <li
                id="switchTweets"
                onClick={switchTweets ? handleTopTweets : handleLateestTweets}
                className="cursor-pointer transition hover:bg-gray-50"
              >
                <div className="flex items-start gap-3 p-4">
                  <span className="text-xl">{SeeLatestIcon}</span>
                  <div>
                    <p className="text-[15px] font-medium text-gray-900">
                      {switchTweets
                        ? 'Go back home'
                        : 'See latest Tweets instead'}
                    </p>
                    <p className="text-[13px] font-medium text-gray-900">
                      {switchTweets
                        ? 'You will see top Tweets first'
                        : 'You will see Tweets as they happen.'}
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  to={SETTINGS_CONTENT_PREFERENCES}
                  className="block transition hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3 p-4">
                    <span className="text-xl">{SettingsIcon}</span>
                    <p className="text-[15px] font-medium text-gray-900">
                      View content preferences
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </DropdownDrawer>
  );
};

export default TopTweetActions;
