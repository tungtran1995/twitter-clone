import type { FC } from 'react';

import { Link } from 'react-router-dom';

import { HOME_TWEET } from '@/constants/path';
import type { GifImageResponse } from '@/types/tweet';

import Icon from '../../icons/icon';
import ActionIconButton from '../action-icon-button/action-icon-button';

interface GifImageProps {
  tweetId?: number;
  gifImage?: GifImageResponse;
  removeButton?: boolean;
  withLink?: boolean;
}

interface WithLinkProps {
  children: React.ReactNode;
  withLink?: boolean;
  tweetId?: number;
}

const WithLink = ({ children, withLink, tweetId }: WithLinkProps) =>
  withLink ? (
    <Link to={`${HOME_TWEET}/${tweetId}`}>{children}</Link>
  ) : (
    <>{children}</>
  );

const GifImage: FC<GifImageProps> = ({
  tweetId,
  gifImage,
  removeButton,
  withLink,
}) => {
  const width = gifImage?.width ?? 0;
  const height = gifImage?.height ?? 0;

  const onClickRemoveGif = () => {};
  return (
    <WithLink withLink={withLink} tweetId={tweetId}>
      <div
        className={`relative mt-3 flex items-center rounded-2xl ${width === height || width > height ? '' : 'bg-black'}`}
      >
        <img src={gifImage?.url} alt="" />
        {removeButton && (
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              zIndex: 1,
            }}
          >
            <ActionIconButton
              actionText="Remove"
              icon={<Icon name="CloseIcon" />}
              onClick={onClickRemoveGif}
              size="medium"
            />
          </div>
        )}
      </div>
    </WithLink>
  );
};

export default GifImage;
