import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const senderClass = 
  props.sender === props.localSender
  ? 'chat-entry local'
  : 'chat-entry remote';
  const color =
  props.sender === props.localSender ? props.colorLocal : props.colorRemote;

  const heart = props.liked ? '❤️' : '🤍';

  return (
    <div key={props.id} className={senderClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{props.body} </p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}/>
        </p>
        <button
          className="like"
          onClick={() => {
            props.onUpdateLike(props.id);
            props.onHeartClicks(props.liked);
          }}
        >
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  localSender: PropTypes.string.isRequired,
};

export default ChatEntry;