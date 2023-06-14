import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog.js';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';
import { useState } from 'react';

const App = () => {
  // const chatMessage =
  // {
  //   'id': 1,
  //   'sender': 'Vladimir',
  //   'body':'why are you arguing with me',
  //   'timeStamp':'2018-05-29T22:49:06+00:00',
  //   'liked': false
  //   }
  const [likedCount, setLikedCount] = useState(0);
  const handleLikeChange = (liked) => {
    setLikedCount((prevCount) => liked ? prevCount + 1 : prevCount - 1);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Valdimir and Estragon</h1>
      </header>
      <div className="like-count">{likedCount} ❤️s</div>
      <main>
        {/* <ChatEntry
          sender={chatMessage.sender}
          body={chatMessage.body}
          timeStamp={chatMessage.timeStamp}
        ></ChatEntry> */}
      <ChatLog entries={chatMessages} onLikeChange={handleLikeChange} />
      </main>
    </div>
  );
};

export default App;
