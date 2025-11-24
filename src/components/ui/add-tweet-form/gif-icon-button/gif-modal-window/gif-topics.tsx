import type { FC } from 'react';

import { ImageList, ImageListItem } from '@/components/ui/image-list';
import { ImageListItemBar } from '@/components/ui/image-list-item-bar/image-list-item-bar';
import { Spinner } from '@/components/ui/spinner';

interface GifTopicsProps {
  onClickGifTopic: (topic: string) => void;
}

const GifTopics: FC<GifTopicsProps> = ({ onClickGifTopic }) => {
  const gifImagesLoading = false;
  const gifImages = [];
  return (
    <ImageList cols={2} rowHeight={150}>
      {gifImagesLoading ? (
        <Spinner />
      ) : (
        gifImages.map((gif) => (
          <ImageListItem
            key={gif.id}
            className=""
            onClick={() => onClickGifTopic(gif.title)}
          >
            <img alt={gif.title} src={gif.src} />
            <ImageListItemBar
              title={
                <div className="text-2xl leading-snug font-normal">
                  {gif.title}
                </div>
              }
            />
          </ImageListItem>
        ))
      )}
    </ImageList>
  );
};

export default GifTopics;
