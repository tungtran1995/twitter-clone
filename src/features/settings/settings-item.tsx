import { NavLink } from 'react-router-dom';

import Icon from '@/components/icons/icon';

interface SettingsItemProps {
  index: number;
  linkTo: string;
  selectedIndex: number;
  handleListItemClick: (index: number) => void;
  title: string;
  className?: string;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  index,
  linkTo,
  selectedIndex,
  handleListItemClick,
  title,
  className,
}) => {
  return (
    <NavLink to={linkTo} className="flex items-center justify-between px-4 py-3">
      <li onClick={() => handleListItemClick(index)} className={className}>
        <span>{title}</span>
      </li>
      <Icon
        name="ArrowRightIcon"
        className="h-[18.75px] text-[rgba(83,100,113,1.00)]"
      />
    </NavLink>
  );
};

export default SettingsItem;
