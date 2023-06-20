import React, {useState} from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';


const App = () => {

  const [messages, setMessages] = useState(chatMessages);
  const [count, setCount] = useState(0)

  const updateMessage = (messageId) => {

    const updatedMessages = messages.map(message => {
      if (message.id === messageId) {
        message.liked = !message.liked;
        if(message.liked) {
          setCount((count) => count + 1);
        } else {
          setCount((count) => count - 1)
        }
      }
      return {...message}
    })

    setMessages(updatedMessages);
  }


  return (
    <div id="App">
      <header>
        <h1>Application title {count} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateMessage={updateMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
