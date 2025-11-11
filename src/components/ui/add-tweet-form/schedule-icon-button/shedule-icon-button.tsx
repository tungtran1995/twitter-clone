import { memo, type FC, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';

import ActionIconButton from '../../action-icon-button/action-icon-button';

interface ScheduleIconButtonProps {
  buttonName: string;
  disabled?: boolean;
}

const ScheduleIconButton: FC<ScheduleIconButtonProps> = memo(
  ({ buttonName, disabled }): ReactElement => {
    return (
      <>
        <ActionIconButton
          actionText="Schedule"
          icon={<Icon name="ScheduleIcon" />}
          size="medium"
          disabled={disabled}
        />
      </>
    );
  },
);

export default ScheduleIconButton;
