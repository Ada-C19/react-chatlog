import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const [likes, setLikes] = useState(props.likes)

  const toggleLikes = () => {
    setLikes((prevLiked) => !prevLiked);
    props.updateLikes(!likes);
  };

  const bubbleClass = props.isRemote ? 'chat-entry remote' : 'chat-entry local';

  return (
    <div className="{bubbleClass}">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={toggleLikes}>{likes ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  likes: PropTypes.bool.isRequired,
  updateLikes: PropTypes.func.isRequired,
  isRemote: PropTypes.bool.isRequired,
};

export default ChatEntry;
