import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chatMessages = props.entries.map((message) => {
    
    return (
      <ChatEntry 
        id={ message.id }
        key={ message.id }
        sender={ message.sender }
        body={ message.body }
        timeStamp={ message.timeStamp }
        liked={ message.liked }
        onUpdateMessage={ props.onUpdateMessage }
      />
    );
});

  return (
    <section>{ chatMessages }</section>
  );
};

export default ChatLog;