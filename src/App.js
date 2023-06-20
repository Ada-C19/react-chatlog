import React, {useState} from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';


const App = () => {

  const [count, setLikedMessages] = useState(0);

  const countLike = (isLiked) => {
    setLikedMessages((count) =>
      isLiked ? count + 1 : count - 1
    );
  };

  return (
    <div id="App">
      <header>
        <h1>Application title {count} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} onLike={countLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
