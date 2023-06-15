import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const onHeartClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    };
    props.onUpdate(updatedMessage);
  };

  const heart = (props.liked === true) ? '❤️' : '🤍';
  const className = (props.id % 2 === 0) ? 'chat-entry remote' : 'chat-entry local';
  
  return (
    <div className={className}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp className="entry-time" time={props.timeStamp} />
        <button className="like" onClick={onHeartClick}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;
