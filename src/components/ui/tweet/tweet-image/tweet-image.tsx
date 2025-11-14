import { useState, type ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { MODAL } from '@/constants/path';
import type { TaggedUserResponse } from '@/types';

import ImageDescription from '../image-description/image-description';

interface TweetImageProps {
  tweetId?: number;
  imageSrc?: string;
  imageDescription?: string;
  taggedImageUsers?: TaggedUserResponse[];
}

const TweetImage: React.FC<TweetImageProps> = ({
  tweetId,
  imageSrc,
  imageDescription,
}): ReactElement => {
  const isModal = location.pathname.includes(MODAL);
  const [loaded, setLoaded] = useState(false);

  // Reserve a 3:2 aspect ratio area so content doesn't shift when image loads.
  // When the image is still loading, show a subtle skeleton placeholder.
  const wrapperStyle: React.CSSProperties = isModal
    ? { width: 260, aspectRatio: '3 / 2' }
    : { width: '100%', aspectRatio: '3 / 2' };

  return (
    <div id="tweetImage">
      <Link to={`${MODAL}/${tweetId}`} state={{ background: location }}>
        <div
          style={wrapperStyle}
          className="relative overflow-hidden rounded-md"
        >
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200" />
          )}
          <img
            className="h-full w-full object-cover"
            src={imageSrc}
            alt={imageSrc || 'tweet image'}
            loading={isModal ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={isModal ? 'high' : 'low'}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </Link>
      {imageDescription && (
        <ImageDescription imageDescription={imageDescription} />
      )}
    </div>
  );
};

export default TweetImage;
