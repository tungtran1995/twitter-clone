import type { FC, ReactElement } from 'react';

import Icon from '@/components/icons/icon';

import ImageAction from '../image-action/image-action';

const AddDescription: FC = (): ReactElement => {
  const handleAddDescription = () => {
    // Handle add description logic
  };

  return (
    <>
      <ImageAction
        subtitle="Add description"
        icon={<Icon name="ListsIcon" className="h-5 w-5" />}
        onClick={handleAddDescription}
      />
    </>
  );
};

export default AddDescription;
