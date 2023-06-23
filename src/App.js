import React, { useState } from 'react';

import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import ColorChoice from './components/ColorChoice.js'

import './App.css';

const App = () => {
  // Determine and set local and remote senders
  const local = chatMessages[0].sender
  let remote;
  if (chatMessages.length > 1) {
    for (const obj of chatMessages) {
      if (obj.sender !== local) {
        remote = obj.sender;
        break;
      }
    }
  }

  const [chatData, setChatData] = useState(chatMessages)
  const [textColorData, setTextColorData] = useState({remote: 'text-black', local: 'text-black'})
  const [nameColorData, setNameColorData] = useState({remote: 'text-white', local: 'text-white'})

  const updateColorChoice = colorChoice => {
    setTextColorData(prev => ({
      ...prev, ...colorChoice
    }));
    setNameColorData(prev => ({
      ...prev, ...colorChoice
    }))
  }

  const updateChatData = updatedEntry => {
    setChatData((prev) => {
      return prev.map((entry) => {
        if (entry.id === updatedEntry.id) {
          return updatedEntry;
        } else {
          return entry;
        };
      });
    });
  };

  const numLikes = (chatData.filter(entry => entry.liked === true)).length
  
  return (
    <div id="App">
      <header>
        <h1>Chat between <span className={nameColorData.local}>{local}</span> and <span className={nameColorData.remote}>{remote}</span></h1>
        <section className="widget">        
          <ColorChoice 
            local={local} 
            remote={remote} 
            updateColorChoice={updateColorChoice} 
            numLikes={numLikes}
          />
        </section>
      </header>
      <main>
        <ChatLog 
          entries={chatData} 
          onUpdateEntry={updateChatData} 
          local={local} 
          remote={remote} 
          colorChoices={textColorData}
        />
      </main>
    </div>
  );
};

export default App;