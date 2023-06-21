import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({chatData}) => {
  console.log(chatData)
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{chatData.sender}</h2>
      <section className="entry-bubble">
        <p>{chatData.body}</p>
        <p className="entry-time">{chatData.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  time: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};

export default ChatEntry;
