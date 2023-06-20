import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, updateLike, color}) => {

  const likedButtonContent = liked ? '❤️' : '🤍';
  const localOrRemote = (sender === 'Vladimir') ? 'chat-entry local' : 'chat-entry remote';
  

  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
          <p className="entry-time">
              <TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={() => updateLike(id, !liked)}>{likedButtonContent}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  "id": PropTypes.number,
  "sender": PropTypes.string.isRequired, 
  "body": PropTypes.string.isRequired, 
  "timeStamp": PropTypes.string.isRequired,
  "liked": PropTypes.bool.isRequired,
  updateLike: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default ChatEntry;

