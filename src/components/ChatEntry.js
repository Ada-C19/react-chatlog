import React, { useState } from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ( { sender, body, timeStamp, likeMessage, unlikeMessage } ) => {
  const [hearted, setHearted] = useState(false);

  const toggleHeart = () => {
    setHearted(hearted => !hearted);
    hearted ? unlikeMessage(): likeMessage();
  };

  const heartedIcon = hearted ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
        </p>
        <button className="like" onClick={() => toggleHeart()}>
          {heartedIcon}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.number.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;
