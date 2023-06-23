import React from 'react';
import './App.css';
// import chatMessages from './data/messages.json';
import chatMessages from './data/messages';
import ChatLog from './components/ChatLog';



const App = () => {
  const [messages, setMessages] = React.useState(chatMessages)

  const handleLike = (id) => {
    setMessages(prevMessages => {
      const updatedMessages = prevMessages.map(message => {
        return message.id === id ? {...message, liked: !message.liked} : message
      })
      return updatedMessages
    })
  }

  const totalLikes = () => {
    let total = 0;
    for (let message of messages) {
      if (message.liked) {total += 1}
    }

    return total;
  };


  return (
    <div id="App">
      <header>
        <h1>Messages to Vladimir</h1>
      </header>
      <main>
        <h3>Total Likes: {totalLikes()}  ❤️s </h3>
        <ChatLog entries={messages} handleLike={handleLike}/>
      </main>
    </div>
  );
};

export default App;
