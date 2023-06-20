import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const initialCopy = chatMessages.map((chat) => {
    return {...chat};
  });
  const[chatData, setChatData] = useState(initialCopy);
  const [likedCount, setLikedCount] = useState(0);

    const heartWidget = likedCount !== 0 ? `${likedCount} ❤️s` : '';
    // create a new list of entries with updated likes 
    const updateLikes = (chatEntryId, updatedLikes) => {
      let newLikeCount = likedCount;
      const newChatData = chatData.map((ChatEntry) => {
        if (ChatEntry.id !== chatEntryId) {
          return ChatEntry;
        } else {
          if (updatedLikes) {
            newLikeCount++;
          } else {
            newLikeCount--;
          }
          const newChat = {
            ...ChatEntry,
            liked: updatedLikes,
          };
          return newChat;
        }
      });
    setChatData(newChatData);
    setLikedCount(newLikeCount);
    };

return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon's Chatty Chisme Chat</h1>
        <section>
          <span className='widget' id="heartWidget">
            {heartWidget}
          </span>
        </section>
      </header>

      <main>
        <ChatLog entries={chatData} updateLike={updateLikes} />    
      </main>
    </div>
  );
}
export default App;
