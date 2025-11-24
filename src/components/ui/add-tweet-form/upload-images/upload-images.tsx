import { memo, useRef, type FC, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';

import ActionIconButton from '../../action-icon-button/action-icon-button';
import { useUploadImageStore } from './upload-images-store';

const UploadImages: FC = memo((): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addImages = useUploadImageStore((state) => state.addImages);

  const handleChangeFileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Convert FileList to File array
    const fileArray = Array.from(files);
    
    // Upload images (store handles preview + upload)
    await addImages(fileArray);

    // Reset input để có thể chọn lại cùng file
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClickImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <ActionIconButton
        actionText="Media"
        icon={<Icon name="MediaIcon" className="h-5 w-5" />}
        onClick={handleClickImage}
      />
      <input
        ref={inputRef}
        type="file"
        id="upload-input"
        accept="image/*"
        multiple
        hidden
        onChange={handleChangeFileImage}
      />
    </>
  );
});

export default UploadImages;
