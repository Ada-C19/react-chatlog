import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // probably needs a 'state' and a method to update state
  const [likes, setLikes] = React.useState(chatMessages);
  const [total, setTotal] = React.useState(0)

  const increaseLikes = (id) => {
    // console.log('clicked!')
    setLikes(prevLikes => {
      // const redHeart = prevLikes.map (msg => {
      //   return msg.liked == '🤍'? {...msg, liked: '❤️'}: msg
      // })
      // const updatedLikes = prevLikes.map(msg => {
      //   return msg.id == id ? {...msg, liked: msg.liked + 1}: msg
      // })
      const updatedLikes = prevLikes.map(msg => {
        return msg.liked == '🤍'? {...msg, liked: '❤️'}: msg
      })
      return updatedLikes
    })
  }

  const totalLikes = () => {
    // go through the messages and if liked == '❤️', total += 1
  }

  console.log('chat messages in app.js:', chatMessages)
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
        <ChatLog chatMessages = {chatMessages} increaseLikes={increaseLikes} />
      </main>
    </div>
  );
};

export default App;
