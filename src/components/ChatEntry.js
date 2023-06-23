import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ( {sender, body, timeStamp, liked, onClick, id}) => {
  const chatLocal = sender === 'Vladimir' ? 'local' : 'remote';
  const heartIndicator = liked === false ? '🤍' : '❤️';

  const onLikeWithId = () => {onClick(id)};

  return (
    <div className={`chat-entry ${chatLocal}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={onLikeWithId}>{heartIndicator}</button>
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
      onClick: PropTypes.func
    };

export default ChatEntry;
