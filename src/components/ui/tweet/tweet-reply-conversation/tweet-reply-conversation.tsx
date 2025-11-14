import { memo, type ReactElement } from 'react';

const TweetReplyConversation = memo((): ReactElement => {
  return (
    <>
      <div className="mt-2 mb-1 inline-block">
        <div>
          <span></span>
        </div>
      </div>
      <span className="text-sm font-medium">
        You can reply to this conversation
      </span>
    </>
  );
});

export default TweetReplyConversation;
