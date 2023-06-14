import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';



const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{ props.senderName }</h2>
      <section className="entry-bubble">
        <p>{ props.messageBody }</p>
        <p className="entry-time">Replace with TimeStamp component</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  // id: PropTypes.number,
  senderName: PropTypes.string,
  messageBody: PropTypes.string
  // liked: PropTypes.bool
};

export default ChatEntry;
