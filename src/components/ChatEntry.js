import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const heartDisplay = props.liked ? '❤️' : '🤍'
  const textClass = props.sender === (props.names && props.names[0]) ? 'local' : 'remote';
  const textColor =
    props.sender === (props.names && props.names[0]) ? props.textColor[props.names[0]] : props.names && props.textColor[props.names[1]]

  return (
    <div className={`chat-entry ${textClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={textColor}>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button onClick={() => props.onToggleLike(props.id)} className="like">
          {heartDisplay}
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
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatEntry;
