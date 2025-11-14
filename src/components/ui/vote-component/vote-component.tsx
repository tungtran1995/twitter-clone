import type { FC } from 'react';

import { isAfter } from 'date-fns';

import type { PollResponse } from '@/types';
import { voteFormatDate } from '@/utils/format-date-helper';

interface VoteComponentProps {
  tweetId: number;
  poll?: PollResponse;
}

const VoteComponent: FC<VoteComponentProps> = ({ tweetId: _tweetId, poll }) => {
  const myProfileId = 1;

  // If there's no poll data, render nothing
  if (!poll) return null;

  // total votes across choices (safe default 0)
  const userVoteSum =
    poll?.pollChoices?.reduce(
      (sum, choice) => sum + (choice.votedUser?.length ?? 0),
      0,
    ) ?? 0;

  // whether the current user has voted in any choice
  const isUserVoted = !!poll?.pollChoices?.some((choice) =>
    choice.votedUser?.some((u) => u.id === myProfileId),
  );

  // detect poll end using common fields if present
  const pollEndCandidate = poll as unknown as {
    endAt?: string;
    expiresAt?: string;
    expiryAt?: string;
  };

  const pollEndRaw =
    pollEndCandidate.endAt ??
    pollEndCandidate.expiresAt ??
    pollEndCandidate.expiryAt;

  const isPollEnded = pollEndRaw
    ? isAfter(new Date(), new Date(pollEndRaw))
    : false;

  // narrow poll type for places where the linter needs an explicit PollResponse
  const pollSafe = poll as PollResponse;

  const pollSummary = isPollEnded
    ? 'Final results'
    : `${voteFormatDate(pollSafe)} left`;

  return (
    <>
      {isUserVoted || isPollEnded ? (
        poll?.pollChoices?.map((pollChoice) => {
          const votes = pollChoice.votedUser?.length ?? 0;
          const percent =
            userVoteSum === 0 ? 0 : Math.round((votes / userVoteSum) * 100);

          return (
            <div
              key={pollChoice.id}
              id={`choice_${pollChoice.id}`}
              className="relative"
            >
              <div className="mt-1 flex items-center justify-between">
                <span className="px-[11px] py-0 text-base leading-normal font-medium">
                  {pollChoice.choice}
                </span>
                <span className="px-[11px] py-0 text-base leading-normal font-medium">
                  {percent}%
                </span>
              </div>

              <div className="mt-[11px] text-sm font-medium text-gray-500">
                {userVoteSum} votes {'·'} {pollSummary}
              </div>
            </div>
          );
        })
      ) : (
        <>
          {poll?.pollChoices?.map((pollChoice) => (
            <div key={pollChoice.id} className="relative">
              <button
                className="mt-1 w-full rounded-lg border border-blue-500 bg-transparent px-3 py-1 text-sm font-semibold text-blue-500 transition duration-150 hover:bg-blue-50"
                type="button"
              >
                {pollChoice.choice}
              </button>
            </div>
          ))}

          <div className="mt-2 text-sm text-gray-500">
            {userVoteSum} votes {'·'} {voteFormatDate(pollSafe)} left
          </div>
        </>
      )}
    </>
  );
};

export default VoteComponent;
