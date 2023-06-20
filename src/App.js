import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const local = chatMessages[0].sender
  const remote = chatMessages[1].sender

  const [messages, setMessages] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(0);
  
  const updateLikes = (messageId, isLiked) => {
    
    const updatedMessages = messages.map((message) => {
      if (message.id === messageId) {
        return {
          ...message,
          liked: isLiked };
      }
      return message;
    });
    setMessages(updatedMessages);

    updatedMessages.forEach((message) => {
      if (message.id === messageId) {
        if (message.liked) {
          setLikesCount(oldLikes => oldLikes + 1);
        } else {
          setLikesCount(oldLikes => oldLikes - 1);
        }
      }
    })
  };
  
  return (
    <div id="App">
      <header>
        <h1>Chat Between {local} and {remote}</h1>
        <section  >
          <span id='heartWidget' className='widget'>Heart Count {likesCount} ❤️s</span>
      </section>
      </header>
      
      <main>
        <ChatLog entries={ messages } updateLikes={ updateLikes } ></ChatLog>
      </main>
    </div>
  );
};

export default App;
