import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // probably needs a 'state' and a method to update state
  const [messages, setMessages] = React.useState(chatMessages);
  // const [total, setTotal] = React.useState(0)

  // const redHeart = prevLikes.map (msg => {
  //   return msg.liked == '🤍'? {...msg, liked: '❤️'}: msg
  // })
  // const updatedLikes = prevLikes.map(msg => {
  //   return msg.id == id ? {...msg, liked: msg.liked + 1}: msg
  // })
  const increaseLikes = (id) => {
    console.log('clicked!')
    setMessages(prevMessages => {
      const updatedMessages = prevMessages.map(msg => {
        return msg.id ===  id ? {...msg, liked: !msg.liked} : msg
      })
      return updatedMessages
    })
  }

  // const increaseLikes = (id) => {
  //   setMessages(prevMessages => {
  //     const updatedMessages = prevMessages.map(message => {
  //       return message.id  === id ?  {...message, liked: !message.liked} : message
  //     })
  //     console.log(updatedMessages)
  //     return updatedMessages
  //   }) 
  // }

  const totalLikes = () => {
    // go through the messages and if liked == true, total += 1
    let total = 0;

    for (let message of messages) {
      console.log('message.liked', message.liked)
      if (message.liked === true) {
        total += 1;
      } 
    return total;
    }
  }

  // const totalCharges = () => {
  //   let total = 0
  //   for(let crystal of crystals) {
  //     total += crystal.charges
  //   }
  //   return total
  // };

  // console.log('chat messages in app.js:', chatMessages)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{totalLikes()} ❤️s</p>
        {/* <ChatEntry></ChatEntry> */}
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog chatMessages={messages} increaseLikes={increaseLikes} />
      </main>
    </div>
  );
};

export default App;
