import type { FC, ReactElement } from 'react';

import { useLocation } from 'react-router-dom';

import Icon from '@/components/icons/icon';

interface AddTweetToBookmarksButtonProps {
  tweetId: number;
  closeShareTweet: () => void;
}

const AddTweetToBookmarksButton: FC<AddTweetToBookmarksButtonProps> = ({
  tweetId,
  closeShareTweet,
}): ReactElement => {
  const isTweetBookmarked = false; // Giả định giá trị này được lấy từ state hoặc props
  const location = useLocation();

  const onClickAddTweetToBookmarks = (): void => {
    closeShareTweet();
  };

  return (
    <div
      id="clickAddTweetToBookmarks"
      onClick={onClickAddTweetToBookmarks}
      className="flex cursor-pointer items-center p-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      role="menuitem" // Thêm role cho khả năng truy cập (accessibility)
    >
      {/* Icon, giả định nó có kích thước phù hợp hoặc cần được bao bọc */}
      <span className="mr-4 flex h-5 w-5 items-center justify-center">
        <Icon name="AddBookmarksIcon" className="h-4.25 w-4.25" />
      </span>

      {/* Thay thế Typography bằng <span> với các lớp Tailwind */}
      <span className="text-base font-medium">
        {isTweetBookmarked
          ? 'Remove Tweet from Bookmarks'
          : 'Add Tweet to Bookmarks'}
      </span>
    </div>
  );
};

export default AddTweetToBookmarksButton;
