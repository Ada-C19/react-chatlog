import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';

const App = () => {
  console.log(chatMessages)
  console.log('Hello World')
  console.log(chatMessages[0])
  console.log(chatMessages[0].id)
  console.log(chatMessages[0].sender)
  console.log(chatMessages[0].body)
  console.log(chatMessages[0].timeStamp)

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
