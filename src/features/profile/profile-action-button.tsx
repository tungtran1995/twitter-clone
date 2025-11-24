import { type FC, type ReactElement } from 'react';

// Mock components - Replace with actual imports
const EditProfileButton = () => <button className="px-4 py-2 rounded-full border border-gray-300 font-bold hover:bg-gray-100">Edit profile</button>;
const FollowUserButton = () => <button className="px-4 py-2 rounded-full bg-black text-white font-bold hover:bg-gray-800">Follow</button>;
const UserPageActions = () => <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">...</div>;
// const AddUserToChatButton = () => <button className="p-2 rounded-full border hover:bg-gray-100">✉️</button>;
// const BlockUserButton = () => <button className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-bold">Blocked</button>;
// const NotificationButton = () => <button className="p-2 rounded-full border">🔔</button>;
// const UnfollowUserButton = () => <button className="px-4 py-2 rounded-full border font-bold">Following</button>;
// const CancelUserButton = () => <button className="px-4 py-2 rounded-full border font-bold">Pending</button>;

interface ProfileActionButtonsProps {
    isMyProfile: boolean;
    isBlocked: boolean;
    isUserBlocked: boolean;
    isFollower: boolean;
    isPrivate: boolean;
    isMuted: boolean;
    isWaiting: boolean;
}

const ProfileActionButtons: FC<ProfileActionButtonsProps> = ({
    isMyProfile,
    isBlocked,
    isUserBlocked,
    isFollower,
    isPrivate,
    isMuted,
    isWaiting
}): ReactElement | null => {
    // 1. If it's my profile -> Show Edit button
    if (isMyProfile) {
        return <EditProfileButton />;
    }

    // 2. If I am blocked by this user -> Show nothing (or specific blocked UI)
    if (isBlocked) {
        return null;
    }

    // 3. Actions for other users
    return (
        <div className="flex items-center gap-2">
            <UserPageActions />
            
            {(!isPrivate || isFollower) && !isMuted && !isUserBlocked && (
                // <AddUserToChatButton />
                <button className="p-2 rounded-full border hover:bg-gray-100">✉️</button>
            )}

            {isUserBlocked ? (
                // <BlockUserButton />
                <button className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-bold">Blocked</button>
            ) : isFollower ? (
                <>
                    {/* <NotificationButton /> */}
                    {/* <UnfollowUserButton /> */}
                    <button className="p-2 rounded-full border hover:bg-gray-100">🔔</button>
                    <button className="px-4 py-2 rounded-full border font-bold hover:bg-red-50 hover:text-red-600 hover:border-red-200 group">
                        <span className="group-hover:hidden">Following</span>
                        <span className="hidden group-hover:inline">Unfollow</span>
                    </button>
                </>
            ) : isWaiting ? (
                // <CancelUserButton />
                <button className="px-4 py-2 rounded-full border font-bold">Pending</button>
            ) : (
                <FollowUserButton />
            )}
        </div>
    );
};

export default ProfileActionButtons;