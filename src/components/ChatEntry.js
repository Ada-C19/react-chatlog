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
    props.onHandleLikeUpdate(likedMessage.id);
    props.onUpdateLikeCount(likedMessage.liked);

    if (heart === '🤍') {
      return setHeart('❤️');
    } else {
      return setHeart('🤍');
    }
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp 
            time={props.timeStamp} 
          />
        </p>
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
  onHandleLikeUpdate: PropTypes,
  onUpdateLikeCount: PropTypes.func,
};

export default ChatEntry;