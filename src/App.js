import React, { useState, useEffect } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorPicker from './components/ColorPicker'

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [numLikes, setNumLikes] = useState(0);
  const [localColor, setLocalColor] = useState('black');
  const [remoteColor, setRemoteColor] = useState('black');
  const [localName, setLocalName] = useState('');
  const [remoteName, setRemoteName] = useState('');

  const onUpdateColor = (updatedColor, user) => {
    if (user === 'local') {
      setLocalColor(updatedColor);
    } else if (user === 'remote') {
      setRemoteColor(updatedColor);
    }
  };
  
  const updateChatData = updatedChatData => {
    const chats = chatData.map(chat => {
      if (chat.id === updatedChatData.id) {
        return updatedChatData;
      } else {
        return chat;
      }
    });
    setChatData(chats);
  };

  useEffect(() => {
    let likes = 0
    for (const chat of chatData) {
      if (chat.liked) {
        likes++
      }
    }
    setNumLikes(likes)
  }, [chatData]);

  useEffect(() => {
    setRemoteName(chatData[0].sender)
    setLocalName(chatData[1].sender)
  }, [chatData]);

  return (
    <div id="App">
      <header>
        <h1>Chat between&nbsp; 
          <span className={remoteColor !== 'black' ? remoteColor : null}>{remoteName}</span>
          &nbsp;and&nbsp;
          <span className={localColor !== 'black' ? localColor : null}>{localName}</span>
        </h1>
        <section className="widget-container">
          <div className="color-picker">
            <p className={remoteColor}>{remoteName}'s color:</p>
            <ColorPicker onUpdateColor={onUpdateColor} user={'remote'} />
          </div>
          <div className="widget">
            {numLikes === 1 ? 
              <h2 id="heartWidget">{numLikes} ❤️</h2>
              :
              <h2 id="heartWidget">{numLikes} ❤️s</h2>
            }
          </div>
          <div className="color-picker">
            <p className={localColor}>{localName}'s color:</p>
            <ColorPicker onUpdateColor={onUpdateColor} user={'local'} />
          </div>
        </section>
      </header>
      <main>
        <ChatLog 
          entries={chatData} 
          onUpdateChatData={updateChatData}
          localColor={localColor}
          remoteColor={remoteColor}
        />
      </main>
    </div>
  );
};

export default App;
