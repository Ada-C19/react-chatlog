import React from 'react'
import ChatEntry from './ChatEntry'
import './ChatEntry.css'
import './ChatLog.css'


function ChatLog(props) {
    const chatComponent = props.entries.map((chat) => {
    return ( <section key={chat.id}>
    <ChatEntry updateLike = {props.updateLike} sender={chat.sender} body={chat.body} timeStamp={chat.timeStamp} liked={chat.liked} id={chat.id} ></ChatEntry>
    </section>)
  })
  return (
    <section> 
        {chatComponent}
    </section>
    
  )
}

export default ChatLog