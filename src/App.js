import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import {useState} from 'react'

const App = () => {
  
  const[textMessage, setTextMessage] = useState(chatMessages)
  const likedMessage = (id) => {
  const isliked = textMessage.map((text) =>{
    if (text.id === id){
      return {...text, liked: !text.liked}
    } else{
      return text;
    }
  })
    setTextMessage(isliked);
  }

  const totalLikes = (data)=> {
    const newList = data.filter((ele)=>ele.liked===true)
    return newList.length
  }

  const likedCount = totalLikes(textMessage)  
  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
      </header>
      <main>
        <h1>{likedCount} ❤️s</h1>
        {/* <ChatEntry id = 1 timeStamp = "2018-05-29T22:49:06+00:00" body = "why are you arguing with me" 
        sender = "Vladimir" liked = false/> */}
        <ChatLog entries={textMessage} likedFunc = {likedMessage}/>
        <h3>Liked Messages: {likedCount}</h3>
      </main>
    </div>
  );
};

export default App;
