import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const { id, sender, body, timeStamp, liked, onToggleLike, names, textColor } = props
  const heartDisplay = liked ? '❤️' : '🤍'
  const textClass = sender === (names && names[0]) ? 'local' : 'remote';
  const textColorClass =
    sender === (names && names[0]) ? textColor[names[0]] : (names && textColor[names[1]]);

  return (
    <div className={`chat-entry ${textClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={textColorClass}>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button onClick={() => onToggleLike(id)} className="like">
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
