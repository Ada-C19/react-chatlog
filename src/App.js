import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages)
  
  const handleLike = id => {
    setMessages(prevMessages => {
      return prevMessages.map(message => {
        if (id === message.id) {
          return {
            ...message,
            liked: !message.liked
          };
        }
        return message;
      })
    })
  }

  const totalLikes = messages.filter(entry => entry.liked).length 

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h3>{totalLikes} ❤️'s</h3>
      </header>
      <main>
        {
        /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
          <ChatLog entries={messages} handleLike={handleLike}/> 
          // <ChatEntry body={exampleMessage.body} timeStamp={exampleMessage.timeStamp} sender={exampleMessage.sender}/>
        }
      </main>
    </div>
  );
};

export default App;
