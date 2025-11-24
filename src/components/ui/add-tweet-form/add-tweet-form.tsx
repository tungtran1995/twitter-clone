import type { FC, ReactElement } from 'react';
import { useState } from 'react';

import { useCreateTweet } from '@/hooks/useCreateTweet';
import { useInputText } from '@/hooks/useInpuText';
import { MAX_TEXT_LENGTH } from '@/types/common';
import type { BaseListResponse } from '@/types/lists';
import type { QuoteTweetResponse, TweetResponse } from '@/types/tweet';

// import GifImage from '../gif-image/gif-image';
import LinearProgress from '../linear-progress/linear-progress';
import { TextareaAutosize } from '../text-auto-size/text-auto-size';
import AddTweetImage from './add-tweet-image/add-tweet-image';
import EmojiIconButton from './emoji-icon-button/emoji-icon-button';
import GifIconButton from './gif-icon-button/gif-icon-button';
import PollIconButton from './polly-icon-button/polly-icon-button';
import ProfileAvatar from './profile-avatar/profile-avatar';
import ScheduleDateInfo from './schedule-date-info/schedule-date-info';
import ScheduleIconButton from './schedule-icon-button/shedule-icon-button';
import TextCountProgress from './text-count-progress/text-count-progress';
import UploadImages from './upload-images/upload-images';
import { useUploadImageStore } from './upload-images/upload-images-store';

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

const AddTweetForm: FC<AddTweetFormProps> = ({
  unsentTweet: _unsentTweet,
  quoteTweet,
  tweetList: _tweetList,
  maxRows = 4,
  minRows = 1,
  tweetId: _tweetId,
  title = "What's happening?",
  buttonName = 'Post',
  addressUsername: _addressUsername,
  addressId: _addressId,
  onCloseModal: _onCloseModal = () => {},
}): ReactElement => {
  const {
    text,
    handleChangeText,
    setText,
    addEmoji,
    textConverted,
  } = useInputText();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  
  const images = useUploadImageStore((state) => state.images);
  const getUploadedImageIds = useUploadImageStore((state) => state.getUploadedImageIds);
  const isUploading = useUploadImageStore((state) => state.isUploading);
  const clearImages = useUploadImageStore((state) => state.clearImages);
  
  const gif = null;
  const pollData = {
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: '',
    duration: 1,
  };
  
  const visiblePoll = false;
  const scheduledDate = null;

  const handleClickReplyTweet = () => {};

  const handleClickQuoteTweet = () => {};

  const { mutateAsync: createTweet } = useCreateTweet();

  const handleClickAddTweet = async () => {
    // Check if images are still uploading
    if (isUploading()) {
      alert('Please wait for images to finish uploading');
      return;
    }

    setIsSubmitting(true);
    setSubmitProgress(0);

    try {
      setSubmitProgress(30);

      const imageIds = getUploadedImageIds();
      
      setSubmitProgress(60);

      const payload = {
        text: textConverted(),
        imageIds,
      };

      await createTweet(payload);

      setSubmitProgress(100);
      setText('');
      clearImages();
      
      setTimeout(() => {
        _onCloseModal();
        setSubmitProgress(0);
      }, 300);
    } catch (error) {
      console.error('Failed to post tweet:', error);
      alert('Failed to post tweet. Please try again.');
      setSubmitProgress(0);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Progress bar - Twitter style */}
      {isSubmitting && <LinearProgress value={submitProgress} color="blue" />}
      
      <div className="flex w-full">
        <ProfileAvatar />
        <div className="ml-[15px] w-full">
          <ScheduleDateInfo />
          <TextareaAutosize
            onChange={handleChangeText}
            className="w-full resize-none border-none bg-transparent text-[20px] text-inherit placeholder-gray-400 outline-none"
            value={text}
            placeholder={
              visiblePoll ? 'Ask a question...' : title || "What's happening?"
            }
            minRows={minRows}
            maxRows={images?.length > 0 ? 1 : maxRows}
          />
          <div className="pt-3">
            <AddTweetImage />
            {/* {gif && <GifImage gifImage={gif.images.downsized} removeButton />} */}
            {/* {quoteTweet && <Quote quoteTweet={quoteTweet} />} */}
            {/* {tweetList && <TweetListComponent tweetList={tweetList} />} */}
            {/* <Poll /> */}
          </div>
          
        </div>
        <div>
          {/* <AddTweetImage /> */}
          {/* {gif && <GifImage gifImage={gif.images.downsized} removeButton />} */}
          {/* {quoteTweet && <QuoteTweet quoteTweet={quoteTweet} />}
          {tweetList && <TweetList tweetList={tweetList} />}
          <Poll /> */}
        </div>
      </div>

      {/* <Reply isUnsentTweet={!!unsentTweet} /> */}
      <div className="flex items-center justify-between">
        <div className="relative -left-[13px] mt-2.5 flex max-w-[450px] justify-between pt-[5px] pb-[5px] pl-[70px]">
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
            className="rounded-3xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={
              buttonName === 'Reply'
                ? handleClickReplyTweet
                : quoteTweet !== undefined
                  ? handleClickQuoteTweet
                  : handleClickAddTweet
            }
            disabled={
              isSubmitting ||
              isUploading() ||
              !text ||
              text.length >= MAX_TEXT_LENGTH
            }
          >
            {isSubmitting ? 'Posting...' : buttonName}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTweetForm;
