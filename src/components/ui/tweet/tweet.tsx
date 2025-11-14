import type { FC, ReactElement } from 'react';

import { DEFAULT_PROFILE_IMG } from '@/constants/url';
import { ReplyType } from '@/types';
import type { TweetResponse } from '@/types/tweet';

import QuoteIconButton from '../quote-icon-button/quote-icon-button';
import TweetText from '../tweet-text/tweet-text';
import LikeIconButton from './like-icon-button/like-icon-button';
import ReplyIconButton from './reply-icon-button/reply-icon-button';
import TweetActions from './tweet-actions/tweet-actions';
import TweetAvatar from './tweet-avatar/tweet-avatar';
import TweetHeader from './tweet-header/tweet-header';
import TweetImage from './tweet-image/tweet-image';
import TweetReplyingUsername from './tweet-replying-username/tweet-replying-username';

interface TweetProps {
  tweet: TweetResponse;
  activeTab?: number;
  isTweetImageModal?: boolean;
}

const Tweet: FC<TweetProps> = ({
  tweet,
  activeTab,
  isTweetImageModal: _isTweetImageModal,
}): ReactElement => {
  const myProfileId = 1;
  const isUserCanReply =
    tweet?.replyType === ReplyType.MENTION && myProfileId !== tweet?.author.id;

  return (
    <div className="relative cursor-pointer border-b border-gray-300 pt-3 pl-5 transition-colors hover:bg-gray-100">
      <TweetActions
        tweetId={tweet?.id}
        tweetType={tweet?.tweetType}
        activeTab={activeTab}
      />
      <div className="flex flex-1 items-start">
        <TweetAvatar
          userId={tweet?.author.id}
          src={tweet?.author.avatar ?? DEFAULT_PROFILE_IMG}
        />
        <div className="ml-4 w-[500px] flex-1 pb-3">
          <div className="relative flex h-5 justify-between">
            <TweetHeader
              userId={tweet?.author.id}
              fullName={tweet?.author.fullName}
              username={tweet?.author.username}
              isPrivateProfile={tweet?.author.isPrivateProfile}
              dateTime={tweet!.createdAt}
            />
            {/* <TweetActions tweetId={tweet!.id} /> */}
          </div>

          <div className="w-[500px]">
            {tweet?.addressedUsername && (
              <TweetReplyingUsername
                addressedId={tweet?.addressedId}
                addressedUsername={tweet.addressedUsername}
              />
            )}
            <TweetText text={tweet?.text} tweetId={tweet?.id} />

            {tweet?.images?.length !== 0 && (
              <TweetImage
                tweetId={tweet?.id}
                imageSrc={tweet?.images?.[0]?.src}
                imageDescription={tweet?.imageDescription}
                taggedImageUsers={tweet?.taggedImageUsers}
              />
            )}

            {/* {tweet?.gifImage && (
              <GifImage
                tweetId={tweet?.id}
                gifImage={tweet?.gifImage}
                withLink
              />
            )} */}
            {/* {tweet?.poll && (
              <VoteComponent tweetId={tweet?.id} poll={tweet?.poll} />
            )} */}

            {/* {tweet?.author.isFollower &&
              tweet?.replyType === ReplyType.FOLLOW && (
                <TweetReplyConversation />
              )}

            {tweet?.quoteTweet &&
              (tweet?.quoteTweet.isDeleted ? (
                <TweetDeleted />
              ) : (
                <Quote quoteTweet={tweet?.quoteTweet} />
              ))} */}

            {/* <TweetMedia
              link={tweet?.link}
              linkTitle={tweet?.linkTitle}
              linkDescription={tweet?.linkDescription}
              linkCover={tweet?.linkCover}
              linkCoverSize={tweet?.linkCoverSize}
            /> */}

            {/* {tweet?.tweetList && (
              <TweetListComponent tweetList={tweet.tweetList} />
            )} */}
          </div>

          <div className="relative flex max-w-[450px] justify-between py-1 pl-2">
            <ReplyIconButton
              tweetId={tweet?.id}
              text={tweet?.text}
              image={tweet?.images?.[0]}
              createdAt={tweet?.createdAt}
              tweetAuthor={tweet?.author}
              repliesCount={tweet?.repliesCount}
              isUserCanReply={isUserCanReply}
            />
            <QuoteIconButton
              tweetId={tweet?.id}
              createdAt={tweet?.createdAt}
              text={tweet?.text}
              author={tweet?.author}
              isTweetReTweeted={tweet?.isTweetReTweeted}
              reTweetsCount={tweet?.reTweetsCount}
            />
            <LikeIconButton
              tweetId={tweet?.id}
              isTweetLiked={tweet?.isTweetLiked}
              likesCount={tweet?.likesCount}
            />
            {/* <ShareTweetIconButton tweetId={tweet!.id} />
            {myProfileId === tweet?.author.id && (
              <AnalyticsIconButton
                tweetUserFullName={tweet?.author.fullName}
                tweetUserName={tweet?.author.username}
                tweetText={tweet?.text}
                isUserCanReply={isUserCanReply}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
