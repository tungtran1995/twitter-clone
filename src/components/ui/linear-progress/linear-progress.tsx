import { type FC } from 'react';

interface LinearProgressProps {
  value: number; // 0-100
  color?: 'blue' | 'green' | 'red';
  height?: number; // in pixels
}

const LinearProgress: FC<LinearProgressProps> = ({
  value,
  color = 'blue',
  height = 3,
}) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
  };

  return (
    <div
      className="absolute top-0 left-0 right-0 z-50 overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <div
        className={`h-full ${colorClasses[color]} transition-all duration-300 ease-out`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};

export default LinearProgress;
