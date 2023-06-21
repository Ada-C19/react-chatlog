import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);

  const updateChatEntries = updatedChatEntry => {
    const chatMsgs = chatEntries.map(chatEntry => {
      if (chatEntry.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return chatEntry;
      }
    })

    setChatEntries(chatMsgs);
  };

  const countLikedChatEntries = chatEntries.filter(chatEntry => chatEntry.liked === true).length;

  return (
    <div id="App">
      <header>
        <h1>Vladimir & Estragon's Chatlog</h1>
        <section>
          <span id="heartWidget">{countLikedChatEntries} ❤️s</span>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* {chatEntryComponents} */}
        <span>
          <ChatLog 
          entries={chatEntries}
          onUpdateChat={updateChatEntries}
          ></ChatLog>
        </span>
      </main>
    </div>
  );
};

export default App;
