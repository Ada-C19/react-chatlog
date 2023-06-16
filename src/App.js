import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const renderChatEntries = () => {
    return chatMessages.map((message) => {
      return <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp} key={message.id} />
    });
  };
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <div>
          {renderChatEntries()}
        </div>
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
