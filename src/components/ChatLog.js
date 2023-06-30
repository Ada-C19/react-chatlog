import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({entries, onLikeMessage}) => {
  const chatComponents = entries.map((message) => {
    return (
      <div key={message.id} >
        <ChatEntry 
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          isLiked={message.liked}
          onLikeMessage={onLikeMessage}
        />
      </div>
    );
  });

  return (<section className='chat-log'>
    {chatComponents}
  </section>)
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
  })),
  onLikeMessage: PropTypes.func.isRequired,
};

export default ChatLog;