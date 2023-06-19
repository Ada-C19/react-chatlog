import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

import { useState } from 'react';

const ChatEntry = ({id, sender, body, timeStamp, updateLike}) => {
  const [changeHeart, setChangeHeart] = useState('🤍');
  const colorHeart = () => (changeHeart === '🤍' ? setChangeHeart('❤️') : setChangeHeart('🤍'));

  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => {
            updateLike({id, liked: !changeHeart});
            colorHeart();
          }}
          >{changeHeart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  updateLike: PropTypes.func
};

export default ChatEntry;
