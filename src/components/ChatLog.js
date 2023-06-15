import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((chatMsg, index) => {
        return (
            <li key={index}>
                <ChatEntry 
                id={chatMsg.id}
                sender={chatMsg.sender} 
                body={chatMsg.body} 
                timeStamp={chatMsg.timeStamp}
                isLiked={chatMsg.liked}
                onUpdate={props.onUpdateChat}
                ></ChatEntry>
            </li>
        )
    });

    return (
        <div className="chat-log">
            <ul>
                {chatEntryComponents}
            </ul>
        </div>
    );
}

export default ChatLog;