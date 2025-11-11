export interface TaggedUserResponse {
  id: number;
  fullName: string;
}

export interface CommonUserResponse {
  id: number;
  fullName: string;
  username: string;
  avatar: string;
  isPrivateProfile: boolean;
}

export interface UserResponse {
  id: number;
  fullName: string;
  username: string;
  about: string;
  avatar: string | null;
  isPrivateProfile: boolean;
  isMutedDirectMessages: boolean;
  isUserBlocked: boolean;
  isMyProfileBlocked: boolean;
  isWaitingForApprove: boolean;
  isUserChatParticipant?: boolean;
  isFollower: boolean;
}
