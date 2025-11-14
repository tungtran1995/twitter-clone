import { memo, type FC, type ReactElement } from 'react';

import { useParams } from 'react-router';

import Icon from '@/components/icons/icon';

import ActionIconButton from '../../action-icon-button/action-icon-button';

interface TweetLikeIconButtonProps {
  tweetId?: number;
  isTweetLiked?: boolean;
  likesCount?: number;
}

const LikeIconButton: FC<TweetLikeIconButtonProps> = memo(
  ({ tweetId, isTweetLiked, likesCount }): ReactElement => {
    const { userId } = useParams<{ userId: string }>();

    const handleLike = (): void => {};

    return (
      <div className="flex items-center">
        <ActionIconButton
          actionText={isTweetLiked ? 'Unlike' : 'Like'}
          icon={
            isTweetLiked ? (
              <Icon name="LikeIcon" className="h-4.25 w-4.25" />
            ) : (
              <Icon name="LikeOutlinedIcon" className="h-4.25 w-4.25" />
            )
          }
          onClick={handleLike}
        />
        {likesCount !== 0 && (
          <span id="likesCount" className="pr-4 align-middle text-[13px]">
            {likesCount}
          </span>
        )}
      </div>
    );
  },
);

export default LikeIconButton;
