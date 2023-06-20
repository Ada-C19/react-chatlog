import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

// Wave 01
// const App = () => {
//   const title = 'Some title that we need to come up with';

//   const messageComponents = [chatMessages[0]].map(message => {
//     return (
//       <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}></ChatEntry>
//     );
//   });

//   return (
//     <div id="App">
//       <header>
//         <h1>{title}</h1>
//         <p>Total likes:  ❤️s</p>
//       </header>
//       <main>
//         {/* Wave 01: Render one ChatEntry component
//         Wave 02: Render ChatLog component */}
//         {messageComponents}
//       </main>
//     </div>
//   );
// };

// export default App;


// Wave 02
const App = () => {
  const title = 'Some title that we need to come up with';

  return (
    <div id="App">
      <header>
        <h1>{title}</h1>
        <p>Total likes: 0 ❤️s</p>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
