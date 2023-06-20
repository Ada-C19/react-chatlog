import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
// import ColorSelector from './components/ColorSelector';


const App = () => {
  const initialCopy = chatMessages.map((chat) => {
    return {...chat};
  })

  const [chatData, setChatData] = useState(initialCopy);
  const [likedCount, setLikedCount] = useState(0);
  // const [selectColor, setSelectColor] = useState(black);

  const heartWidget = likedCount !== 0 ? `${likedCount} ❤️s`: '';

  const updateLike = (chatEntryId, updatedLike) => {
    let newLikeCount = likedCount; 
    const newChatData = chatData.map((chatEntry) => {
      if (chatEntry.id !== chatEntryId){
        return chatEntry
      } else {
        if (updatedLike) {
          newLikeCount++;
        }else {
          newLikeCount--;
        }
        const newChat = {
          ...chatEntry, 
          liked: updatedLike,
        };
        return newChat;
      }
    });
    setChatData(newChatData)
    setLikedCount(newLikeCount)
  };

  // const selectColor = (chatEntrySender, color) => {
  //   const newSenderColor = filter((sender) => chatEntrySender === sender)
  //   bodyColor = color 


  // }

  return (
    <div id="App">
      <header>
        <h1>Susi's Spy Chatlog</h1>
        <section>
          {/* <ColorSelector /> */}
          <span className="widget" id="heartWidget">
            {heartWidget}
          </span>
          {/* <ColorSelector /> */}
        </section>
      </header>
     
      <main>
        <ChatLog entries={chatData} updateLike={updateLike}/>
      </main>
    </div>
  );
};

export default App;
