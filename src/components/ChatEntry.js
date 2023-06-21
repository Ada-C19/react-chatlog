import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id,sender, body, timeStamp, liked, increaseLikes}) => {
  // const firstElement = chatMessages[0];
  // console.log(firstElement);
  // console.log(id)
  // console.log(sender)
  // console.log(body)
  // console.log(timeStamp)
  // console.log(liked)

  const sendReceive = sender === 'Estragon' ? 'remote': 'local'
  const heart = liked ? '❤️' : '🤍'

  return (
    <div className={`chat-entry ${sendReceive}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={() => increaseLikes(id)}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
