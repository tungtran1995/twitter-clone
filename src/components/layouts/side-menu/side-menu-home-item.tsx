import { useState, type FC, type ReactElement } from 'react';

import SideMenuItem from './side-menu-item';

interface SideMenuMessageItemProps {
  title: string;
  path: string;
  icon: React.ReactNode;
  filledIcon: React.ReactNode;
}

const SideMenuHomeItem: FC<SideMenuMessageItemProps> = ({
  title,
  path,
  icon,
  filledIcon,
}): ReactElement => {
  const [visibleHomeNotification] = useState<boolean>(false);

  return (
    <SideMenuItem title={title} path={path} icon={icon} filledIcon={filledIcon}>
      {visibleHomeNotification && (
        <span className="bg-primary absolute top-[2px] mb-[25px] ml-5 h-1.5 w-1.5 rounded-full" />
      )}
    </SideMenuItem>
  );
};

export default SideMenuHomeItem;
