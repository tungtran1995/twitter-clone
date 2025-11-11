import { useCallback, useState } from 'react';

// Định nghĩa interface cho Emoji đơn giản
interface EmojiData {
  native: string;
  shortcodes?: string;
  unified?: string;
}

interface UseInputText {
  text: string;
  handleChangeText: (value: string) => void;
  setText: (value: ((prevState: string) => string) | string) => void;
  addEmoji: (emoji: EmojiData) => void;
  textConverted: () => string;
}

export const useInputText = (): UseInputText => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (value: string): void => {
    setText(value);
  };

  const addEmoji = useCallback((emoji: EmojiData): void => {
    // Sử dụng trực tiếp native emoji thay vì convert
    setText((prevText) => prevText + emoji.native);
  }, []);

  const textConverted = (): string => {
    // Trả về text như bình thường, có thể thêm logic convert sau
    return text;
  };

  return {
    text,
    handleChangeText: handleTextChange,
    setText,
    addEmoji,
    textConverted,
  };
};
