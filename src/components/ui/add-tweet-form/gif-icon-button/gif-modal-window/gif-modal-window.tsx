import type { FC } from 'react';

import { Spinner } from '@/components/ui/spinner';
import { useClickAway } from '@/hooks/useClickAway';
import { useInputText } from '@/hooks/useInpuText';
import type { GiphyDataProps } from '@/types/tweet';

import GifTopics from './gif-topics';
import GiftList from './gift-list';

interface GifModalWindowProps {
  visible: boolean;
  onClose: () => void;
}

const GifModalWindow: FC<GifModalWindowProps> = ({ visible, onClose }) => {
  const isGifsLoading = false;
  const isGifsLoaded = true;
  const { text, setText, handleChangeText } = useInputText();

  const { ref, onClickClose } = useClickAway();
  if (!visible) return null;

  const onCloseModalWindow = (): void => {
    setText('');
    onClose();
    onClickClose();
  };

  const onClickGif = (_gif: GiphyDataProps): void => {
    // Handle GIF selection
  };

  const onClickGifTopic = (_topic: string): void => {
    // Handle topic selection
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-h-[80vh] w-[520px] overflow-hidden rounded-xl bg-white shadow-xl"
      >
        <div className="relative border-b p-4">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            onClick={onCloseModalWindow}
          >
            ✕
          </button>

          <input
            type="text"
            placeholder="Search for GIFs"
            value={text}
            onChange={(e) => handleChangeText(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 pl-10 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <span className="absolute top-[22px] left-6 text-gray-500">🔍</span>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4">
          {isGifsLoading && text !== '' ? (
            <Spinner />
          ) : isGifsLoaded && text === '' ? (
            <GifTopics onClickGifTopic={onClickGifTopic} />
          ) : (
            <GiftList onClickGif={onClickGif} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GifModalWindow;
