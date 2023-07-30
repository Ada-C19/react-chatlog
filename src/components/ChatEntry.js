import React from 'react';
// import TimeStamp from './TimeStamp';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const heart = props.liked ?  '❤️' : '🤍';

  const handleLikeButton = () => {
    props.updateLike(props.id);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp} years ago</p>
        <button className="like"  onClick={handleLikeButton} >{heart} </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLike: PropTypes.func.isRequired,
};

export default ChatEntry;
