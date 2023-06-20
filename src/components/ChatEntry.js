import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  const yearsSince = ( 2023 - Number(props.timeStamp.slice(0,4)) )
  const likeDisplay = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{ yearsSince } years ago</p>
        <button className="like" onClick={() => props.updateLikeStatus(props.id)}>{likeDisplay}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  "id": Number.isRequired,
  "sender": String.isRequired,
  "body": String.isRequired,
  "timeStamp": DateTime.isRequired,
  "liked": Boolean.isRequired,
  updateLikeStatus: PropTypes.func.isRequired
};

export default ChatEntry;
