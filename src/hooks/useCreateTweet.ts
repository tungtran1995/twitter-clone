import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useUser } from '@/lib/auth';
import { TweetApi } from '@/lib/tweet-api';
import { ReplyType, TweetType } from '@/types/common';

export const useCreateTweet = () => {
  const queryClient = useQueryClient();
  const user = useUser();

  return useMutation({
    mutationFn: TweetApi.createTweet,
    onMutate: async (newTweetData) => {
      // 1. Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['tweets'] });

      // 2. Snapshot the previous value
      const previousTweets = queryClient.getQueryData(['tweets']);

      // 3. Optimistically update to the new value
      queryClient.setQueryData(['tweets'], (old: any) => {
        const oldData = old?.data?.data || [];
        
        // Create a fake tweet object
        const optimisticTweet: any = {
          id: Math.random(), // Temp ID
          text: newTweetData.text,
          createdAt: new Date().toISOString(),
          author: user as any,
          images: newTweetData.imageIds?.map(id => ({ id, src: '' })) || [],
          repliesCount: 0,
          reTweetsCount: 0,
          likesCount: 0,
          isTweetLiked: false,
          isTweetReTweeted: false,
          tweetType: TweetType.TWEET,
          replyType: ReplyType.EVERYONE,
          sendingStatus: 'sending' // <--- NEW STATUS
        };

        return {
          ...old,
          data: {
            ...old?.data,
            data: [optimisticTweet, ...oldData]
          }
        };
      });

      // Return context with the temp ID so we can find it later
      return { previousTweets };
    },
    onError: (_err, _newTweet, context) => {
      // 4. If error, MARK as error instead of rollback
      queryClient.setQueryData(['tweets'], (old: any) => {
        const oldData = old?.data?.data || [];
        return {
          ...old,
          data: {
            ...old?.data,
            data: oldData.map((tweet: any) => 
              // Identify the optimistic tweet (this is a simple heuristic, ideally use a temp ID)
              tweet.sendingStatus === 'sending' 
                ? { ...tweet, sendingStatus: 'error' } 
                : tweet
            )
          }
        };
      });
    },
    onSettled: (data, error) => {
      // Only refetch if SUCCESS. If error, keep the error state visible so user can see it.
      if (!error) {
        queryClient.invalidateQueries({ queryKey: ['tweets'] });
      }
    },
  });
};
