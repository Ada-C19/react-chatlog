import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (singleEntry) => {
  // const singleEntry = props.props
  console.log('ChatEntry');
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{singleEntry.sender}</h2>
      <section className="entry-bubble">
        <p>{singleEntry.body}</p>
        <p className="entry-time">{singleEntry.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
