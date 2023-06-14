import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const ChatEntry = (props) => {
  const { sender, body, timeStamp } = props;
  const timeAgo = formatDistanceToNow(new Date(timeStamp), { addSuffix: true });


  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeAgo}</p>
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
