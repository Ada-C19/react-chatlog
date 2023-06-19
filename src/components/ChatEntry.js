import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onLike,
  color,
  firstSender,
}) => {
  const localRemote = firstSender === true ? 'local' : 'remote';

  const onLikeButtonClick = () => {
    const newMessage = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
      color: color ? color : '',
    };
    onLike(newMessage);
  };

  const likedIcon = liked ? '❤️' : '🤍';

  return (
    <div className={`chat-entry ${localRemote}`}>
      <span className='sender'>
        <span className='icon'></span>
        <h2 className='entry-name'>{sender}</h2>
        <span className='icon'></span>
      </span>
      <section className='entry-bubble'>
        <p className={color}>{body}</p>
        <p className={`entry-time`}>
          <TimeStamp time={timeStamp} />
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
  onLike: PropTypes.func.isRequired,
  color: PropTypes.string,
  firstSender: PropTypes.bool.isRequired,
};

export default ChatEntry;
