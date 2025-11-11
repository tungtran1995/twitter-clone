import {
  memo,
  useCallback,
  useEffect,
  useRef,
  type FC,
  type ReactElement,
} from 'react';

import Icon from '@/components/icons/icon';

import ActionIconButton from '../../action-icon-button/action-icon-button';

const UploadImages: FC = memo((): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChangeFileImage = useCallback((event: Event): void => {
    const target = event.target as HTMLInputElement;
    if (target) {
      const file = target.files?.[0];
      if (file) {
        const fileObj = new Blob([file]);
      }
    }
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.addEventListener('change', handleChangeFileImage);
    }

    return () => {
      if (input) {
        input.removeEventListener('change', handleChangeFileImage);
      }
    };
  }, []);

  return (
    <>
      <ActionIconButton
        actionText="Media"
        icon={<Icon name="MediaIcon" />}
        onClick={handleClickImage}
        size="medium"
      />
      <input ref={inputRef} type="file" id="upload-input" hidden />
    </>
  );
});

export default UploadImages;
