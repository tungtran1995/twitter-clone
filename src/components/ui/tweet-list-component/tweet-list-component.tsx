import { memo, type FC, type ReactElement } from 'react';

import { Link } from 'react-router-dom';

import Icon from '@/components/icons/icon';
import { LISTS, PROFILE } from '@/constants/path';
import type { BaseListResponse, TweetListResponse } from '@/types/lists';

import Avatar from '../avatar/avatar';

interface TweetListComponentProps {
  tweetList: TweetListResponse | BaseListResponse;
}

const TweetListComponent: FC<TweetListComponentProps> = memo(
  ({ tweetList }): ReactElement => {
    const listWallpaper = tweetList.wallpaper ?? tweetList.altWallpaper;

    return (
      <Link to={`${LISTS}/${tweetList.id}`} className="">
        <div className="">
          <img className="" src={listWallpaper} alt={listWallpaper} />
          <div className="">
            <div>
              <div className="">
                <Icon name="ListIconFilled" />
              </div>
              <span className="text-sm font-bold">List</span>
              {' · '}
              <span className="text-sm text-gray-500">
                {' '}
                {tweetList.membersSize} Members
              </span>
            </div>
            <div className="text-base font-bold text-gray-900">
              {tweetList.listName}
            </div>
            <div>
              <Link to={`${PROFILE}/${1}`}>
                <Avatar
                  className="mr-1 inline-flex h-4! w-4! align-middle"
                  src={tweetList.listOwner?.avatar}
                  alt={`avatar ${tweetList.listOwner?.avatar}`}
                />
              </Link>
              <span className="text-primary-theme text-sm font-medium">
                {tweetList.listOwner?.fullName}
              </span>
              {tweetList.listOwner?.isPrivateProfile && (
                <span className="h-3 w-3 text-gray-500">
                  <Icon name="LockIcon" />
                </span>
              )}{' '}
              <span className="text-sm text-gray-500">
                @{tweetList.listOwner?.username}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  },
);

export default TweetListComponent;
