import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
//❤️

const App = () => {

  const [entries, setEntries] = React.useState(chatMessages)

  const toggleLike = (id) => {
    setEntries((prevEntries) => {
      const updatedEntries = prevEntries.map((entry) => {
        return entry.id === id
        ? { ...entry, liked: !entry.liked }
        : entry;
      })
      return updatedEntries
    })
  }

  const totalLike = (entries) => {
    let total = 0;
    for (let entry of entries) {
      if (entry.liked) {
        total += 1
      }
    }
    return total;
  }

  return (
    <div id='App'>
      <header>
        <h1>Chat Log</h1>
        <h3>{totalLike(entries)} ❤️s</h3>
      </header>
      <main>
        <ChatLog
          entries={entries}
          toggleLike={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
