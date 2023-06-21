import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react'; 

const App = () => {
  //
  const [entriesData, setEntriesData] = useState(chatMessages); 

  const entryLiked = (id) => {
    console.log('entryLiked called...');
    const updatedEntries = entriesData.map((entry) => {
      if (entry.id !== id) {
        return { ...entry};
      } else {
        const updatedEntry = {...entry};
        updatedEntry.liked = !updatedEntry.liked;
        return updatedEntry;
      }

    });
    setEntriesData(updatedEntries);
  };

  const likesNumber = entriesData.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chatlog with Vladamir & and Estrogen</h1>
        <h2> {likesNumber} ❤️s</h2>
      </header>
      <main>
        {<ChatLog entries={entriesData} updateLiked={entryLiked}/>
        /* Wave 01: Render one ChatEntry component
        
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;

/* <ChatEntry body={chatMessages[0].body} sender={chatMessages[0].sender} timeStamp={chatMessages[0].timeStamp}  */