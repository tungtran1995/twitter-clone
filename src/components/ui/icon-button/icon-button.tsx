import { useState } from 'react';

import HoverAction from '../hover-action/hover-action';

interface IconButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  actionText?: string;
}

const IconButton = ({
  onClick,
  disabled,
  icon,
  size = 'medium',
  actionText,
}: IconButtonProps) => {
  const [hover, setHover] = useState(false);

  const sizeClass =
    size === 'small' ? 'w-7 h-7' : size === 'large' ? 'w-11 h-11' : 'w-9 h-9'; // medium default

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center justify-center rounded-full transition ${sizeClass} ${
          disabled
            ? 'cursor-not-allowed bg-gray-200'
            : 'hover:bg-gray-100 active:bg-gray-200'
        }`}
      >
        {icon}
      </button>

      <HoverAction visible={hover} actionText={actionText || ''} />
    </div>
  );
};

export default IconButton;
