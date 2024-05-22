import React, { useState } from 'react';
import axios from 'axios';

// Defining the TextInput component
const TextInput = () => {
  const [text, setText] = useState('');

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      // Posting the tweet to the backend
      await axios.post(`${process.env.REACT_APP_TWOTTER_BACKEND_URL}/tweets`, { text });
      setText('');
    }
  };

  // Rendering the form
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <textarea
        className="w-full p-2 border border-orange-500 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">
        Tweet
      </button>
    </form>
  );
};

// Exporting the TextInput component
export default TextInput;