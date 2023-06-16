import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [textColor, setTextColor] = useState('');
  const [colorName, setColorName] = useState('');


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

  const getNames = () => {
    const names = [];
    for (const message of chatMessages) {
      if (!names.includes(message.sender)) {
        names.push(message.sender)
      }
    };
    return names;
  };

  const [name1, name2] = getNames();


  const onColorClicked = (color, name) => {
    setTextColor(color)
    setColorName(name)

  }

  console.log(textColor, colorName)

  return (
    <div id="App">
      <header>
        <h1>Chat between {name1} and {name2}</h1>
      </header>
      <main>
        <div className='color-choice-box'>
          <ColorChoice name={name1} onColorClicked={onColorClicked} textColor={textColor} colorName={colorName} />
          <ColorChoice name={name2} onColorClicked={onColorClicked} textColor={textColor} colorName={colorName} />
        </div>
        <ChatLog entries={chatData} onToggleLike={onToggleLike} textColor={textColor} colorName={colorName} />
      </main>
    </div>
  );
};

export default App;
