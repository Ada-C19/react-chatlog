import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [heart, setHeart] = useState('🤍');

  const onLikeButtonClick = () => {
    const likedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdateLike(likedMessage.id);
    props.onCountLikes(likedMessage.liked);

    if (heart === '🤍') {
      return setHeart('❤️');
    } else {
      return setHeart('🤍');
    }
  };

  const senderClass = (props.id % 2) ? 'chat-entry remote' : 'chat-entry local';

  return (
    <div className={senderClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={onLikeButtonClick}>{heart}</button>
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
  onUpdateLike: PropTypes.func,
  onCountLikes: PropTypes.func,
};

export default ChatEntry;
