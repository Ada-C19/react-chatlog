import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';


// const sender = chatMessages[0].sender
// const body = chatMessages[0].body
// const timeStamp = chatMessages[0].timeStamp


const App = () => {
  // renderChatLog returns a new array of msgs in JSX
  const renderChatLog = () => {
    return (
      chatMessages.map((message) => {
        return (
          <ChatEntry 
            sender = { message.sender }
            body = { message.body }
            timeStamp= { message.timeStamp }
          />
        )
      })
    )
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {renderChatLog()}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
