import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = updatedChat => {
    const chats = chatData.map(chat => {
        if (chat.id === updatedChat.id) {
            return updatedChat;
        } else {
            return chat;
        }
    });

    setChatData(chats);
};

const [localColor, setLocal] = useState('');
const [remoteColor, setRemote] = useState('')

  const updateColor = (user, newColor) => {
      if (user === 1) {
        setLocal(newColor);
      } else {
        setRemote(newColor);
      };
  };

  const countLikes = (arr) => {
    let count = 0;
    arr.forEach(element => {
      if (element.liked === true) {
        count += 1;
      }
    });
    return count;
  };

  const likes = countLikes(chatData); 

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
        <section>
        <span className='widget'><p>{chatMessages[0].sender}'s color</p><ColorChoice user={1} updateColor={updateColor}></ColorChoice></span>
        <span className='widget'><h2 id="heartWidget">{likes} ❤️s</h2></span>
        <span className='widget'><p>{chatMessages[1].sender}'s color</p><ColorChoice user={0} updateColor={updateColor}></ColorChoice></span>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData} local={localColor} remote={remoteColor}></ChatLog>
      </main>
    </div>
  );
};

export default App;
