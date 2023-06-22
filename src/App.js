import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [messages, setMessages] = React.useState(chatMessages);

  const likeMessage = (id) => {
    setMessages(
      messages.map((message) => (message.id === id ? {
        ...message,
        liked: !message.liked
      } : message))
    );
  };

  const setColor = (colorChoice) => {

  }

  let totalHearts = 0;

  for (let message of messages) {
    if (message.liked) {
      totalHearts++
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Estragon</h1>
        <section>
          <ColorChoice setColorCallback={setColor}/>
          <p>Total Likes: {totalHearts} ❤️s</p>
          <ColorChoice setColorCallback={setColor}/>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} likeMessage={likeMessage} />
      </main>
    </div>
  );
};

export default App;
