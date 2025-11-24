import type { FC, ReactElement } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import { useLocation } from 'react-router';

import Icon from '@/components/icons/icon';
import { CLIENT_URL } from '@/constants/url';

interface CopyLinkToTweetButtonProps {
  closeShareTweet: () => void;
}

const CopyLinkToTweetButton: FC<CopyLinkToTweetButtonProps> = ({
  closeShareTweet,
}): ReactElement => {
  const location = useLocation();

  const onCopyLinkToTweet = (): void => {
    closeShareTweet();
  };

  const linkToCopy = `${CLIENT_URL}${location.pathname}`;

  return (
    <CopyToClipboard text={linkToCopy}>
      <div
        id="copyLinkToTweet"
        onClick={onCopyLinkToTweet}
        className="flex cursor-pointer items-center p-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        role="menuitem"
      >
        <span className="mr-4 flex h-5 w-5 items-center justify-center">
          <Icon name="LinkIcon" className="h-4.25 w-4.25" />
        </span>
        <span className="text-base font-medium">Copy link to Tweet</span>
      </div>
    </CopyToClipboard>
  );
};

export default CopyLinkToTweetButton;
