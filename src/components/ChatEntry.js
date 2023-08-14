
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = (props) => {

  const [liked, setLiked] = useState(props.liked);

  const toggleLiked = () => {
    const newLikedStatus = !liked;
    setLiked(newLikedStatus);
    props.onLike && props.onLike(newLikedStatus); // Safeguard in case onLike is not provided
  }

  return (
    <div className="chat-entry">
      <p className="entry-name">{props.sender}</p>
      <section className="entry-bubble">
        <p className="entry-body">{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={toggleLiked}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired
};

export default ChatEntry;