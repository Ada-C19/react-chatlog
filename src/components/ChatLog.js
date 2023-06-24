import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, color, onLike }) => {
  const chatComponents = entries.map((entry, i) => (
    <ChatEntry
      key={i}
      id={i}
      {...entry}
      color={color}
      onLike={onLike}
    />
  ));

  return <div className="chat-log">{chatComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;
