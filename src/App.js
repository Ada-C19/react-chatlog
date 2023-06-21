import React, { useState, useEffect } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likedMessages, setLikedMessages] = useState(0);
  const [participants, setParticipants] = useState([]);

  const handleLikeChange = (isLiked) => {
    setLikedMessages((prevCount) => (isLiked ? prevCount + 1 : prevCount - 1));
  };

  useEffect(() => {
    const participantsSet = new Set();
    chatMessages.forEach((entry) => {
      participantsSet.add(entry.sender);
    });
    setParticipants(Array.from(participantsSet));
  }, []);

  const generateTitle = () => {
    if (participants.length === 1) {
      return participants[0];
    } else if (participants.length === 2) {
      return participants.join(' and ');
    } else if (participants.length > 2) {
      const lastParticipant = participants[participants.length - 1];
      const remainingParticipants = participants.slice(0, participants.length - 1);
      return `${remainingParticipants.join(', ')}, and ${lastParticipant}`;
    }
    return 'Application title';
  };

  return (
    <div id="App">
      <header>
      <h1>Chat between {generateTitle()}</h1>
        <p>{`${likedMessages} ❤️s`}</p>
      </header>
      <main>
        <ChatLog entries={chatMessages} onLikeChange={handleLikeChange} />
      </main>
    </div>
  );
};

export default App;
