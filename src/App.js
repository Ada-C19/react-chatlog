import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const local = chatMessages[0].sender
  const remote = chatMessages[1].sender

  const [messages, setMessages] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(0);

  const updateLikes = (messageId) => {
    const updatedMessages = messages.map(message => {
      if (message.id === messageId) {
        message.liked = !message.liked;
        // setLikesCount(likesCount + 1);
      }
      return {...message};
    });
    setMessages(updatedMessages);
  };
  

  return (
    <div id="App">
      <header>
        <h1>Chat Between {local} and {remote}</h1>
        <section  >
          <h2 id='heartWidget' className='widget'>Heart Count {likesCount} ❤️s</h2>
      </section>
      </header>
      
      <main>
        <ChatLog chatMessages={ messages } updateLikes={ updateLikes } ></ChatLog>
      </main>
    </div>
  );
};

export default App;
