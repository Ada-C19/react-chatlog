import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatData = [
    {
      id: 1,
      sender:'Vladimir',
      body:'why are you arguing with me',
      timeStamp:'2018-05-29T22:49:06+00:00',
      liked: false,
    }
  ];

  const chatEntryComponents = chatData.map(chatMsg => {
    return (
      <ul>
        <ChatEntry name={chatMsg.sender} body={chatMsg.body} timeStamp={chatMsg.timeStamp}></ChatEntry>
      </ul>

    )
  });

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ul>
          {chatEntryComponents}
        </ul>
      </main>
    </div>
  );
};

export default App;
