import React from 'react';

import { ScheduleIcon } from '@/icon';
import { formatScheduleDate } from '@/utils';

const ScheduleDateInfo: React.FC = (): React.ReactElement | null => {
  const date = formatScheduleDate(new Date());
  const scheduleDate = false;

  if (!scheduleDate) {
    return null;
  }

  return (
    <div className="mb-2.5 flex items-center text-gray-600">
      {React.cloneElement(ScheduleIcon, {
        className: 'mr-3 h-[1.3em] fill-gray-500',
      })}
      <span className="text-sm font-medium text-gray-700">
        {`Will be sent on ${date}`}
      </span>
    </div>
  );
};

export default ScheduleDateInfo;
