import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const title = 'Who\'s the robot?';

  const [entryData, setEntryData] = useState(chatMessages);

  const [totalLikes, setTotalLikes] = useState(0);

  const updateEntryData = updatedEntry => {
    const entries = entryData.map(entry => {
      if (entry.id === updatedEntry.id) {
        setTotalLikes(totalLikes + (updatedEntry.liked ? 1 : -1));
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setEntryData(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>{title}</h1>
        <p className='likeCount'>{totalLikes} ❤️s</p>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entryData}
          onUpdateEntry={updateEntryData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;