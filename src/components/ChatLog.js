import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js'

const ChatLog = (props) => {
    const chatComponents = props.entries.map((entry) => {
        return (
            <section key={entry.id}>
                <ChatEntry 
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    onUpdate={props.onUpdateEntry}
                    local={props.local}
                    remote={props.remote}
                    />
            </section>
        )
    })

    return (
        <div className='chat-log'>
            {chatComponents}
        </div>
        
    );
}

export default ChatLog;