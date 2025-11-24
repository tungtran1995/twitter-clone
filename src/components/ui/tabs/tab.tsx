import type { FC } from 'react';

export interface CustomTabProps {
  label: string;
  isActive?: boolean;
  onSelect?: () => void;
  index?: number;
  className?: string;
  classNameText?: string;
}
const Tab: FC<CustomTabProps> = ({
  label,
  isActive = false,
  onSelect = () => {},
  index,
  className = '',
  classNameText = '',
}) => {
  console.log(isActive);

  return (
    <div
      role="tab"
      tabIndex={0}
      aria-selected={isActive}
      aria-controls={`tab-panel-${index}`}
      id={`tab-${index}`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect();
      }}
      className={`-mb-px cursor-pointer px-4 py-2 text-sm font-medium transition-colors select-none focus:outline-none ${className}`}
    >
      <span
        className={`border-b-3 ${classNameText} ${
          isActive
            ? 'borderborder-blue-500 text-blue-600 dark:text-blue-400'
            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-300'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default Tab;
