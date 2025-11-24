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
          icon={<Icon name="ScheduleIcon" className="h-5 w-5" />}
          disabled={disabled}
        />
      </>
    );
  },
);

export default ScheduleIconButton;
