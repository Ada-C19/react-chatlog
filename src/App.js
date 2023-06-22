import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [messages, setMessages] = React.useState(chatMessages);

  const likeMessage = (id) => {
    setMessages(
      messages.map((message) => (message.id === id ? {
        ...message,
        liked: !message.liked
      } : message))
    );
  };

  const [colorChoice, setColor] = React.useState({
    [messages[0].sender]: 'red',
    [messages[1].sender]: 'green'
  })

  const setColorChoice = (sender, chosenColor) => {
    console.log(sender, chosenColor)
    setColor(prevColor => {
      return {
        ...prevColor,
        [sender]: chosenColor
      }
    })
  }

  console.log(colorChoice)

  let totalHearts = 0;

  for (let message of messages) {
    if (message.liked) {
      totalHearts++
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between {messages[0].sender} and {messages[1].sender}</h1>
        <section>
          <span>
            <ColorChoice sender={messages[0].sender} setColorCallback={setColorChoice}/>
          </span>
          <span id="heartWidget">
            <p>{totalHearts} ❤️s</p>
          </span>
          <span>
            <ColorChoice sender={messages[1].sender} setColorCallback={setColorChoice}/>
          </span>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} colorChoice={colorChoice} likeMessage={likeMessage} />
      </main>
    </div>
  );
};

export default App;
