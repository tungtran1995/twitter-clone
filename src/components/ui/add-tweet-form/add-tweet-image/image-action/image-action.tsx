import type React from 'react';

interface ImageActionProps {
  subtitle: string;
  icon: React.ComponentType;
  onClick: () => void;
}

const ImageAction: React.FC<ImageActionProps> = ({
  subtitle,
  icon: Icon,
  onClick,
}) => {
  return (
    <div
      className="mr-12 inline-flex cursor-pointer items-center hover:underline"
      onClick={onClick}
    >
      <Icon />
      <span className="text-base font-medium">{subtitle}</span>
    </div>
  );
};

export default ImageAction;
