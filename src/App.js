import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';



const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [textColor, setTextColor] = useState({});

  const getNames = () => {
    const names = [];
    for (const message of chatMessages) {
      if (!names.includes(message.sender)) {
        names.push(message.sender)
      }
    };
    return names;
  };

  const names = getNames();


  const onToggleLike = (id) => {
    setChatData((prevData) => {
      return prevData.map((chat) => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked }
        } else {
          return chat
        }
      })
    });
  };

  const onColorClicked = (color, name) => {
    setTextColor((prevTextColor) => {
      return { ...prevTextColor, [name]: color }
    })
  };

  console.log(textColor)


  return (
    <div id="App">
      <header>
        <h1>Chat between <span>{names[0]}</span> and <span>{names[1]}</span></h1>
      </header>
      <main>
        <div className='color-choice-box'>
          <ColorChoice name={names[0]} names={names} onColorClicked={onColorClicked} textColor={textColor} />
          <ColorChoice name={names[1]} names={names} onColorClicked={onColorClicked} textColor={textColor} />
        </div>
        <ChatLog entries={chatData} onToggleLike={onToggleLike} names={names} textColor={textColor} />
      </main>
    </div>
  );
};

export default App;