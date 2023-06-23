import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp.js';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const timeEntry=props.timeStamp
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        {/* <p className="entry-time">Replace with TimeStamp component</p> */}
        <p className="entry-time"><TimeStamp time={timeEntry}></TimeStamp></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
