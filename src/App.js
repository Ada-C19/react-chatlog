import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [ chatData, setChatData ] = useState(chatMessages);

  const updateChatData = updatedChat => {
    const updatedChats = chatData.map((chat) => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });

    setChatData(updatedChats);
  };

  // count the number of likes to display in header
  const likedTally = chatData.reduce((tally, chat) => {
    if (chat.liked) {
      tally += 1;
    }

    return tally;
  }, 0)

  // establish a local sender to pass down to ChatEntry
  // for use in toggling CSS classes
  const localName = chatData[0].sender

  // establish an array of unique names for display in header
  const names = chatData.reduce((uniqueNames, chat) => {
    if (!uniqueNames.includes(chat.sender)) {
      uniqueNames.push(chat.sender);
    }
    return uniqueNames;
  }, []);

  // form a string from the names array to display in header
  const headerNames = (names.length === 2) ? names.join(' and ') : names.join(', ')

  return (
    <div id="App">
      <header>
        <h1>Messages between {headerNames}</h1>
        <h4>{likedTally} ❤️s</h4>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onUpdateChatData={updateChatData}
          localName={localName}
        />
      </main>
    </div>
  );
};

export default App;
