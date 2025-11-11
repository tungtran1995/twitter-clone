import type { FC, ReactElement } from 'react';

import { DEFAULT_PROFILE_IMG } from '@/constants/url';
import type { TweetResponse } from '@/types/tweet';

import TweetText from '../tweet-text/tweet-text';
import TweetActions from './tweet-actions/tweet-actions';
import TweetAvatar from './tweet-avatar/tweet-avatar';
import TweetHeader from './tweet-header/tweet-header';
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
        <div className="ml-4 w-[500px] flex-1">
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
              <div className="relative mt-2">
                <img
                  src={tweet?.images?.[0].src}
                  alt={tweet?.imageDescription || 'tweet image'}
                  className="h-[252px] w-[504px] rounded-2xl border border-blue-200 object-cover"
                />
              </div>
            )}

            {/* {tweet?.gifImage && (
              <GifImage
                tweetId={tweet?.id}
                gifImage={tweet?.gifImage}
                withLink
              />
            )}
            {tweet?.poll && (
              <VoteComponent tweetId={tweet?.id} poll={tweet?.poll} />
            )}

            {tweet?.author.isFollower &&
              tweet?.replyType === ReplyType.FOLLOW && (
                <TweetReplyConversation />
              )}

            {tweet?.quoteTweet &&
              (tweet?.quoteTweet.isDeleted ? (
                <TweetDeleted />
              ) : (
                <Quote quoteTweet={tweet?.quoteTweet} />
              ))}

            <TweetMedia
              link={tweet?.link}
              linkTitle={tweet?.linkTitle}
              linkDescription={tweet?.linkDescription}
              linkCover={tweet?.linkCover}
              linkCoverSize={tweet?.linkCoverSize}
            />

            {tweet?.tweetList && (
              <TweetListComponent tweetList={tweet.tweetList} />
            )} */}
          </div>

          {/* <div className="relative flex max-w-[450px] justify-between py-1 pl-2">
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
              isTweetRetweeted={tweet?.isTweetRetweeted}
              retweetsCount={tweet?.retweetsCount}
            />
            <LikeIconButton
              tweetId={tweet?.id}
              isTweetLiked={tweet?.isTweetLiked}
              likesCount={tweet?.likesCount}
            />
            <ShareTweetIconButton tweetId={tweet!.id} />
            {myProfileId === tweet?.author.id && (
              <AnalyticsIconButton
                tweetUserFullName={tweet?.author.fullName}
                tweetUserName={tweet?.author.username}
                tweetText={tweet?.text}
                isUserCanReply={isUserCanReply}
              />
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
