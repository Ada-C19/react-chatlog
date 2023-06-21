import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';


const App = () => {

  const [messageData, setMessages] = useState(chatMessages)

  const [likeCount, setLikeCount] = useState(0)

  const [fontColor, setFontColor] = useState('black')

  const updateMessage = (messageToUpdate) => {
    const messages = messageData.map((message) => {

      if (messageToUpdate.liked === true) {
        setLikeCount(likeCount + 1);
      }else {
        setLikeCount(likeCount - 1);
      }

      if(message.id === messageToUpdate.id) {
        return messageToUpdate;
      }
    return message
    });
    setMessages(messages)
  }

  const setColorCallback = (color) => {
    setFontColor(color);
  };


  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon's Chat</h1>
        <section id='label'>
          Set color for Vladimir
          <ColorChoice 
          setColorCallback={ setColorCallback } />
          <span className='widget' id='heartWidget'>{ likeCount } 🩷s </span>
          Set Color for Estragon
          <ColorChoice 
          setColorCallback={ setColorCallback } /> 
        </section>
        
      </header>

        
      <main>
        {/* <ChatEntry sender='Vladamir' body='hey whatsup hello' timeStamp='2018-05-29T22:49:06+00:00'/> */}
        <ChatLog
        entries={ messageData }
        updateMessage={ updateMessage }
        selectedColor={ fontColor }
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
