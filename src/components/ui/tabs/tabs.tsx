import {
  Children,
  cloneElement,
  isValidElement,
  type FC,
  type ReactElement,
} from 'react';

export interface TabsProps {
  value?: number;
  onChange?: (newValue: number) => void;
  children: React.ReactNode;
  className?: string;
}

const Tabs: FC<TabsProps> = ({ value = 0, onChange, children, className }) => {
  return (
    <div role="tablist" className={`flex ${className}`}>
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child as ReactElement<any>, {
              isActive: value === index,
              onSelect: () => onChange?.(index),
              index,
            })
          : child,
      )}
    </div>
  );
};

export default Tabs;
