import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
// import TimeStamp from './TimeStamp';
import chatMessages from '../data/messages.json';

const ChatEntry = (props) => {
  
  const oneMessage = chatMessages[0];
  console.log(oneMessage);
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{oneMessage.sender}</h2>
      <section className="entry-bubble">
        <p>{oneMessage.body}</p>
        <p className="entry-time">{oneMessage.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
