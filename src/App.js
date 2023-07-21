import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';


const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages)
  
  // this works bc we are setting the state of the page in like 21 which will rerender the page(app component) everytime the buttone is pressed. 
  const likeCount = chatEntries.filter((entry) => entry.liked).length

  const updateLike = (chatEntryId) => {
    const updatedEntries = chatEntries.map((entry) => {
      if (entry.id === chatEntryId) {
        entry.liked = !entry.liked;
      }
      return entry;
    })
    
    setChatEntries(updatedEntries);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat 🪵 {likeCount}</h1>
      </header>
      <main>
        <ChatLog entries={chatEntries} updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;
