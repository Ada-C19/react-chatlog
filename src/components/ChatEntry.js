import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = ({props}) => {
  console.log(props)
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    "id": Number.isRequired,
    "sender":String.isRequired,
    "body":String.isRequired,
    "timeStamp":DateTime.isRequired,
    "liked": Boolean.isRequired, 
};

export default ChatEntry;

