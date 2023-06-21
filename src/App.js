import React,{useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json'

const App = () => {
  const [entries, setEntries] = useState(chatMessages)
  console.log(`I'm in app ${entries}`)
  const totalLikes = () => {
    let total = 0;
    for (let entry of entries) {
      if (entry.liked === true) {
        total += 1;
      }
    }

    return total;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <h1 className = "number of likes">{totalLikes()} ❤️s</h1>
      </header>
      <main>
        <div className="contacts">
          <ChatLog entries={entries}/>
        </div>
      </main>
    </div>
  );
};

export default App;
