import { type FC, type ReactElement } from 'react';

import InfinityScroll from 'react-infinite-scroll-component';

import AddTweetForm from '@/components/ui/add-tweet-form/add-tweet-form';
import { Spinner } from '@/components/ui/spinner';
import Tweet from '@/components/ui/tweet/tweet';
import Welcome from '@/components/ui/welcome/welcome';
import { useUser } from '@/lib/auth';

import { mockTweets } from './mock-tweets';
import TopTweetActions from './top-tweet-actions';

const Home: FC = (): ReactElement => {
  const page = 1;
  const pageCount = 5;
  const isProfileStarted = true; // Changed to true to show tweets
  const isLoading = false;
  const user = useUser();
  const tweets = mockTweets; // Use mock data

  const loadTweets = () => {
    // Load more tweets logic here
  };

  return (
    <InfinityScroll
      style={{ overflow: 'hidden' }}
      dataLength={10}
      next={loadTweets}
      hasMore={page < pageCount}
      loader={null}
    >
      <div className="mt-4 mb-4 flex items-center justify-between border-b pb-4">
        <h5 className="text-2xl font-bold">Home</h5>
        <TopTweetActions
          switchTweets={false}
          handleLateestTweets={() => {}}
          handleTopTweets={() => {}}
        />
      </div>
      <div className="pt-[72px] pr-5 pb-0 pl-5">
        <AddTweetForm />
      </div>
      <hr className="my-4 border-t" />
      {!isProfileStarted ? (
        <Welcome />
      ) : (
        <>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
          {isLoading && <Spinner />}
        </>
      )}
    </InfinityScroll>
  );
};

export default Home;
