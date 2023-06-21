import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // probably needs a 'state' and a method to update state
  const [messages, setMessages] = React.useState(chatMessages);
  const [total, setTotal] = React.useState(0)

  const increaseLikes = (id) => {
    console.log('clicked!')
    setMessages(prevMessages => {
      // const redHeart = prevLikes.map (msg => {
      //   return msg.liked == '🤍'? {...msg, liked: '❤️'}: msg
      // })
      // const updatedLikes = prevLikes.map(msg => {
      //   return msg.id == id ? {...msg, liked: msg.liked + 1}: msg
      // })
      const updatedMessages = prevMessages.map(msg => {
        // if (msg.id == id)
        // {return msg.liked = !msg.liked}
        return msg.id == id ? {...msg, liked: !msg.liked} : msg
      })
      return updatedMessages
    })
  }

  const totalLikes = () => {
    // go through the messages and if liked == true, total += 1
  }

  console.log('chat messages in app.js:', chatMessages)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{total} ❤️s</p>
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
