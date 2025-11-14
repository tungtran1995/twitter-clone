import React from 'react';

import { MAX_TEXT_LENGTH } from '@/types/common';

interface TextProgressProps {
  text: string;
}

const TextCountProgress: React.FC<TextProgressProps> = ({ text }) => {
  const maxLength = MAX_TEXT_LENGTH;
  const textLength = text.length;
  const percent = Math.min((textLength / maxLength) * 100, 100);
  const isOverLimit = textLength > maxLength;

  const strokeColor = isOverLimit ? '#ef4444' : '#3b82f6';
  const showCount = isOverLimit;

  return (
    <div className="mr-3 flex items-center justify-end gap-2">
      {/* Chỉ hiển thị khi vượt quá max */}
      {showCount && (
        <span id="textCount" className="text-sm text-red-500">
          {textLength}
        </span>
      )}

      {/* Vòng tròn tiến độ */}
      <div className="relative h-7 w-7">
        {/* Background vòng tròn xám */}
        <svg className="absolute top-0 left-0 h-full w-full">
          <circle
            cx="14"
            cy="14"
            r="12"
            stroke="#e5e7eb"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Vòng tròn tiến độ */}
        <svg className="absolute top-0 left-0 h-full w-full">
          <circle
            cx="14"
            cy="14"
            r="12"
            stroke={strokeColor}
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 12}`}
            strokeDashoffset={`${2 * Math.PI * 12 * (1 - percent / 100)}`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.2s linear' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default TextCountProgress;
