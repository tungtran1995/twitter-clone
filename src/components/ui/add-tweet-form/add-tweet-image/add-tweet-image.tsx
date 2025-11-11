import { memo, type FC, type ReactElement } from 'react';

import { useLocation } from 'react-router-dom';

import { MODAL } from '@/constants/path';
import { CloseIcon } from '@/icon';

import ActionIconButton from '../../action-icon-button/action-icon-button';
import TagPeople from './tag-people/tag-people';

const AddTweetImage: FC = memo((): ReactElement => {
  const location = useLocation();

  const onClickRemoveImage = (): void => {};

  return (
    <div className="relative">
      <img
        className={
          location.pathname.includes(MODAL)
            ? 'border-info-light mt-2.5 h-[280px] w-[504px] rounded-[20px] object-cover'
            : 'border-info-light mt-2.5 h-[152px] w-[260px] rounded-[20px] object-cover'
        }
        src=""
        alt=""
      />
      <div>
        <TagPeople />
        {/* <AddDescription /> */}
      </div>
      <div>
        <ActionIconButton
          actionText="Remove"
          icon={CloseIcon}
          onClick={onClickRemoveImage}
          size="medium"
        />
      </div>
    </div>
  );
});

export default AddTweetImage;
