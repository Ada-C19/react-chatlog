import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedChat) => {
    const chats = chatData.map(chat => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });
    setChatData(chats);
  };

  const calcTotalLikes = (chatData) => {
    return chatData.reduce((total, chat) => {
      if (chat.liked === true) {
        total += 1;
      }
      return total;
    }, 0);
  }

  const totalLikeCount = calcTotalLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h1 className='widget'>{totalLikeCount} ❤️s</h1>
        </section>
      </header>
      <main>
        <ChatLog 
        entries={chatData}
        onUpdateChat={updateChatData}/>
      </main>
    </div>
  );
};

export default App;
