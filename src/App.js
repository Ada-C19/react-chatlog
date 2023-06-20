import './App.css';
import chatMessages from './data/messages.json';
//import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


//import TimeStamp from './components/TimeStamp';

const App = () => {
  const likedMessagesCount = chatMessages.filter(message => message.liked).length;
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon </h1>
        <h3 >blabla likedddd={likedMessagesCount}</h3>
      </header>
      <main>

      <ChatLog entries={chatMessages} />

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
