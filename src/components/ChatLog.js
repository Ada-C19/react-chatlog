import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    return props.entries.map((chat, index) => {
        return (
            <ChatEntry
                key={index}
                sender={chat.sender}
                body={chat.body}
                timeStamp={chat.timeStamp}
                liked={chat.liked}
                chatData={chat}
                toggleLike={props.toggleLike}/>
        )
  });
}
  export default ChatLog;