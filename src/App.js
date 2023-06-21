import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';


const App = () => {

  const [messages, setMessages] = useState(chatMessages);

  const updateMessage = (messageId) => {

    const updatedMessages = messages.map(message => {
      const newMessage = {...message}
      if (message.id === messageId) {
        newMessage.liked = !newMessage.liked;
      }
      return newMessage
    })
    setMessages(updatedMessages);
  }

  const countLikedMessages = () => {
    let count = 0;
    for(const msg of messages) {
      if (msg.liked) {
        count += 1
      }
    }
    return count;
  }



  return (
    <div id="App">
      <header>
        <h1>Vladimir 👩🏼‍🤝‍👩🏻 Estragon {countLikedMessages()} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={messages} updateMessage={updateMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
