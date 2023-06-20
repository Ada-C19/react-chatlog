import React from 'react';
import PropTypes from 'prop-types';
import ChatLog from '../ChatLog/ChatLog';
import './ChatEntry.css';

const ChatEntry = props => {
  const getChatLogJSX = chats => {
    return chats.map(chat => (
      <ChatLog
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
      />
    ));
  };

  return (
    <section className='chat-entry local'>
      {getChatLogJSX(props.chatEntries)}
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

export default ChatEntry;
