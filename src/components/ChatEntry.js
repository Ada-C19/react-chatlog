import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'
import { useState } from 'react';


const ChatEntry = (props) => {
  const [like, setLike] = useState(false);

  const likeStatus = () => {
    console.log("we're inside heart");
    setLike(!like);
  };

  const heartColor = like ? '💝'  : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">{props.body}
        <p className="entry-time"><TimeStamp time={props.timeStamp}> </TimeStamp></p>
        <button className="like" onClick={likeStatus}>{heartColor} </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;
