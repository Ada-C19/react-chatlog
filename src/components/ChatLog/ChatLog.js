import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from '../ChatEntry/ChatEntry';
import './ChatLog.css';

const ChatLog = props => {
  const getChatLogJSX = logs => {
    return logs.map(chat => (
      <ChatEntry
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
      />
    ));
  };

  return (
    <section className='chat-entry local'>
      {getChatLogJSX(props.entries)}
    </section>
    /* <h2 className='entry-name'>Replace with name of sender</h2>
    <section className='entry-bubble'>
      <p>Replace with body of ChatEntry</p>
      <p className='entry-time'>Replace with TimeStamp component</p>
      <button className='like'>🤍</button>
    </section> */
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatLog;
