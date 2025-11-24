import type { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import Icon from '@/components/icons/icon';

import ActionIconButton from '../action-icon-button/action-icon-button';

const BackButton = (): ReactElement => {
  const navigate = useNavigate();

  const handleClickButton = (): void => {
    navigate(-1);
  };

  return (
    <div className="">
      <ActionIconButton
        actionText="Back"
        onClick={handleClickButton}
        icon={<Icon name="ArrowBottomIcon" />}
      />
    </div>
  );
};

export default BackButton;
