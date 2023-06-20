import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const chatData = chatMessages;

  const [entryData, setEntryData] = useState(chatData);

  const updateEntryData = (updatedEntry) => {
    const entries = entryData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });

    setEntryData(entries);
  };

  const [likeCount, setLikeCount] = useState(0);

  const updateLikes = (isLiked) => {
    if (isLiked) {
      setLikeCount((prevState) => prevState + 1);
    } else {
      setLikeCount((prevState) => prevState - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log, total likes: {likeCount} ❤️s</h1>
        <h2> </h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}

        <ChatLog
          entries={entryData}
          onUpdateEntryData={updateEntryData}
          updateLikes={updateLikes}
        />
      </main>
    </div>
  );
};

export default App;
