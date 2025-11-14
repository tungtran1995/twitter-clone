import type { FC, ReactElement } from 'react';

import { usePopup } from '@/hooks/usePopup';

import Popover from '../../popover/popover';

interface ImageDescriptionProps {
  imageDescription?: string;
  isFullTweet?: boolean;
}

const ImageDescription: FC<ImageDescriptionProps> = ({
  imageDescription,
}): ReactElement => {
  const {
    popoverId,
    anchorEl,
    openPopover,
    handleClosePopup,
    handleOpenPopup,
  } = usePopup();

  return (
    <>
      <Popover
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopup}
        content={<div id="altImageDescription">ALT</div>}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        classes={{
          popover:
            'w-[300px] max-h-[400px] rounded-2xl shadow-[rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px]',
        }}
      >
        <div>
          <div className="mb-2 text-2xl font-bold">Image description</div>
          <div className="mb-6 text-base text-gray-700">{imageDescription}</div>
          <button className="w-full rounded-lg border border-blue-500 py-3 text-lg font-semibold text-blue-500 transition duration-150 hover:bg-blue-50">
            Dismiss
          </button>
        </div>
      </Popover>
    </>
  );
};

export default ImageDescription;
