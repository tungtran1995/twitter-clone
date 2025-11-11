import { Link } from 'react-router-dom';

interface ActiveLinkProps {
  url: string;
  children: React.ReactNode;
}
const ActiveLink = ({ children, url }: ActiveLinkProps) => {
  //   const pathname = usePathname();
  //   const isActive = url === pathname;

  return (
    <Link to={url} className="no-underline">
      <span className="cursor-pointer pr-3 text-[13px] leading-4 font-normal text-gray-500 hover:underline">
        {children}
      </span>
    </Link>
  );
};

export default ActiveLink;
