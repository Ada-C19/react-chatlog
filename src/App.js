import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import ColorButtons from './components/ColorButtons.js';
import { useState } from 'react';

const App = () => {
  const [chatBody, setChatBody] = useState(chatMessages);
  const updateMessage = (newMessage) => {
    const updatedMessages = chatBody.map((message) => {
      if (message.id === newMessage.id) {
        return newMessage;
      } else {
        return message;
      }
    });
    setChatBody(updatedMessages);
  };

  const likedMessageCount = chatBody.filter((message) => message.liked).length;
  const plural = likedMessageCount == 0 || likedMessageCount > 1 ? 's' : '';
  const firstSender = chatBody[0].sender;
  const [firstSenderColor, setFirstSenderColor] = useState('');
  const secondSender = chatBody[1].sender;
  const [secondSenderColor, setSecondSenderColor] = useState('');

  const updateMessageColor = (sender, color) => {
    if (sender === firstSender) {
      setFirstSenderColor(color);
    } else {
      setSecondSenderColor(color);
    }
    const updatedMessages = chatBody.map((message) => {
      let tempMessage = { ...message };
      tempMessage.color = color;
      if (message.sender === sender) {
        return tempMessage;
      } else {
        return message;
      }
    });
    setChatBody(updatedMessages);
  };

  const resetMessageColor = () => {
    setSecondSenderColor('');
    setFirstSenderColor('');
    const updatedMessages = chatBody.map((message) => {
      let tempMessage = { ...message };
      tempMessage.color = '';
      return tempMessage;
    });
    setChatBody(updatedMessages);
  };

  const resetLikes = () => {
    const updatedMessages = chatBody.map((message) => {
      let tempMessage = { ...message };
      tempMessage.liked = false;
      return tempMessage;
    });
    setChatBody(updatedMessages);
  };

  return (
    <div id='App'>
      <header>
        <h1>🤖 Updating for Godot 🤖</h1>
        <h2>
          A chat between{' '}
          <span className={`firstSender ${firstSenderColor}`}>
            {firstSender}
          </span>{' '}
          and{' '}
          <span className={`secondSender ${secondSenderColor}`}>
            {secondSender}
          </span>
        </h2>
        <div id='colorWidget'>
          <span id='firstSenderColor'>
            <p>{firstSender}'s color</p>
            <ColorButtons
              sender={firstSender}
              onUpdateColor={updateMessageColor}
            />
          </span>
          <span id='middleSpan'>
            <span id='heartWidget'>
              {`${
                chatBody.filter((message) => message.liked).length
              } message${plural} liked`}{' '}
              ❤️
            </span>
            <span>
              <button className='headerButton' onClick={resetMessageColor}>
                Reset Colors
              </button>{' '}
              <button className='headerButton' onClick={resetLikes}>
                Reset Likes
              </button>
            </span>
          </span>
          <span id='secondSenderColor'>
            <p>{secondSender}'s color</p>
            <ColorButtons
              sender={secondSender}
              onUpdateColor={updateMessageColor}
            />
          </span>
        </div>
      </header>
      <main>
        <ChatLog
          className='chat-log'
          entries={chatBody}
          onLikeMessage={updateMessage}
        />
      </main>
    </div>
  );
};

export default App;
