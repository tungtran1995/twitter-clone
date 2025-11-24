import { memo, type FC, type ReactElement } from 'react';

import { useLocation } from 'react-router-dom';

import Icon from '@/components/icons/icon';

import ActionIconButton from '../../action-icon-button/action-icon-button';
import { useUploadImageStore } from '../upload-images/upload-images-store';
import TagPeople from './tag-people/tag-people';

const AddTweetImage: FC = memo((): ReactElement | null => {
  const location = useLocation();
  const images = useUploadImageStore((state) => state.images);
  const scroll = images.length > 2;

  const onClickRemoveImage = (): void => {};

  if (images.length === 0) {
    return null;
  }

  console.log(images);

  return (
    <div className="relative">
      <div className={`flex gap-2 ${scroll ? 'overflow-x-auto py-2' : ''}`}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`shrink-0 overflow-hidden rounded-xl ${
              images.length === 1
                ? 'h-auto max-h-[500px] w-full'
                : scroll
                  ? 'h-48 w-48'
                  : 'h-48 flex-1'
            }`}
          >
            <img
              src={img.src}
              alt={`preview-${idx}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div>
        <TagPeople />
        {/* <AddDescription /> */}
      </div>
      <div className="absolute top-3 right-[5px]">
        <ActionIconButton
          actionText="Remove"
          icon={<Icon name="CloseIcon" className="h-5 w-5 text-white" />}
          onClick={onClickRemoveImage}
          size="medium"
          className="bg-twitter-black hover:bg-[rgba(39,44,48,0.75)]!"
        />
      </div>
    </div>
  );
});

export default AddTweetImage;
