// src/components/ChatEntry.js
import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const [liked, setLiked] = useState(props.liked);

  const toggleLiked = () => {
    const newLikedStatus = !liked;
    setLiked(newLikedStatus);
    // Pass the new liked status to the onLike function
    props.onLike(newLikedStatus);
  }

  return (
    <div className={`chat-entry ${props.sender === 'Estragon' ? 'local' : 'remote'}`}>

      <h2 className="entry-name">{props.sender}</h2>

      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={toggleLiked}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>

    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired
};

export default ChatEntry;
