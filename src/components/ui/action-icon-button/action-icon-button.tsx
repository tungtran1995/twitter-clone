import type { FC, ReactElement } from 'react';
import { useRef } from 'react';

import IconButton from '../icon-button/icon-button';

interface ActionIconButtonProps {
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  actionText: string;
  icon: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const ActionIconButton: FC<ActionIconButtonProps> = ({
  id,
  onClick,
  actionText,
  icon,
  size = 'medium',
  disabled,
  className,
}): ReactElement => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (onClick && buttonRef.current) {
      // Create a proper event object for compatibility
      const mockEvent = {
        currentTarget: buttonRef.current,
      } as unknown as React.MouseEvent<HTMLElement>;
      onClick(mockEvent);
    }
  };

  return (
    <div id={id} className="inline-block" ref={buttonRef}>
      <IconButton
        onClick={handleClick}
        disabled={disabled}
        icon={icon}
        size={size}
        actionText={actionText}
        className={className}
      />
    </div>
  );
};

export default ActionIconButton;
