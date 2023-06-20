import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onUpdate }) => {
  const messageColor =
    sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';
  const changeText = liked ? '❤️' : '🤍';

  const LikeButtonClick = () => {
      const updatedMessage = {
        id: id,
        sender: sender,
        body: body,
        timeStamp: timeStamp,
        liked: !liked,
      };
      onUpdate(updatedMessage);
    }

    return (
      <div className={messageColor}>
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">
            <TimeStamp time={timeStamp} />
          </p>
          <button className="like" onClick={LikeButtonClick}>
            {changeText}
          </button>
        </section>
      </div>
    );
  };

ChatEntry.propTypes = {
    id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  liked: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired
  };

export default ChatEntry;

