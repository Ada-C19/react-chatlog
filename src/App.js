import React,{useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json'

const App = () => {
  const [entries, setEntries] = useState(chatMessages)
  console.log(`I'm in app ${entries}`)
  const toggleLikes = (id) => {
    setEntries(prevEntries => {
      const updatedEntries = prevEntries.map(entry => {
        return entry.id === id ? {...entry, liked: !entry.liked} : entry
      })
      return updatedEntries
    })
  }
  const totalLikes = () => {
    let total = 0;
    for (let entry of entries) {
      if (entry.liked){
        total += 1;
      }
    }

    return total;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon </h1>
        <h2>{totalLikes()} ❤️s</h2>
      </header>
      <main>
        <div className="contacts">
          <ChatLog entries={entries} toggleLikes={toggleLikes}/>
        </div>
      </main>
    </div>
  );
};

export default App;
