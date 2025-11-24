import { useState, type FC, type ReactElement } from 'react';

import { useQuery } from '@tanstack/react-query';
import InfinityScroll from 'react-infinite-scroll-component';

import AddTweetForm from '@/components/ui/add-tweet-form/add-tweet-form';
import { Spinner } from '@/components/ui/spinner';
import Tab from '@/components/ui/tabs/tab';
import Tabs from '@/components/ui/tabs/tabs';
import Tweet from '@/components/ui/tweet/tweet';
import Welcome from '@/components/ui/welcome/welcome';
import { useUser } from '@/lib/auth';
import { TweetApi } from '@/lib/tweet-api';

const Home: FC = (): ReactElement => {
  const page = 1;
  const pageCount = 5;
  const isProfileStarted = true;
  const user = useUser();
  const [activeTab, setActiveTab] = useState<number>(0);

  const { data, isLoading } = useQuery({
    queryKey: ['tweets'],
    queryFn: () => TweetApi.getTweets(),
  });

  const tweets = (data?.data?.data || []).map((tweet: any) => ({
    ...tweet,
    images: tweet.images?.map((img: any) => ({
      ...img,
      src: img.src || img.url,
    })),
  }));

  const loadTweets = () => {
    // Load more tweets logic here
  };

  return (
    <InfinityScroll
      style={{ overflow: 'hidden' }}
      dataLength={tweets.length}
      next={loadTweets}
      hasMore={false} // Disable infinite scroll for now until implemented
      loader={<Spinner />}
    >
      <div className="mt-4 mb-4 flex w-full items-center justify-between border-b border-gray-300 pb-4">
        <div className="w-full">
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tab
              label="For you"
              className="flex-1 text-center"
              classNameText="py-4 font-bold"
            />
            <Tab
              label="Following"
              className="flex-1 text-center"
              classNameText="py-4 font-bold"
            />
          </Tabs>
        </div>
      </div>
      <div className="pr-5 pb-0 pl-5">
        <AddTweetForm />
      </div>
      {/* <hr className="my-4 border-t" /> */}
      {!isProfileStarted ? (
        <Welcome />
      ) : (
        <>
          {tweets.map((tweet: any) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
          {isLoading && (
            <div className="flex justify-center p-4">
              <Spinner />
            </div>
          )}
        </>
      )}
    </InfinityScroll>
  );
};

export default Home;
