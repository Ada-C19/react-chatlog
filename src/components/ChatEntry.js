import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  const buttonText =
    props.liked ? '🏳️‍⚧️' : '🤍';
  
  let entryClass = 'chat-entry local'  
  
  if (props.sender !== 'Lichen') {
    entryClass = 'chat-entry remote';
  }

  return (
    <div className={entryClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like" onClick={()=> props.toggleLike(props.id)}>{buttonText}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
