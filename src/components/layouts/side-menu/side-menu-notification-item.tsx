import SideMenuItem from './side-menu-item';

interface SideMenuNotificationItemProps {
  title: string;
  path: string;
  icon: React.ReactNode;
  filledIcon: React.ReactNode;
}
const SideMenuNotificationItem: React.FC<SideMenuNotificationItemProps> = ({
  title,
  path,
  icon,
  filledIcon,
}) => {
  const notificationsCount = 5;

  return (
    <SideMenuItem title={title} path={path} icon={icon} filledIcon={filledIcon}>
      {notificationsCount > 0 && (
        <span
          id="notification-count"
          className="bg-primary absolute top-1.25 ml-2.5 h-[19] w-[19px] rounded-full text-center text-[13px] text-white"
        >
          {notificationsCount}
        </span>
      )}
    </SideMenuItem>
  );
};

export default SideMenuNotificationItem;
