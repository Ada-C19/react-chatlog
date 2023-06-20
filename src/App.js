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
  const plural = likedMessageCount === 0 || likedMessageCount > 1 ? 's' : '';

  //Used for changes to display of sender names
  //Later uses assume chat is between exactly two respondents. Local/remote is determined arbitrarily.
  const uniqueNames = [
    ...new Set(
      chatMessages.map((message) => {
        return message.sender;
      })
    ),
  ];
  const senders = [uniqueNames[0], uniqueNames[1]];
  const [senderColors, setSenderColors] = useState(['', '']);

  //Used for header toggles (hidden/visible, night/day mode)
  const [menuVisibility, setMenuVisibility] = useState('visible');
  const collapseIcon = menuVisibility === 'visible' ? '🔽' : '🔼';
  const [dayNightMode, setDayNightMode] = useState('day');
  const dayNightIcon = dayNightMode === 'day' ? '☀️' : '🌙';

  //Update message body after change in like
  const updateMessageOnLike = (newMessage) => {
    const updatedMessages = chatBody.map((message) => {
      return message.id === newMessage.id ? newMessage : message;
    });
    setChatBody(updatedMessages);
  };

  //Update text color in both header and chat entries
  const updateMessageColor = (sender, color) => {
    if (sender === senders[0]) {
      setSenderColors([color, senderColors[1]]);
    } else {
      setSenderColors([senderColors[0], color]);
    }
    const updatedMessages = chatBody.map((message) => {
      return message.sender === sender ? { ...message, color: color } : message;
    });
    setChatBody(updatedMessages);
  };

  //Reset all colors when reset button is clicked
  const resetMessageColor = () => {
    setSenderColors(['', '']);
    const updatedMessages = chatBody.map((message) => {
      return { ...message, color: '' };
    });
    setChatBody(updatedMessages);
  };

  //Reset all likes to false when reset button is clicked
  const resetLikes = () => {
    const updatedMessages = chatBody.map((message) => {
      return { ...message, liked: false };
    });
    setChatBody(updatedMessages);
  };

  //Toggle the visibility of the options in the header
  const collapseToggle = () => {
    menuVisibility === 'visible'
      ? setMenuVisibility('hidden')
      : setMenuVisibility('visible');
  };

  //Toggle day vs. night mode
  const dayNightToggle = () => {
    dayNightMode === 'day' ? setDayNightMode('night') : setDayNightMode('day');
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
          <span className={`firstSender ${senderColors[0]}`}>{senders[0]}</span>{' '}
          and{' '}
          <span className={`secondSender ${senderColors[1]}`}>
            {senders[1]}
          </span>
        </h2>
        <div id='headerWidgets'>
          <span>
            <p>{senders[0]}'s color</p>
            <ColorButtons
              sender={senders[0]}
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
          <span>
            <p>{senders[1]}'s color</p>
            <ColorButtons
              sender={senders[1]}
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
          senders={senders}
        />
      </main>
    </div>
  );
};

export default App;
