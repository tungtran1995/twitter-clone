import type { Image, LinkCoverSize, ReplyType, TweetType } from './common';
import type { TweetListResponse } from './lists';
import type { TaggedUserResponse } from './user';

export interface TweetResponse {
  id: number;
  text: string;
  tweetType: TweetType;
  createdAt: string;
  scheduledDate: string;
  addressedUsername: string;
  addressedId: number;
  addressedTweetId: number;
  replyType: ReplyType;
  link: string;
  linkTitle: string;
  linkDescription: string;
  linkCover: string;
  linkCoverSize: LinkCoverSize;
  gifImage: GifImageResponse;
  author: UserTweetResponse;
  images: Image[];
  imageDescription: string;
  taggedImageUsers: TaggedUserResponse[];
  quoteTweet: QuoteTweetResponse;
  tweetList: TweetListResponse;
  poll: PollResponse;
  reTweetsCount: number;
  likesCount: number;
  repliesCount: number;
  quotesCount: number;
  isDeleted: boolean;
  isTweetLiked: boolean;
  isTweetReTweeted: boolean;
  isUserFollowByOtherUser: boolean;
  isTweetDeleted: boolean;
  isTweetBookmarked: boolean;
}

export interface TweetImageResponse {
  tweetId: number;
  imageId: number;
  src: string;
}

export interface GifImageResponse {
  id?: number;
  url?: string;
  width: number;
  height: number;
}

export interface UserTweetResponse {
  id: number;
  fullName: string;
  username: string;
  avatar: string;
  pinnedTweetId: number;
  isPrivateProfile: boolean;
  isFollower: boolean;
  isMyProfileBlocked: boolean;
  isUserBlocked: boolean;
  isUserMuted: boolean;
}

export interface QuoteTweetResponse {
  id: number;
  text: string;
  createdAt: string;
  link: string;
  linkTitle: string;
  linkDescription: string;
  linkCover: string;
  linkCoverSize: string;
  isDeleted: boolean;
  author: UserTweetResponse;
}

export interface PollResponse {
  id: number;
  createdAt: string;
  pollChoices: PollChoiceResponse[];
}

export interface PollChoiceResponse {
  id: number;
  choice: string;
  votedUser: VotedUserResponse[];
}

export interface VotedUserResponse {
  id: number;
}

export enum TweetActionResults {
  PIN = 'PIN',
  RETWEET = 'RETWEET',
  LIKE = 'LIKE',
}
