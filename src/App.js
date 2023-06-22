import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

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

  const [senderColors, setSenderColors] = useState({
    [chatMessages[0].sender]: 'red',
    [chatMessages[1].sender]: 'blue'
  });

  const setSenderColor = (sender, color) => {
    setSenderColors((prevColors) => ({
      ...prevColors,
      [sender]: color
    }));
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between{' '}
          <span style={{ color: senderColors.Vladimir }}>{chatMessages[0].sender}</span>{' '}
          and{' '}
          <span style={{ color: senderColors.Estragon }}>{chatMessages[1].sender}</span>
        </h1>
        <section>
          <div  className="user">
            <h3 style={{ color: senderColors[chatMessages[0].sender] }}>{chatMessages[0].sender}</h3>
            <ColorChoice setColorCallback={(color) => setSenderColor(chatMessages[0].sender, color)} />
          </div>
          <h1 id="heartWidget" className="widget">{totalLikes} ❤️s</h1>
          <div className="user">
            <h3 style={{ color: senderColors[chatMessages[1].sender] }}>{chatMessages[1].sender}</h3>
            <ColorChoice senderColors={entriesData} />
          </div>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entriesData} onLikeEntry = {likeEntry} senderColors= {senderColors}></ChatLog> 
      </main>
    </div>
  );
};

export default App;
