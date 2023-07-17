import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import ColorChoice from './components/ColorChoice';
import { useState } from 'react';

const App = () => {
  const [messagesData, setMessagesData] = useState(chatMessages);
  const [colorLocal, setColorLocal] = useState('#000000');
  const [colorRemote, setColorRemote] = useState('#000000');

  const localSender = messagesData[0]['sender'];
  const findremoteSender = (messagesData) => {
        for (const message of messagesData) {
          if (message['sender'] !== localSender) {
            return message['sender'];
          }
        }
      };
  const remoteSender= findremoteSender(messagesData);

  const setLocalSenderColor = (newColor) => {
    setColorLocal(newColor);
  };

  const setRemoteSenderColor = (newColor) => {
    setColorRemote(newColor);
  };

  const [numLiked, setNumLiked] = useState(0);
  const onHeartClicks = (liked) => {
    if (liked) {
      setNumLiked(numLiked - 1);
    } else {
      setNumLiked(numLiked + 1);
    }
  };


  const onUpdateLikeFx = (id) => {
    const newMessages = messagesData.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });

    setMessagesData(newMessages);
  };
  return (
    <div id="App">
      <header>
        <h1>
          Chat between {localSender} and {remoteSender}
        </h1>
        <section>
          <ColorChoice
            sender={localSender}
            setColorCallback={setLocalSenderColor}
            color={colorLocal}
          />
          <ColorChoice
            sender={remoteSender}
            setColorCallback={setRemoteSenderColor}
            color={colorRemote}
          />
        </section>
        <section>
          <h2 className="widget" id="heartWidget">
             {numLiked} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onUpdateLike={onUpdateLikeFx}
          onHeartClicks={onHeartClicks}
          localSender={localSender}
          colorLocal={colorLocal}
          colorRemote={colorRemote}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;