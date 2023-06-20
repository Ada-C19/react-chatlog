import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js'

const App = () => {
  const [entries, setEntries] = React.useState(chatMessages);

  const toggleLike = (id) => {
    setEntries(prevEntries => {
      const updatedEntries = prevEntries.map(entry => {
        return entry.id===id ? {...entry, liked: !entry.liked} : entry
      })
      return updatedEntries;
    })
  };

  return (
    <div id="App">
      <header>
        <h1>😤 ClashMates ⚔️</h1>
      </header>
      <main>
        <ChatLog chatEntries={entries} toggleLike={toggleLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
