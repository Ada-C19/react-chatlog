import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import messages from '../data/messages.json'

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">{messages[0]['id']}
      <h2 className="entry-name">{messages[0]['sender']}</h2>
      <section className="entry-bubble">{messages[0]['body']}
        <p>Replace with body of ChatEntry </p>
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
