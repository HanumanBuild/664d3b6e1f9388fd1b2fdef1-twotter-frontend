import React from 'react';
import TextInput from './components/TextInput';
import Feed from './components/Feed';

function App() {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-600 my-4">Twotter</h1>
      <TextInput />
      <Feed />
    </div>
  );
}

export default App;