import type React from 'react';
import { type ReactNode } from 'react';

interface ImageActionProps {
  subtitle: string;
  icon: ReactNode;
  onClick: () => void;
}

const ImageAction: React.FC<ImageActionProps> = ({
  subtitle,
  icon,
  onClick,
}) => {
  return (
    <div
      className="mr-12 inline-flex cursor-pointer items-center hover:underline"
      onClick={onClick}
    >
      {icon}
      <span className="text-[13px] font-normal text-[#536471]">{subtitle}</span>
    </div>
  );
};

export default ImageAction;
