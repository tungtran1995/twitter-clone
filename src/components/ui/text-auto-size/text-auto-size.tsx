import {
  type TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface TextareaAutosizeProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  minRows?: number;
  maxRows?: number;
  onChange?: (value: string) => void;
}

export const TextareaAutosize = ({
  minRows = 1,
  maxRows,
  className = '',
  value: controlledValue,
  onChange,
  ...props
}: TextareaAutosizeProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [internalValue, setInternalValue] = useState('');

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const resize = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (maxRows) {
      const lineHeight = parseInt(
        getComputedStyle(textarea).lineHeight || '20',
        10,
      );
      const maxHeight = lineHeight * maxRows;
      if (textarea.scrollHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`;
        textarea.style.overflowY = 'auto';
      } else {
        textarea.style.overflowY = 'hidden';
      }
    }
  }, [maxRows]);

  useEffect(() => {
    resize();
  }, [resize]);

  return (
    <textarea
      {...props}
      ref={textareaRef}
      rows={minRows}
      placeholder={props.placeholder}
      value={value}
      onChange={(e) => {
        const newValue = e.target.value;
        if (controlledValue === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      }}
      className={`w-full resize-none overflow-hidden ${className || 'rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'}`}
    />
  );
};
