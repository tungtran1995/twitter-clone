import { memo, type ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { HOME_TWEET } from '@/constants/path';
import type { QuoteTweetResponse } from '@/types';
import { textFormatter } from '@/utils/text-formatter';

import Avatar from '../../avatar/avatar';

interface QuoteProps {
  quoteTweet: QuoteTweetResponse;
}

const Quote = memo(({ quoteTweet }: QuoteProps): ReactElement => {
  console.log(quoteTweet);

  return (
    <Link
      to={`${HOME_TWEET}/${quoteTweet.id}`}
      className="color-primary-500 block rounded-xl border border-gray-200 p-3 text-inherit no-underline transition hover:bg-gray-50"
    >
      <div className="border-[rgb(56, 68, 77)] hover:bg-[rgb(255, 255, 255, 0.03)] mt-1.25 ml-0 min-h-17 w-full rounded-2xl border p-3 text-base">
        <div className="flex justify-start">
          <Avatar
            className="mr-[3px] max-h-5! max-w-5!"
            alt={`avatar ${quoteTweet.author?.avatar}`}
            src={quoteTweet.author?.avatar}
          />

          <span className="font-bol mr-[3px] text-sm">
            {quoteTweet.author?.fullName}
          </span>

          <span className="text-[rgb(136, 153, 166)] text-sm">
            @{quoteTweet.author?.username}
          </span>

          <span className="text-[rgb(136, 153, 166)] text-sm">·</span>
          {/* <span className="text-[rgb(136, 153, 166)] text-sm">
            {formatDate(new Date(quoteTweet?.createdAt))}
          </span> */}
        </div>

        <div className="mt-1 w-[490px] text-sm text-gray-900">
          {textFormatter(quoteTweet.text)}
        </div>
      </div>
    </Link>
  );
});

export default Quote;
