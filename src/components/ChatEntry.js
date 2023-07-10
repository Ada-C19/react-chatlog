import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = ({id, sender, body, timeStamp, liked, onLikeUpdate}) => {

  const onLikeBtnClick = () => {
    const updatedEntry = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked
    }
    onLikeUpdate(updatedEntry);
  }

  const heartStatus = liked ? '❤️' : '🤍';
  const remoteStatus = sender === 'Estragon' ? 'remote' : 'local';

  return (
    <div className={`chat-entry ${remoteStatus}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={onLikeBtnClick}>{heartStatus}</button>
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
  liked: PropTypes.bool.isRequired,
  onLikeUpdate: PropTypes.func
};

export default ChatEntry;