import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from '../ChatEntry/ChatEntry';
import './ChatLog.css';

const ChatLog = props => {
  const getChatLogJSX = logs => {
    return logs.map(chat => (
      <ChatEntry
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        updateLike={props.updateLike}
      />
    ));
  };

  return (
    <section className='chat-entry local'>
      {getChatLogJSX(props.entries)}
    </section>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatLog;
