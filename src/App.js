import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [entries,setEntriesData] = useState(chatMessages);

  const updateLikedMessagesCount = (id) => {
    setEntriesData((prev) => {
      return prev.map((entry) => {
        if(id === entry.id) {
          return {
            ...entry,
            liked: !entry.liked,
          };
        } else {
          return entry;
        }
      });
    });
  };

  const totalLikeTally = entries.reduce((total,entry) => {
    if(entry.liked === true){
      total += 1;
    }
    return total;
  },0);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section className="header section">{totalLikeTally} ❤️s</section>
      </header>
      <main>
        
      <ChatLog entries={entries} updateLikedMessagesCount={updateLikedMessagesCount}/>    
      </main>
    </div>
  );
};

export default App;
