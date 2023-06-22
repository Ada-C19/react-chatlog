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
      time: props.time,
      liked: !props.liked,
    };
    props.updateChatData(updatedMessage);
  };

  const toggleHeart = props.liked ? `❤️` : `🤍`;

  return (
    <div className="chat-entry local"> 
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.time} /></p>
        <button onClick={onHeartClick} className="like">{toggleHeart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateChatData: PropTypes.func.isRequired,
};

export default ChatEntry;
