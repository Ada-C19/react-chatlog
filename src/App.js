import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatData = 
    {
      'sender':'Vladimir',
      'body':'why are you arguing with me',
      'timeStamp':'2018-05-29T22:49:06+00:00',
    }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry sender={chatData.sender} body={chatData.body} timeStamp={chatData.timeStamp}></ChatEntry>
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
