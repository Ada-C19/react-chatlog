import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [likedCount, setLikedCount] = useState(0);

  const handleLikeClick = (liked) => {
    setLikedCount((prevCount) => prevCount + (liked ? 1 : -1));
  };

  const renderLikedCount = () => {
    return `${likedCount} ❤️${likedCount !== 1 ? 's' : ''}`;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <div className="liked-count">{renderLikedCount()}</div>
      </header>
      <main>
        <ChatLog entries={chatMessages} onLikeClick={handleLikeClick} />
      </main>
    </div>
  );
};

export default App;


// const App = () => {
//   return (
//     <div id="App">
//       <header>
//         <h1>Application title</h1>
//       </header>
//       <main>
//         {/* Wave 01: Render one ChatEntry component
//         Wave 02: Render ChatLog component */}
//       </main>
//     </div>
//   );
// };

// export default App;
