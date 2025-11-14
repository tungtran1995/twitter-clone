import type { FC, ReactElement } from 'react';

import SideMenuItem from './side-menu-item';

interface SideMenuMessageItemProps {
  title: string;
  path: string;
  icon: React.ReactNode;
  filledIcon: React.ReactNode;
}

const SideMenuMessageItem: FC<SideMenuMessageItemProps> = ({
  title,
  path,
  icon,
  filledIcon,
}): ReactElement => {
  const unreadMessagesCount = 3;

  return (
    <SideMenuItem title={title} path={path} icon={icon} filledIcon={filledIcon}>
      {unreadMessagesCount > 0 && (
        <span className="bg-primary absolute top-1.25 ml-2.5 h-[19] w-[19px] rounded-full text-center text-[13px] text-white">
          {unreadMessagesCount}
        </span>
      )}
    </SideMenuItem>
  );
};

export default SideMenuMessageItem;
