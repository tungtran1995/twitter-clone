import { type ReactElement } from 'react';

import { Spinner } from '@/components/ui/spinner';
import { PROFILE_TABS } from './constants';
import ProfileActionButtons from './profile-action-button';
import UserWallpaper from './user-wallpaper';

// Placeholder imports - Uncomment/Update paths when components are ready
// import UserAvatar from "./UserAvatar";
// import EditProfileButton from "./EditProfileButton";
// import AddUserToChatButton from "./AddUserToChatButton";
// import BlockUserButton from "./BlockUserButton";
// import NotificationButton from "./NotificationButton";
// import UnfollowUserButton from "./UnfollowUserButton";
// import CancelUserButton from "./CancelUserButton";
// import FollowUserButton from "./FollowUserButton";
// import UserPageActions from "./UserPageActions";
// import UserInfo from "./UserInfo";
// import UserDetails from "./UserDetails";
// import UserInteractionCount from "./UserInteractionCount";
// import UserTweets from "./UserTweets";
// import { useUserPage } from "./useUserPage";

// Mock components for demonstration
const UserAvatar = () => <div className="h-32 w-32 rounded-full bg-gray-300 border-4 border-white -mt-16 relative z-10"></div>;
const EditProfileButton = () => <button className="px-4 py-2 rounded-full border border-gray-300 font-bold hover:bg-gray-100">Edit profile</button>;
const FollowUserButton = () => <button className="px-4 py-2 rounded-full bg-black text-white font-bold hover:bg-gray-800">Follow</button>;
const UserPageActions = () => <div className="p-2 border rounded-full">...</div>;
const UserInfo = () => <div className="mt-4">User Info Placeholder</div>;
const UserTweets = () => <div className="mt-4">Tweets List</div>;

// Mock hook
const useUserPage = () => ({
    myProfileId: 1,
    userProfileId: 1,
    isPrivateProfile: false,
    isFollower: false,
    isMutedDirectMessages: false,
    isUserBlocked: false,
    isMyProfileBlocked: false,
    isWaitingForApprove: false,
    isMyProfileLoaded: true,
    isUserProfileLoading: false,
    isUserProfileSuccessLoaded: true,
    isUserProfileNotLoaded: false,
    userTweetsActiveTab: PROFILE_TABS.TWEETS,
    handleChangeUserTweetsTab: () => {},
});

/**
 * Extracted Action Buttons Logic
 * Reduces complexity and improves readability
 */


const UserProfile = (): ReactElement => {
    const {
        myProfileId,
        userProfileId,
        isPrivateProfile,
        isFollower,
        isMutedDirectMessages,
        isUserBlocked,
        isMyProfileBlocked,
        isWaitingForApprove,
        isUserProfileLoading,
        isUserProfileSuccessLoaded,
        isUserProfileNotLoaded,
        userTweetsActiveTab,
        handleChangeUserTweetsTab
    } = useUserPage();

    if (isUserProfileNotLoaded) {
        return <div className="p-4 text-center text-xl font-bold">User not found</div>;
    }

    if (isUserProfileLoading) {
        return (
            <div className="flex justify-center p-8">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="min-h-screen border-x border-gray-200 pb-20">
            <UserWallpaper />
            <div className="px-4">
                <div className="flex justify-between items-start">
                    <UserAvatar />
                    
                    <div className="mt-3">
                        {isUserProfileSuccessLoaded && (
                            <ProfileActionButtons 
                                isMyProfile={userProfileId === myProfileId}
                                isBlocked={isMyProfileBlocked}
                                isUserBlocked={isUserBlocked}
                                isFollower={isFollower}
                                isPrivate={isPrivateProfile}
                                isMuted={isMutedDirectMessages}
                                isWaiting={isWaitingForApprove}
                            />
                        )}
                    </div>
                </div>

                {/* User Info & Stats */}
                <UserInfo />
                
                {/* <div className="flex gap-4 mt-3 text-gray-500">
                    <UserDetails />
                    <UserInteractionCount />
                </div> */}

                {/* Blocked / Private Messages */}
                {/* <UserUnmuteMessage /> */}
                {/* <UserFollowerGroup /> */}
            </div>

            {/* Content Area (Tweets) */}
            <div className="mt-4 border-t border-gray-200">
                {isUserProfileSuccessLoaded && (
                    isMyProfileBlocked ? (
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold">You are blocked</h3>
                            <p className="text-gray-500">You cannot follow or view @username's Tweets.</p>
                        </div>
                    ) : (isPrivateProfile && !isFollower && userProfileId !== myProfileId) ? (
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold">These Tweets are protected</h3>
                            <p className="text-gray-500">Only approved followers can see @username's Tweets.</p>
                        </div>
                    ) : (
                        <UserTweets 
                            // userTweetsActiveTab={userTweetsActiveTab}
                            // handleChangeUserTweetsTab={handleChangeUserTweetsTab}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default UserProfile;
