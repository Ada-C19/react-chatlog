import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  let total = 0;
  const totalLikes = () => {
    for (const msg of messages){
      if (msg.liked === true) {
        total += 1;
      };
    };
      return total;
  };

  const increaseLikes = (id) => {
    setMessages(prevMessages => {
      const updatedMessages = prevMessages.map(message => {
        return message.id  === id ?  {...message, liked: !message.liked} : message;
      });
      return updatedMessages;
    });
  };

  const sender1 = messages[0].sender;
  const sender2 = messages[1].sender;

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${sender1} and ${sender2}`} </h1>
        <section>
        <p className='widget' id='heartWidget'>{totalLikes()} ❤️s</p>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} increaseLikes={increaseLikes} />
      </main>
    </div>
  );
};

export default App;
