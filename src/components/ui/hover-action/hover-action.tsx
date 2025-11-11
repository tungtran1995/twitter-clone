import type { FC, ReactElement } from 'react';

interface HoverActionProps {
  visible: boolean;
  positionTop?: boolean;
  actionText: string;
}

const HoverAction: FC<HoverActionProps> = ({
  visible,
  positionTop = false,
  actionText,
}): ReactElement | null => {
  if (!visible) return null;

  return (
    <div
      className="absolute z-20 rounded-sm bg-black/60 px-1 py-0.5 text-[11px] font-medium"
      style={{ marginTop: positionTop ? '-50px' : '60px' }}
    >
      <span id="action-text" className="leading-3 text-white">
        {actionText}
      </span>
    </div>
  );
};

export default HoverAction;
