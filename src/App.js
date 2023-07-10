import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  
  const [chatDATA, setchatDATA] = useState(chatMessages);

  const onLikeUpdate = (updatedEntry) => {
    const entries = chatDATA.map(entry => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setchatDATA(entries);
  };

  const calTotalLikes = (chatDATA) => { 
    return chatDATA.reduce(
      (likesCount, entry) => likesCount + entry.liked, 0); 
  };

  const likesCount = calTotalLikes(chatDATA);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 id='heartWidget' className='widget'>{likesCount} ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog entries={chatDATA} onLikeUpdate={onLikeUpdate}/>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;