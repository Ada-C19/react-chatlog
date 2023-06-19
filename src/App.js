import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  const [totalLikes, setTotalLikes] = useState(0);

  const handleLikeClick = () => {
    setTotalLikes(totalLikes + 1);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog
          entries={chatMessages}
          handleLikeClick={handleLikeClick}
          totalLikes={totalLikes}
        />
      </main>
    </div>
  );
};

export default App;
