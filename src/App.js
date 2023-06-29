import React, {useState} from 'react';
import './App.css';
// import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messagesJSON from './data/messages.json'

const App = () => {
  const [messageData, setMessageData] = useState(messagesJSON);

  // const updateMessageData = updatedMessage => {
  //   console.log('shout out to updateMessageData');
  //   const tempMessages = messageData.map(message => {
  //     if (message.id === updatedMessage.id) {
  //       return updatedMessage;
  //     } else {
  //       return message;
  //     }
  //   });
  const toggleLiked = (id) => {
    console.log('im toggling likes ova heare');
    const messages = messageData.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      };

      return message;
    });

    setMessageData(messages);
  }


  //   setMessageData(tempMessages)
  // };

  return (
    
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messagesJSON} onLikeMessage={toggleLiked}/>
      </main>
    </div>
  );
};

export default App;
