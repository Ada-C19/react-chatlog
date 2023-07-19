import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  const messageClass = `chat-entry ${props.sender === 'Vladimir' ? 'local' : 'remote'}`;
  
  return (
<div className={messageClass} key={props.id}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><Timestamp time={props.timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
};


export default ChatEntry;
