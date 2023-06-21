import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // const firstChat = chatMessages[0]

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

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry 
        sender={firstChat.sender} 
        body={firstChat.body} 
        timeStamp={firstChat.timeStamp}
        liked={firstChat.liked}
        onUpdateChat={updateChatData}/> */}
        <ChatLog 
        entries={chatData}
        onUpdateChat={updateChatData}/>
      </main>
    </div>
  );
};

export default App;
