import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  const localRemote = props.id % 2 == 0 ? 'remote' : 'local';

  const onLikeButtonClick = () => {
    const newMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onLike(newMessage);
  };

  const likedIcon = props.liked ? '❤️' : '🤍';

  return (
    <div className={`chat-entry ${localRemote}`}>
      <h2 className='entry-name'>{props.sender}</h2>
      <section className='entry-bubble'>
        <p>{props.body}</p>
        <p className='entry-time'>
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className='like' onClick={onLikeButtonClick}>
          {likedIcon}
        </button>
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
};

export default ChatEntry;
