import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';


const App = () => {

  const [messageData, setMessages] = useState(chatMessages)

  const [likeCount, setLikeCount] = useState(0)

  const [senderColors, setSenderColors] = useState({})

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

  // const setColorCallback = (color) => {
  //   setFontColor(color);
  // };

  const setColorCallback = (sender, color) => {
    setSenderColors((prevColors) => ({
      ...prevColors,
      [sender]: color,

    }));
  };


  return (
    <div id="App">
      <header>
        <h1 className={senderColors['Vladimir']}>Vladimir</h1> <h1>and</h1> <h1 className={senderColors['Estragon']}>Estragon's</h1> <h1>Chat</h1>
        <section>
          <ColorChoice 
          sender='Vladimir'
          color={senderColors['Vladimir']}
          setColorCallback={setColorCallback} />
          <span className='widget' id='heartWidget'>{ likeCount } 🩷s </span> 
          <ColorChoice 
          sender='Estragon'
          color={senderColors['Estragon']}
          setColorCallback={setColorCallback} />
        </section>
        
      </header>

        
      <main>
        {/* <ChatEntry sender='Vladamir' body='hey whatsup hello' timeStamp='2018-05-29T22:49:06+00:00'/> */}
        <ChatLog
        entries={ messageData }
        updateMessage={ updateMessage }
        senderColors={senderColors}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
