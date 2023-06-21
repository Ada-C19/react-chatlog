import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const [isLiked, setIsLiked] = useState(liked);
  return (
    <div id="App">
      <header>
        <h1>Waiting for Chat GDT</h1>
        <section> 
          <h2>1 ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog entries ={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
