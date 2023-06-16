import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import ColorButtons from './components/ColorButtons.js';
import { useState } from 'react';

const App = () => {
  //Used for all changes to message data
  const [chatBody, setChatBody] = useState(chatMessages);

  //Used for displaying like count
  const likedMessageCount = chatBody.filter((message) => message.liked).length;
  const plural = likedMessageCount == 0 || likedMessageCount > 1 ? 's' : '';

  //Used for changes to display of sender names
  const uniqueNames = [
    ...new Set(
      chatMessages.map((message) => {
        return message.sender;
      })
    ),
  ];
  const firstSender = uniqueNames[0];
  const [firstSenderColor, setFirstSenderColor] = useState('');
  const secondSender = uniqueNames[1];
  const [secondSenderColor, setSecondSenderColor] = useState('');

  //Used for header toggles (hidden/visible, night/day mode)
  const [menuVisibility, setMenuVisibility] = useState('visible');
  const collapseIcon = menuVisibility === 'visible' ? '🔽' : '🔼';
  const [dayNightMode, setDayNightMode] = useState('day');
  const dayNightIcon = dayNightMode === 'day' ? '☀️' : '🌙';

  //Update message body after change in like
  const updateMessageOnLike = (newMessage) => {
    const updatedMessages = chatBody.map((message) => {
      if (message.id === newMessage.id) {
        return newMessage;
      } else {
        return message;
      }
    });
    setChatBody(updatedMessages);
  };

  //Update text color in both header and chat entries
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

  //Reset all colors when reset button is clicked
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

  //Reset all likes to false when reset button is clicked
  const resetLikes = () => {
    const updatedMessages = chatBody.map((message) => {
      let tempMessage = { ...message };
      tempMessage.liked = false;
      return tempMessage;
    });
    setChatBody(updatedMessages);
  };

  //Toggle the visibility of the options in the header
  const collapseToggle = () => {
    if (menuVisibility === 'visible') {
      setMenuVisibility('hidden');
    } else {
      setMenuVisibility('visible');
    }
  };

  //Toggle day vs. night mode
  const dayNightToggle = () => {
    if (dayNightMode === 'day') {
      setDayNightMode('night');
    } else {
      setDayNightMode('day');
    }
  };

  return (
    <div id='App' className={`${menuVisibility} ${dayNightMode}`}>
      <header>
        <button id='collapseToggle' onClick={collapseToggle}>
          {collapseIcon}
        </button>
        <button id='modeToggle' onClick={dayNightToggle}>
          {dayNightIcon}
        </button>
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
        <div id='headerWidgets'>
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
          onLikeMessage={updateMessageOnLike}
        />
      </main>
    </div>
  );
};

export default App;
