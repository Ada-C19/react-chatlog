import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const heartType = props.liked ? '❤️' : '🤍';
  const chatEntryClass = props.sender === 'Vladimir' ? 'local' : 'remote';
  // const colorClass = chatEntryClass === 'local' ? localColor : remoteColor;

  return (
    <div className={`chat-entry ${chatEntryClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        {/* <button className="like">🤍</button> */}
        <button onClick={() => props.onUpdateChatData(props.id)} className="like">
          {heartType}
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
  liked: PropTypes.bool,
  updateChatData: PropTypes.func
};

export default ChatEntry;
