import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ChatEntry from './components/ChatEntry';

function App() {
  const[chatMessages, setMessages] = useState(chatMessages);

  const updatedLikes = (messageId) => {

    // create a new list of entries with updated likes 
    const updatedLikes = chatMessages.map(ChatEntry => {
      if (messageId.id === messageId) {
        messageId.isLiked = !messageId.isLiked;
      };
      return {...messageId}
    });

    setMessages(updatedLikes);
  }

    const filteredUpdatedData = updatedLikes.filter(function (element) {
      return element !== undefined;
    });

    setMessages(filteredUpdatedData);
  

return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />    
      </main>
    </div>
  );
}
export default App;
