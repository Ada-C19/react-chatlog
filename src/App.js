import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {

  const [messages, setMessages] = React.useState(chatMessages);
  let total = 0;
  const totalLikes = () => {
    // let total = 0;
    for (const msg of messages){
      if (msg.liked == true) {
        total += 1;
      }
      }
      return total;
  }

  const increaseLikes = (id) => {
    setMessages(prevMessages => {
      const updatedMessages = prevMessages.map(message => {
        return message.id  === id ?  {...message, liked: !message.liked} : message
      })
      // console.log(updatedMessages)
      return updatedMessages
    }) 
  }

  // const totalLikes = () => {
  //   // go through the messages and if liked == true, total += 1
  //   let total = 0;

  //   for (let message of messages) {
  //     console.log('message.liked', message.liked)
  //     if (message.liked == true) {
  //       total += 1;
  //     } 
  //   return total;
  //   }
  // }



  // console.log('chat messages in app.js:', chatMessages)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{totalLikes()} ❤️s</p>
      
      </header>
      <main>

        <ChatLog chatMessages={messages} increaseLikes={increaseLikes} />
      </main>
    </div>
  );
};

export default App;
