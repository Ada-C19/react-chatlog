import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entriesData, setEntriesData] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(0);
  
  const [personOne, personTwo] = [...new Set(entriesData.map(entry => entry.sender))];
  
  const updateEntryData = updatedEntry => {
    const entries = entriesData.map(entry => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    
    setEntriesData(entries);
  };

  const toggleLikes = updatedEntry => {
    if (updatedEntry.liked) {
      setLikesCount(prevLikesCount => prevLikesCount + 1);
    } else {
      setLikesCount(prevLikesCount => prevLikesCount - 1);
    }
  };
  
  return (
    <div id="App">
      <header>
        <h1>Chat between {`${personOne} and ${personTwo}`}</h1>
        <div className='likes-count'>
          <h2>{`${likesCount} ❤️s`}</h2>
        </div>
      </header>
      <main>
        <ChatLog 
          entries={entriesData} 
          updateEntryData={updateEntryData}
          likesCount={likesCount}
          toggleLikes={toggleLikes}
        />
      </main>
    </div>
  );
};

export default App;
