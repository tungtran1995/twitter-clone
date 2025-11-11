import { SVG_ICON_DATA, type IconName } from './icon-data';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
  size?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  size = '6',
  viewBox: customViewBox,
  ...rest
}) => {
  const iconData = SVG_ICON_DATA[name];

  if (!iconData) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }

  const sizeClasses = `w-${size} h-${size}`;

  return (
    <svg
      className={`${sizeClasses} ${className} inline-block`}
      fill="currentColor"
      viewBox={customViewBox || iconData.viewBox}
      aria-hidden="true"
      {...rest}
      dangerouslySetInnerHTML={{ __html: iconData.path }}
    />
  );
};

export default Icon;
