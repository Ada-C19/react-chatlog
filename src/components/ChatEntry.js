import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({chatData, sender, body, timeStamp, liked, toggleLike}) => {
    return (
    <div className='chat-entry local'>
      <span className='entry-name'>{sender}</span>
      <section className='entry-bubble'>
        <p>{body}</p>
        <p className='entry-time'>
          <TimeStamp time={timeStamp} />
        </p>
        <button 
        onClick={() => toggleLike(chatData.id)}
        className='like'>{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
    )
};

// ChatEntry.propTypes = {
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string
// };

export default ChatEntry;
