import type { FC } from 'react';

import { ImageListItem } from '@/components/ui/image-list';
import ImageList from '@/components/ui/image-list/image-list';
import type { GiphyDataProps } from '@/types';

interface GifListProps {
  onClickGif: (gifUrl: GiphyDataProps) => void;
}

const GiftList: FC<GifListProps> = ({ onClickGif }) => {
  return (
    <ImageList cols={2} rowHeight={150}>
      {gifs.map((gif) => (
        <ImageListItem
          key={gif.id}
          className=""
          onClick={() => onClickGif(gif)}
        >
          <img src={gif.images.downsized.url} alt={gif.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GiftList;
