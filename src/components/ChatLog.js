import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, updateHeart, localColor, remoteColor, userList, storeUsers }) => {
  const getChatLogJSX = (entries) => {
    return entries.map((entry) => {
      return (
        <ChatEntry
          id={entry.id}
          liked={entry.liked}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          updateHeart={updateHeart}
          localColor={localColor}
          remoteColor={remoteColor}
          userList={userList}
        />
      );
    });
  };
  return <ul className="chat-log">{getChatLogJSX(entries)}</ul>;
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            liked: PropTypes.bool.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired
        })
    ).isRequired,
    updateHeart: PropTypes.func.isRequired,
    localColor: PropTypes.string.isRequired,
    remotecolor: PropTypes.string.isRequired,
    userList: PropTypes.array.isRequired,
};

export default ChatLog;