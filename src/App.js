import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chatlog with Vladamir & and Estrogen</h1>
      </header>
      <main>
        {<ChatLog entries={ chatMessages }/>
        /* Wave 01: Render one ChatEntry component
        
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;

/* <ChatEntry body={chatMessages[0].body} sender={chatMessages[0].sender} timeStamp={chatMessages[0].timeStamp}  */