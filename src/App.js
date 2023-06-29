import React, {useState} from 'react';
import './App.css';
// import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json'

const App = () => {
  const [messageData, setMessageData] = useState(messages);

  const updateMessageData = updatedMessage => {
    console.log('shout out to updateMessageData');
    const tempMessages = messageData.map(message => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });

    setMessageData(tempMessages)
  };

  return (
    
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages} onLikeMessage={updateMessageData}/>
      </main>
    </div>
  );
};

export default App;
