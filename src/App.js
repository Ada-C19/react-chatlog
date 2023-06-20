import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  const [messages, setMessages] = React.useState(chatMessages)

  const likeMessage = (id) => {
    
  }

  return (
    <div id="App">
      <header>
        <h1>Estragon</h1>
      </header>
      <main>
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
