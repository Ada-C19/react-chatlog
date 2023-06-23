import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLike }) => {
  return (
    <section className="chat-log">
      <ul>
        {entries.map((entry) => (
          <ChatEntry 
            id={entry.id}
            key={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onLike={onLike}
          />
        ))};
      </ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLike: PropTypes.func,
};

export default ChatLog;