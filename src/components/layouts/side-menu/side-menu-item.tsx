import type { FC, ReactElement } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

interface SideMenuItemProps {
  title: string;
  path: string;
  icon: React.ReactNode;
  filledIcon: React.ReactNode;
  children?: React.ReactNode;
}

const SideMenuItem: FC<SideMenuItemProps> = ({
  title,
  path,
  icon,
  filledIcon,
  children,
}): ReactElement => {
  const location = useLocation();

  return (
    <li className="relative mb-1 h-auto cursor-pointer">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center rounded-full px-4 py-3 transition-colors duration-200 ${
            isActive
              ? 'bg-blue-50 font-semibold text-blue-500'
              : 'text-gray-700 hover:bg-gray-100'
          }`
        }
      >
        {children}

        {/* Icon Logic */}
        <div className="flex h-6 w-6 items-center justify-center">
          <div
            className="h-full w-full [&>svg]:h-full [&>svg]:w-full"
            style={{ width: '24px', height: '24px' }}
          >
            {location.pathname === path || location.pathname.includes(path)
              ? filledIcon
              : icon}
          </div>
        </div>

        {/* Title */}
        <span className="ml-4 text-base font-medium">{title}</span>
      </NavLink>
    </li>
  );
};

export default SideMenuItem;
