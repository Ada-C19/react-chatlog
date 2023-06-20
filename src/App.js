import React from 'react';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry/ChatEntry';
import './App.css';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);
  return (
    <section id='App'>
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatEntry chatEntries={chatEntries} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </section>
  );
};

export default App;
