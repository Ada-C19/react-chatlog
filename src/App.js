import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js'


const App = () => {
  const localUser = chatMessages[0].sender
  const remoteUser = chatMessages[1].sender

  const [chatData, setChatData] = useState(chatMessages);

  const onUpdateChat = (updatedChat) => {
    const messages = chatData.map(chat => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });

    setChatData(messages);
  };

  let totalLikes = 0
  for (const message of chatData) {
      if (message.liked) {
        totalLikes +=1
      };
  };


  return (
    <div id="App">
      <header>
        <h1>Chat between {localUser} and {remoteUser}</h1>
        <p id="heartWidget">{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog        
          chatData={chatData}
          onUpdateChat={onUpdateChat}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
