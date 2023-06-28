import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json'
// import './components/ChatLog.css';

// const testMessage = {
//   id: 1,
//   sender:'Vladimir',
//   body:'why are you arguing with me',
//   timeStamp:'2018-05-29T22:49:06+00:00',
//   liked: false
// };

const messageComponents = {
  
}

const App = () => {
  const [chatMessages, setChatMessages] = useState(chatMessages)
  const likeMessage = (id) => {
    setChatMessages((prev) => {
        return prev.map((message) => {
          if (id === message.id) {
            return {
              ...message,
              liked: !message.liked,
            };
          } else {
            return message;
          }
        })
    });
  };

  return (
    
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={messages} onLikeMessage={likeMessage} />
        {/* <ChatEntry sender={testMessage.sender} body={testMessage.body} timeStamp={testMessage.timeStamp} /> */}
      </main>
    </div>
  );
};

export default App;
