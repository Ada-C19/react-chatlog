import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const[entriesData, setEntriesData] = useState(chatMessages);

  const likeEntry = (id) => {
    setEntriesData((prev)=>{
      return prev.map((entry)=>{
        if(id === entry.id){
          return{
            ...entry,
            liked: !entry.liked
          };}
        else{
          return entry;
        }
        });
    });
  };

  const totalLikes= entriesData.reduce((total, entry)=>{
    if(entry.liked === true){
      total +=1;
    }
    return total;
  }, 0);
   
  return (
    <div id="App">
      <header>
        <h1>Chat between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
        <section>
          <h1 id="heartWidget" className="widget">{totalLikes} ❤️s</h1>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entriesData} onLikeEntry = {likeEntry}></ChatLog> 
      </main>
    </div>
  );
};

export default App;
