import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const { sender, body, timeStamp } = props;
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className='chat-entry local'>
      <h2 className='entry-name'>{sender}</h2>
      <section className='entry-bubble'>
        <p>{body}</p>
        <p className='entry-time'>
          <TimeStamp time={timeStamp} />
        </p>
        <button className='like' onClick={handleLikeClick}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  //liked: PropTypes.bool.isRequired,
};

export default ChatEntry;