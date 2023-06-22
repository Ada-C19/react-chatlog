import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let heart = props.liked ? '❤️' : '🤍';

  const handleLikes = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    };

    props.updateEntryData(updatedEntry);
    props.toggleLikes(updatedEntry);
  };

  const userStatus = props.sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${userStatus}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={handleLikes}>{heart}</button>
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
  updateEntryData: PropTypes.func.isRequired,
  likesCount: PropTypes.number.isRequired,
  toggleLikes: PropTypes.func.isRequired
};

export default ChatEntry;
