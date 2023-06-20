import React from 'react'
import ChatEntry from './ChatEntry'

function ChatLog(props) {
    const chatComponent = props.entries.map((chat) => {
    return ( <section key={chat.id}>
    <ChatEntry sender={chat.sender} body={chat.body} time={chat.timeStamp} liked={chat.liked} key={chat.id} ></ChatEntry>
    </section>)
  })
  return (
    <section> 
        <div>ChatLog</div>  
        {chatComponent}
    </section>
    
  )
}

export default ChatLog