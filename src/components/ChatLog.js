import React from 'react'
import ChatEntry from './ChatEntry'
import './ChatEntry.css'
import './ChatLog.css'


function ChatLog(props) {
    const [timer, setTimer] = React.useState(0)
    React.useEffect(()=> {
      const interval = setInterval(() => {
        setTimer(timer + 1);
    }, 1000);
      return () => clearInterval(interval);
    }, [timer]);

    const chatComponent = props.entries.map((chat, index) => {
    return timer>=index*3 ? ( <section key={chat.id}>
    <ChatEntry updateLike = {props.updateLike} sender={chat.sender} body={chat.body} timeStamp={chat.timeStamp} liked={chat.liked} id={chat.id} ></ChatEntry>
    </section>) : null
  })
  return (
    <section> 
        {chatComponent}
    </section>
    
  )
}

export default ChatLog