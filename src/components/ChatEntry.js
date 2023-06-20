import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';




const ChatEntry = (props) => {

  const [isLiked, setIsLiked] = useState(props.liked);

  const handleLikeClick = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  const messageBubble = props.id % 2 !== 0 ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${messageBubble}`}>
      <h2 className="entry-name">{ props.sender }</h2>
      <section className="entry-bubble">
        <p>{ props.body }</p>
        <p className="entry-time">
          <TimeStamp time={props.TimeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={handleLikeClick}>{isLiked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;