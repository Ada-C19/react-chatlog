import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id,sender,body,liked,timeStamp,toggleLiked}) => {
  const updateLiked = () => {
    toggleLiked(id)
  }
  
  const bottonClass = liked ? 'liked' : '';
  
  const localOrRemote = sender==='Vladimir' ? 'local' : 'remote';

  const likeOrNot = liked ? '❤️' : '♡';

  return (
    <div className={`chat-entry ${localOrRemote}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className={`like ${bottonClass}`} onClick={updateLiked}>{likeOrNot}</button>
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
  toggleLiked: PropTypes.func.isRequired,
};

export default ChatEntry;
