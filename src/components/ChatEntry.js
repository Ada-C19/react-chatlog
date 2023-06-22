import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, toggleLike}) => {
  const handleLikeClick = () => {
    toggleLike(id);
  };

const localOrRemote = (sender) => {
if (sender === 'Vladimir') {
  return 'chat-entry local';
} else if (sender === 'Estragon') {
  return 'chat-entry remote';
};
};
  return (
    <div className= {localOrRemote(sender)}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">    
        <TimeStamp time ={timeStamp}/>
        </p>
        <button className="like" onClick={handleLikeClick}>  {liked ? '❤️' : '🤍'} </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  toggleLike: PropTypes.func.isRequired,
};

export default ChatEntry;
