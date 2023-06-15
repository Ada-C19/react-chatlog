import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
// import chatMessages from '../data/messages.json'
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp}) => {
  // const firstElement = chatMessages[0];
  // console.log(firstElement);
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
