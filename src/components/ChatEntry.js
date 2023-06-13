import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import data from '../data/messages.json';

const ChatEntry = (props) => {

  const { sender, body } = props;

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{ sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">Replace with TimeStamp component</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
