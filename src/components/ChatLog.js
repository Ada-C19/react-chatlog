import React from 'react'
import './ChatLog.css'
import ChatEntry from './ChatEntry'

const ChatLog = ({ entries, likeMessage }) => {
    const entryComponents = entries.map(entry => {
        return (
            <ChatEntry 
            id= {entry.id}
            sender= {entry.sender}
            body= {entry.body}
            timeStamp= {entry.timeStamp}
            liked= {entry.liked}
            likeMessage= {likeMessage} 
            />
        )
    })

    return (
    <div>ChatLog
        <section>{entryComponents}</section>
    </div>
    )
}

export default ChatLog