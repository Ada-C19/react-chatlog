import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {

  const [chatData, setChatData] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);


  const updateEntryData = updatedEntry => {
    // const entry = chatData.find((e) => e.id === updatedEntry.id)
    const entries = chatData.map(entry => {
      if (entry.id === updatedEntry.id) {
        if (entry.liked !== updatedEntry.liked) {
          // If the liked state has changed
          if (updatedEntry.liked) {
            // If the entry is liked
            setLikeCount(likeCount + 1); // Increment like count
          } else {
            // If the entry is unliked
            setLikeCount(likeCount - 1); // Decrement like count
          }
        }
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatData(entries)
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 className="widget" id="heartWidget">{likeCount} ❤️s</h2>
        </section>
      </header>
      <main>

        {/* <ChatEntry {...chatMessages[0]}></ChatEntry> */}
        <ChatLog 
        entries={chatData}
        onUpdateEntry={updateEntryData}
        // likeCountData={likeCount}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
