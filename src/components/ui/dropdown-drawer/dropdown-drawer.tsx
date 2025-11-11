import { useEffect, useRef } from 'react';

interface DropdownDrawerProps {
  onClickOutside: () => void;
  children: React.ReactNode;
}

const DropdownDrawer = ({ onClickOutside, children }: DropdownDrawerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
};

export default DropdownDrawer;
