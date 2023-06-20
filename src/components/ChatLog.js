import ChatEntry from './ChatEntry.js';
import React from 'react';
import PropTypes from 'prop-types';

const ChatLog = ({entries, likeMessage}) => {
    const chatEntries= (entries) => {
        return entries.map((message) => {
            return(
                <ChatEntry
                    key={message.id}
                    id={message.id}
                    sender={message.sender}
                    body={message.body}
                    timeStamp={message.timeStamp}
                    liked={message.liked}
                    likeMessage={likeMessage}
                />

            );
        });
    };
        return <div className='chat-log'>{chatEntries(entries)} </div>;
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
      })
    ).isRequired,
    likeMessage: PropTypes.func.isRequired,
  };
  

export default ChatLog;