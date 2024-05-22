import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await axios.get(`${process.env.REACT_APP_TWOTTER_BACKEND_URL}/tweets`);
      setTweets(response.data);
    };
    fetchTweets();
  }, []);

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

export default Feed;