import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
// import Color from './components/Color';


const App = () => {

  const [messageData, setMessages] = useState(chatMessages)

  const [likeCount, setLikeCount] = useState(0)

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

  

  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon's Chat</h1>
        <section>
          {/* <span id='left'>
            <button onClick={console.log('changeFontcolor')}className='green' >🟢</button>
            <button className='yellow'>🟡</button>
            <button className='red'>🔴</button>
            <button className='blue'>🔵</button>
            <button className='purple'>🟣</button>
            <button className='orange'>🟠</button>
          </span> */}
          <span className='widget' id='heartWidget'>{ likeCount } 🩷s </span>
          {/* <span id='right'>
            <button className='green' >🟢</button>
            <button className='yellow'>🟡</button>
            <button className='red'>🔴</button>
            <button className='blue'>🔵</button>
            <button className='purple'>🟣</button>
            <button className='orange'>🟠</button>
          </span> */}
        </section>
        
      </header>

        
      <main>
        {/* <ChatEntry sender='Vladamir' body='hey whatsup hello' timeStamp='2018-05-29T22:49:06+00:00'/> */}
        <ChatLog
        entries={ messageData }
        updateMessage={ updateMessage }
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
