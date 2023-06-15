import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);
  // const chatData = [
  //   {
  //     id: 1,
  //     sender:'Vladimir',
  //     body:'why are you arguing with me',
  //     timeStamp:'2018-05-29T22:49:06+00:00',
  //     liked: false,
  //   }
  // ];

  // const entries = data;

  // const chatEntryComponents = entries.map(chatMsg => {
  //   return (
  //     <ul>
  //       <ChatEntry name={chatMsg.sender} body={chatMsg.body} timeStamp={chatMsg.timeStamp}></ChatEntry>
  //     </ul>

  //   )
  // });

  const updateChatEntries = updatedChatEntry => {
    const chatMsgs = chatEntries.map(chatEntry => {
      if (chatEntry.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return chatEntry;
      }
    })

    setChatEntries(chatMsgs);
    // console.log(likedChatEntries().length);
  };

  const likedChatEntries = () => {
    return (chatEntries.map(chatEntry => chatEntry.liked).filter(item => item === true))};

  const countLikes = likedChatEntries().length;

  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
        <section>{countLikes} ❤️s</section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* {chatEntryComponents} */}
        <span>
          <ChatLog 
          entries={chatEntries}
          onUpdateChat={updateChatEntries}
          ></ChatLog>
        </span>
      </main>
    </div>
  );
};

export default App;
