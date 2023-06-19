import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';



const ChatEntry = (props) => {
  console.log(`inside chatEntry`, props)
  const first = props.entry[0];
  console.log('this is the time',first.TimeStamp);
 
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{first.sender}</h2>
      <section className="entry-bubble">
        <p>{first.body}</p>
        <p className="entry-time">time</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  //timeStamp: PropTypes.string.isRequired,
  //liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
