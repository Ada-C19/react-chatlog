import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [likedMessages, setLikedMessages] = useState(new Set());

  const toggleLike = (id) => {
    const newLikedMessages = new Set(likedMessages);
      if (likedMessages.has(id)) {
        newLikedMessages.delete(id);
      } else {
        newLikedMessages.add(id);
      }
      setLikedMessages(newLikedMessages);
    };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{likedMessages.size} ❤️s</h2>
      </header>
      <main>
        <ChatLog 
          entries={chatMessages}
          onLike={toggleLike}
          likedMessages={likedMessages}
          />
      </main>
    </div>
  );
};

export default App;
