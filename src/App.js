import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const SENDER_1 = chatMessages[0].sender;
  const SENDER_2 = chatMessages[1].sender;

  const DEFAULT_COLOR_DATA = {
    [SENDER_1] : '',
    [SENDER_2]: ''
  };

  const [colorData, setColorData] = useState(DEFAULT_COLOR_DATA);

  const updateLiked = (messageId) => {
    const updatedMessages = messages.map(message => {
      if (messageId === message.id) {
        return {
          ...message,
          liked: !message.liked
        }
        
      }

      return message;
    });
    setMessages(updatedMessages);
  };

  const likeCount = () => {
    let likeCount = 0;
    for (const message of messages) {
      if (message.liked) {
        likeCount++;
      }
    }
    return likeCount;
  };

  const setColorCallback = (sender, color) => {
    const updatedColorData = {...colorData};
    updatedColorData[sender] = color;
    setColorData(updatedColorData);
  };

  const setColorForSender1Callback = (color) => setColorCallback(SENDER_1, color);
  const setColorForSender2Callback = (color) => setColorCallback(SENDER_2, color);

  return (
    <div id="App">
      <header>
        <h1>
          {'Chat Between '}
          <span className={colorData[SENDER_1]}> {SENDER_1} </span>
          {' and '}
          <span className={colorData[SENDER_2]}> {SENDER_2} </span>
        </h1>
        <section> 
          <span className={colorData[SENDER_1]}> {`${SENDER_1}'s color:`} </span>
          <ColorChoice setColorCallback={setColorForSender1Callback}></ColorChoice>

          <span id="heartWidget" className="widget"> {`${likeCount()} ❤️s liked`} </span>
          
          <span className={colorData[SENDER_2]}> {`${SENDER_2}'s color:`} </span>
          <ColorChoice setColorCallback={setColorForSender2Callback}></ColorChoice>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} updateLiked={updateLiked} colorData={colorData} ></ChatLog>
      </main>
    </div>
  );
};

export default App;
