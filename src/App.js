import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const chatData = [
  //   {
  //     id: 1,
  //     sender:'Vladimir',
  //     body:'why are you arguing with me',
  //     timeStamp:'2018-05-29T22:49:06+00:00',
  //     liked: false,
  //   }
  // ];

  // const entries = data;

  // const chatEntryComponents = entries.map(chatMsg => {
  //   return (
  //     <ul>
  //       <ChatEntry name={chatMsg.sender} body={chatMsg.body} timeStamp={chatMsg.timeStamp}></ChatEntry>
  //     </ul>

  //   )
  // });

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ul>
          {/* {chatEntryComponents} */}
          <ChatLog entries={chatMessages}></ChatLog>
        </ul>
      </main>
    </div>
  );
};

export default App;
