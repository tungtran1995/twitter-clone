import { type FC, memo, type ReactElement } from 'react';

import Icon from '@/components/icons/icon';
import PageHeaderWrapper from '@/components/ui/page-header-wrapper/page-header-wrapper';
import { PROFILE_TABS } from './constants';
// import { LockIcon } from '@/components/icons'; // Uncomment when icons are available

// Mock selectors - Replace with actual imports
// import {
//     selectUserProfileFullName,
//     selectUserProfileIsPrivateProfile,
//     selectUserProfileLikeCount,
//     selectUserProfileMediaTweetCount,
//     selectUserProfileTweetCount
// } from "../../../store/ducks/userProfile/selectors";

// Temporary mock hook for selectors
const useMockSelectors = () => ({
    fullName: "User Name",
    isPrivateProfile: false,
    tweetCount: 10,
    mediaTweetCount: 5,
    likeCount: 100
});

interface UserPageHeaderProps {
    userTweetsActiveTab: number;
}

const UserPageHeader: FC<UserPageHeaderProps> = memo(({ userTweetsActiveTab }): ReactElement => {
    const { fullName, isPrivateProfile, tweetCount, mediaTweetCount, likeCount } = useMockSelectors();

    return (
        <PageHeaderWrapper backButton>
            <div className="flex flex-col">
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold leading-6 text-black dark:text-white">
                        {fullName}
                    </span>
                    {isPrivateProfile && (
                        <span className="h-4 w-4 text-black dark:text-white">
                            <Icon name="LockIcon" className='w-4 h4' />
                        </span>
                    )}
                </div>
                
                <div className="text-sm text-gray-500">
                    {(userTweetsActiveTab === PROFILE_TABS.TWEETS || userTweetsActiveTab === PROFILE_TABS.REPLIES) && (
                        `${tweetCount} Tweet${tweetCount === 1 ? '' : 's'}`
                    )}
                    
                    {userTweetsActiveTab === PROFILE_TABS.MEDIA && (
                        `${mediaTweetCount} Photo${mediaTweetCount === 1 ? '' : 's'} & video${mediaTweetCount === 1 ? '' : 's'}`
                    )}
                    
                    {userTweetsActiveTab === PROFILE_TABS.LIKES && (
                        `${likeCount} Like${likeCount === 1 ? '' : 's'}`
                    )}
                </div>
            </div>
        </PageHeaderWrapper>
    );
});

export default UserPageHeader;
