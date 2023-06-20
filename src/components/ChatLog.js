import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

// renderChatLog returns a new array of msgs in JSX
// you can replace entries with props & remove {}, AND add props. in front of entries.map
const ChatLog = ({ entries }) => {
  return (
    entries.map((entry) => {
      return (
        <div className='chat-log'>
          <ChatEntry 
            id = { entry.id }
            liked = { entry.liked }
            sender = { entry.sender }
            body = { entry.body }
            timeStamp= { entry.timeStamp }
            key={ entry.id }
          />
        </div>
      )
    })
  )
}

export default ChatLog;
