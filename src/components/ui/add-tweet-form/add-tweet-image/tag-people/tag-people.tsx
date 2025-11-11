import type { FC, ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import { useModalWindow } from '@/hooks/useModalWindow';

import ImageAction from '../image-action/image-action';
import TagPeopleModal from './tag-people-modal/tag-people-modal';

const TagPeople: FC = (): ReactElement => {
  const { visibleModalWindow, onOpenModalWindow, onCloseModalWindow } =
    useModalWindow();
  return (
    <>
      <ImageAction
        subtitle="Tag People"
        onClick={onOpenModalWindow}
        icon={() => <Icon name="ProfileIcon" className="mr-2 h-4 w-4" />}
      />
      <TagPeopleModal
        visible={visibleModalWindow}
        onClose={onCloseModalWindow}
      />
    </>
  );
};

export default TagPeople;
