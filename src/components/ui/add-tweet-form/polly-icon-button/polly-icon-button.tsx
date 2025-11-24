import { memo, type FC, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';

import ActionIconButton from '../../action-icon-button/action-icon-button';

interface PollIconButtonProps {
  buttonName: string;
  disabled?: boolean;
}

const PollIconButton: FC<PollIconButtonProps> = memo(
  ({ buttonName, disabled }): ReactElement => {
    const onClickOpenPoll = () => {};
    return (
      <>
        {buttonName !== 'Reply' && (
          <div>
            <ActionIconButton
              actionText="Poll"
              icon={<Icon name="PollIcon" className="h-5 w-5" />}
              onClick={onClickOpenPoll}
              disabled={disabled}
            />
          </div>
        )}
      </>
    );
  },
);

export default PollIconButton;
