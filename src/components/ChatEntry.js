import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import messages from '../data/messages.json'
import TimeStamp from './TimeStamp'

const ChatEntry = (props) => {
  console.log(messages)
  return (
    <div className="chat-entry local">{props.entries[0]['id']}
      <h2 className="entry-name">{props.entries[0]['sender']}</h2>
      <section className="entry-bubble">{props.entries[0]['body']}
        <p>Replace with body of ChatEntry </p>
        <p className="entry-time"><TimeStamp time={props.entries[0]['timeStamp']}> </TimeStamp></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
