import type { FC, ReactElement } from 'react';

const Welcome: FC = (): ReactElement => {
  const onHandleClick = () => {};

  return (
    <div className="px-5 py-10 text-center">
      <h5 className="text-xl font-semibold text-gray-900">
        Welcome to Twitter!
      </h5>
      <p className="mt-3 mb-5 text-sm leading-relaxed text-gray-600">
        This is the best place to see what’s happening in your world. Find some
        people and topics to follow now.
      </p>
      <div className="flex items-center justify-center">
        <button
          onClick={onHandleClick}
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          Let's go
        </button>
      </div>
    </div>
  );
};

export default Welcome;
