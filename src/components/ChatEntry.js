import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// Declared const w/ 2 values in array [what you name variable, how you update that variable] 
// and set it to useState. The () hold default value.
// Created handleSetLiked() to call setLiked (which is 2nd value in array for useState
// This switches between liked and not liked (bool).
// Note: this liked state is for EACH INDIVIDUAL chat entry.
const ChatEntry = (props) => {
  const [liked, setLiked] = useState(false);

  const handleSetLiked = (updateLikedByOne) => {
    setLiked(!liked);
    console.log(updateLikedByOne)
    if (updateLikedByOne === 'increment') {
      props.setCounter(props.counter+1);
    } else {
      props.setCounter(props.counter-1);
    }
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}/>
        </p>
        {!liked ? (
          <button className="like" onClick={() => handleSetLiked('increment')}>🤍</button>
        ) : (
          <button className="not-like" onClick={() => handleSetLiked('decrement')}>❤️</button>
        )}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  id: PropTypes.number,
  liked: PropTypes.bool,
  counter: PropTypes.number,
  setCounter: PropTypes.func
};

export default ChatEntry;
