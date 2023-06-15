import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {

//state variables to use for total red hearts count and to pass to ChatEntry
  const [redFilledHeartCount, setredFilledHeartCount] = useState(0);


  // const testMessage = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{redFilledHeartCount} ❤️s</p>
      </header>
      <main>
        {/* loops through the chatMessages to render each obj to chatentry */}

        {chatMessages.map((data) => (
          <ChatEntry
            key={data.id}
            sender={data.sender}
            body={data.body}
            timeStamp={data.timeStamp}
            liked = {data.liked}
            setredFilledHeartCount={setredFilledHeartCount}
            redFilledHeartCount={redFilledHeartCount}
          />
        ))}

        {/* Another way to loop through using spread operator! :) */}
        {/* {chatMessages.map((data) => (
          <ChatEntry
            key={data.id}
            {...data}
            
          />
        ))} */}
      </main>
    </div>
  );
};

export default App;
