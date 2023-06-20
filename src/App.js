import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  const likedMessagesCount = chatMessages.filter(message => message.liked).length;
    console.log(likedMessagesCount)

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section className="header section">{likedMessagesCount} ❤️s
        </section>
      </header>
      <main>
        
        <ChatLog entries={chatMessages}/>    
        likes={likedMessagesCount}
      </main>
    </div>
  );
};

export default App;
