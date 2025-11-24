// import { ListItem, Typography } from "@material-ui/core"; // Loại bỏ Material UI

import type { FC, ReactElement } from 'react';

import Icon from '@/components/icons/icon';

const ShareTweet: FC = (): ReactElement => {
  return (
    <li className="flex cursor-pointer items-center p-3 transition-colors hover:bg-gray-100/70 dark:hover:bg-gray-800/70">
      <div className="mr-4 h-5 w-5 text-gray-700 dark:text-gray-300">
        <>
          <Icon name="ShareIcon" className="h-4.25 w-4.25" />
        </>
      </div>

      <span className="text-base font-normal dark:text-white">
        Share Tweet via ...
      </span>
    </li>
  );
};

export default ShareTweet;
