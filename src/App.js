import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'
import ChatEntry from './components/ChatEntry';

const App = () => {
  const [chatEntries, setChatEntries] = React.useState(chatMessages);
  const setLikes = (id) => {
    setChatEntries(prevChatEntries => {
      const updatedChatEntries = prevChatEntries.map(ChatEntry =>{
        return ChatEntry.id === id ? {...ChatEntry, liked: !ChatEntry.liked} : ChatEntry;
      })
      console.log(updatedChatEntries);
      return updatedChatEntries;
    });
  }
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        
        < ChatLog entries = {chatEntries} setLikes = {setLikes}/>
      </main>
    </div>
  );
};

export default App;
