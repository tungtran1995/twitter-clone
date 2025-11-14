import type { FC, ReactElement } from 'react';

import { MAX_TEXT_LENGTH } from '@/types/common';
import { useInputText } from '@/hooks/useInpuText';
import type { BaseListResponse } from '@/types/lists';
import type { QuoteTweetResponse, TweetResponse } from '@/types/tweet';

// import GifImage from '../gif-image/gif-image';
import { TextareaAutosize } from '../text-auto-size/text-auto-size';
import EmojiIconButton from './emoji-icon-button/emoji-icon-button';
import GifIconButton from './gif-icon-button/gif-icon-button';
import PollIconButton from './polly-icon-button/polly-icon-button';
import ProfileAvatar from './profile-avatar/profile-avatar';
import ScheduleDateInfo from './schedule-date-info/schedule-date-info';
import ScheduleIconButton from './schedule-icon-button/shedule-icon-button';
import TextCountProgress from './text-count-progress/text-count-progress';
import UploadImages from './upload-images/upload-images';

interface AddTweetFormProps {
  unsentTweet?: TweetResponse;
  quoteTweet?: QuoteTweetResponse;
  tweetList?: BaseListResponse;
  maxRows?: number;
  minRows?: number;
  tweetId?: number;
  title?: string;
  buttonName?: string;
  addressUsername?: string;
  addressId?: number;
  onCloseModal?: () => void;
}

interface ImageObj {
  src: string;
  file: File;
}

const AddTweetForm: FC<AddTweetFormProps> = ({
  unsentTweet: _unsentTweet,
  quoteTweet,
  tweetList: _tweetList,
  maxRows = 4,
  minRows = 1,
  tweetId: _tweetId,
  title = "What's happening?",
  buttonName = 'Tweet',
  addressUsername: _addressUsername,
  addressId: _addressId,
  onCloseModal: _onCloseModal = () => {},
}): ReactElement => {
  const {
    text,
    handleChangeText,
    setText: _setText,
    addEmoji: _addEmoji,
    textConverted: _textConverted,
  } = useInputText();
  const gif = null;
  const pollData = {
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: '',
    duration: 1,
  };
  const { addEmoji } = useInputText();

  const visiblePoll = false;
  const images: ImageObj[] = [];
  // const gif:
  //   | {
  //       images: { downsized: GifImageResponse };
  //     }
  //   | undefined = undefined;
  const scheduledDate = null;

  const handleClickReplyTweet = () => {};

  const handleClickQuoteTweet = () => {};

  const handleClickAddTweet = () => {};

  return (
    <>
      <div className="flex w-full">
        <ProfileAvatar />
        <div className="ml-[15px] w-full">
          <ScheduleDateInfo />
          <TextareaAutosize
            onChange={handleChangeText}
            className="w-full resize-none border-none bg-transparent text-inherit placeholder-gray-400 outline-none"
            value={text}
            placeholder={
              visiblePoll ? 'Ask a question...' : title || "What's happening?"
            }
            minRows={minRows}
            maxRows={images?.length > 0 ? 1 : maxRows}
          />
        </div>
        <div>
          {/* <AddTweetImage /> */}
          {/* {gif && <GifImage gifImage={gif.images.downsized} removeButton />} */}
          {/* {quoteTweet && <QuoteTweet quoteTweet={quoteTweet} />}
          {tweetList && <TweetList tweetList={tweetList} />}
          <Poll /> */}
        </div>
      </div>
      {/* <div className={classes.formItems}>
        <AddTweetImage />
        {gif && <GifImage gifImage={gif.images.downsized} removeButton />}
        {quoteTweet && <Quote quoteTweet={quoteTweet} />}
        {tweetList && <TweetListComponent tweetList={tweetList} />}
        <Poll />
      </div>
      <Reply isUnsentTweet={!!unsentTweet} /> */}
      <div className="flex items-center justify-between">
        <div className="relative -left-[13px] mt-[10px] flex max-w-[450px] justify-between pt-[5px] pb-[5px] pl-[70px]">
          <UploadImages />
          <GifIconButton />
          <PollIconButton
            buttonName={buttonName}
            disabled={!!quoteTweet || scheduledDate !== null}
          />
          <EmojiIconButton addEmoji={addEmoji} />
          <ScheduleIconButton buttonName={buttonName} disabled={!!quoteTweet} />
        </div>
        <div className="flex items-center">
          {text.length > 0 && <TextCountProgress text={text} />}
          <button
            className="rounded-3xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            onClick={
              buttonName === 'Reply'
                ? handleClickReplyTweet
                : quoteTweet !== undefined
                  ? handleClickQuoteTweet
                  : handleClickAddTweet
            }
            disabled={
              visiblePoll
                ? !pollData.choice1 ||
                  !pollData.choice2 ||
                  !text ||
                  text.length >= MAX_TEXT_LENGTH
                : !gif && (!text || text.length >= MAX_TEXT_LENGTH)
            }
          >
            {buttonName}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTweetForm;
