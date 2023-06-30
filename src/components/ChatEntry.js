import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import LikeButton from './LikeButton';

const setMessageLocation = (userName) => {

  if (userName === 'Vladimir') {
    return 'chat-entry local'; 
  } else if (userName === 'Estragon') {
    return 'chat-entry remote'; 
  };

}

const ChatEntry = ({id, sender, body, timeStamp, isLiked, onLikeMessage}) => {

  const updateLike = () => {
    onLikeMessage(id);
  };

  const senderLocation = setMessageLocation(sender);

  return (
    <div className={senderLocation}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>

        <LikeButton heartCondition={isLiked} updateLike={updateLike}/>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onLikeMessage: PropTypes.func.isRequired,
};

export default ChatEntry;

