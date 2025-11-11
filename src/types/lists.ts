import type { CommonUserResponse } from './user';

export interface TweetListResponse {
  id: number;
  listName: string;
  altWallpaper: string;
  wallpaper: string;
  listOwner: CommonUserResponse;
  isPrivate: boolean;
  membersSize: number;
}

export interface BaseListResponse {
  id: number;
  listName: string;
  description: string;
  pinnedDate: string;
  altWallpaper: string;
  wallpaper: string;
  listOwner: CommonUserResponse;
  isPrivate: boolean;
  isFollower: boolean;
  membersSize: number;
  followersSize: number;
}
