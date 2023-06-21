import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const chatComponents = props.entries.map(entry => {
    return (
      <ChatEntry 
      id={entry.id}  
      sender={entry.sender}
      body={entry.body}
      liked={entry.liked}
      time={entry.timeStamp}/>
        );
    });
    return (
        <section>
          {chatComponents}
        </section>
    );
}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    }))
};

export default ChatLog;