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
    [chatMessages[0].sender]: 'black',
    [chatMessages[1].sender]: 'black'
  });

  const handleSenderColor = (sender, color) => {
    setSenderColors((prevColors) => ({
      ...prevColors,
      [sender]: color
    }));
    
    //I updated the data to set the text color dinamically
    const updatedEntriesData = entriesData.map((entry) => {
      if (entry.sender === sender) {
        return {
          ...entry,
          color: color
        };
      } else {
        return entry;
      }
    });
  
    setEntriesData(updatedEntriesData);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between{' '}
          <span className={senderColors[chatMessages[0].sender]}>{chatMessages[0].sender}</span>{' '}
          and{' '}
          <span className={senderColors[chatMessages[1].sender]}>{chatMessages[1].sender}</span>
        </h1>
        <section>
          <div  className="user">
            <h3 className={senderColors[chatMessages[0].sender]}>{chatMessages[0].sender}</h3>
            <ColorChoice senderColors={senderColors} onSenderColors={handleSenderColor} sender={chatMessages[0].sender}/>
          </div>
          <h1 id="heartWidget" className="widget">{totalLikes} ❤️s</h1>
          <div className="user">
            <h3 className={senderColors[chatMessages[1].sender]}>{chatMessages[1].sender}</h3>
            <ColorChoice senderColors={senderColors} onSenderColors={handleSenderColor} sender={chatMessages[1].sender} />
          </div>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entriesData} onLikeEntry = {likeEntry} senderColors={senderColors}></ChatLog> 
      </main>
    </div>
  );
};

export default App;
