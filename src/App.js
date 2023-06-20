import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const local = chatMessages[0].sender
  const remote = chatMessages[1].sender

  const [messages, setMessages] = useState(chatMessages);

  const updateLikes = (messageId) => {
    const updatedMessages = messages.map(message => {
      if (message.id === messageId) {
        message.liked = !message.liked;
      }
      return {...message};
    });
    setMessages(updatedMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between {local} and {remote}</h1>
      </header>
      <main>
        <ChatLog chatMessages={ chatMessages } updateLikes={ updateLikes } ></ChatLog>
        
        {/* <ChatEntry sender={chatMessage1.sender} body={chatMessage1.body} timeStamp={chatMessage1.timeStamp}></ChatEntry>
        <ChatEntry sender={chatMessage2.sender} body={chatMessage2.body} timeStamp={chatMessage2.timeStamp}></ChatEntry> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
