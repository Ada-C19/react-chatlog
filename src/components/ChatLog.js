import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    return props.entries.map((chat, index) => {
        return (
            <ChatEntry
                key={index}
                chatData={chat}/>
        )
  });
}
  export default ChatLog;