import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Defining the Feed component
const Feed = () => {
  const [tweets, setTweets] = useState([]);

  // Fetching tweets from the backend
  useEffect(() => {
    const fetchTweets = async () => {
      const response = await axios.get(`${process.env.REACT_APP_TWOTTER_BACKEND_URL}/tweets`);
      setTweets(response.data);
    };
    fetchTweets();
  }, []);

  // Rendering the tweets
  return (
    <div className="w-full max-w-md mt-4">
      {tweets.map((tweet, index) => (
        <div key={index} className="p-4 border-b border-orange-300">
          {tweet.text}
        </div>
      ))}
    </div>
  );
};

// Exporting the Feed component
export default Feed;