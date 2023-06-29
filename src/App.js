import React, {useState} from 'react';
import './App.css';
// import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json'

const App = () => {
  const [chatData, setChatData] = useState(messages);

  const printLike = (id) => {
    console.log('shout out to hearts');
    // setChatData((prev) => {
    //   return prev.map((message) => {
    //     if (id === message.id) {
    //       return {
    //         ...message,
    //         likeCount: true,
    //       };
    //     } else {
    //       return message;
    //     }
    //   })
    // })
  };


  return (
    
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages} onLikeMessage={() => printLike()}/>
      </main>
    </div>
  );
};

export default App;
