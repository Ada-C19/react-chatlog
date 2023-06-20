import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({chatData}) => {
  console.log(chatData.sender)
    return (
    <div className='chat-entry local'>
      <h2 className='entry-name'>{chatData.sender}</h2>
      <section className='entry-bubble'>
        <p>{chatData.body}</p>
        <p className='entry-time'>
          <TimeStamp time={chatData.timeStamp} />
        </p>
        <button className='like'>🤍</button>
      </section>
    </div>
    )
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string
};

export default ChatEntry;
