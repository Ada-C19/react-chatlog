import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';


const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages)
  
  const likeCount = chatEntries.filter((entry) => entry.liked).length

  const updateLike = (chatEntryId) => {
    const updatedEntries = chatEntries.map((entry) => {
      if (entry.id === chatEntryId) {
        return { ...entry, liked: !entry.liked};
      }
      return entry;
    })
    
    setChatEntries(updatedEntries);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat 🪵 {likeCount} 🤍s</h1>
      </header>
      <main>
        <ChatLog entries={chatEntries} updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;
