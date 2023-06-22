import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  const [entries, setEntries] = React.useState(chatMessages);

  const updateLike = (id) => {
      setEntries(prevEntry => {
        const newEntry = prevEntry.map(entry => {
          return entry.id === id ?{...entry, liked: !entry.liked} : entry
        })
      return newEntry
      })
  };

  const totalLikes = () => {
    let total = 0;
    for (let entry of entries) {
      if (entry.liked) {
        total +=1
      }
    }
    return total
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <section className="total-likes">{totalLikes()} ❤️s</section>
      </header>
      <main>
        {/* {chatEntry} */}
        <ChatLog entries={entries} updateLike={updateLike}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
