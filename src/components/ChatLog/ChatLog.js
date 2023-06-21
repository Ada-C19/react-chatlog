import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from '../ChatEntry/ChatEntry';
import './ChatLog.css';

const ChatLog = props => {
  const getChatLogJSX = logs => {
    return logs.map(chat => (
      <li key={chat.id}>
        <ChatEntry
          id={chat.id}
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
          liked={chat.liked}
          updateLike={props.updateLike}
          local={props.local}
        />
      </li>
    ));
  };

  return <section className='chat-log'>{getChatLogJSX(props.entries)}</section>;
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  updateLike: PropTypes.func.isRequired,
};

export default ChatLog;
