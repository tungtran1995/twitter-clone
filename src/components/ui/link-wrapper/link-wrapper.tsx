import { Link } from 'react-router-dom';

interface LinkWrapperProps {
  children: React.ReactNode;
  path: string;
  visiblePopperWindow?: boolean;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  children,
  path,
  visiblePopperWindow = true,
}) => {
  return visiblePopperWindow ? (
    <span>{children}</span>
  ) : (
    <Link to={path} className="no-underline">
      {children}
    </Link>
  );
};

export default LinkWrapper;
