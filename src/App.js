import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [chatEntryData, setChatEntryData] = useState(chatMessages);
  const updateChatEntryData = updatedChatEntry => {
    const entries = chatEntryData.map(entry => {
      if (entry.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return entry;
      }
    });

      setChatEntryData(entries);

  };
    const countLikes = () => {
      let count = 0;
      for(let entry of chatEntryData) {
        if (entry.liked === true)
          count += 1;
      }
      return count;
    };
    



    return (
      <div id="App">
        <header>
          <h1>Chat between Vladimir and Estragon</h1>
          <section id="header section">
            <h1 id="heartWidget" className='widget'>{countLikes()} ❤️s</h1>
          </section>
        </header>
        <main>
          <ChatLog entries={chatEntryData}
          onUpdateChatEntry={updateChatEntryData}></ChatLog>
        </main>
      </div>
    );
  };


export default App;
