import {useState} from 'react';
import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  const[liked, setLiked]= useState(props.like);

  const flipLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button onClick={flipLike} className={liked ? "liked" : ""}> {liked ? "❤️" : "🤍"}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.instanceOf(DateTime).isRequired,
    like: PropTypes.bool.isRequired, 
    flipLike: PropTypes.func.isRequired,
};

export default ChatEntry;

