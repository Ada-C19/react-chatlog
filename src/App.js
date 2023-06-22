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

  const totalLikes = () => {
    let total = 0;
    for (let entry of entries) {
      total += entry.liked ? 1 : 0;
    }
    return total;
  }

  return (
    <div id="App">
      <header>
        <h1>😤 ClashMates ⚔️</h1>
        <h2>{totalLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} toggleLike={toggleLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
