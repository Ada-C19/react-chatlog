import React from 'react';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdateLike={props.onUpdateLike}
        onHeartClicks={props.onHeartClicks}
        localSender={props.localSender}
        colorLocal={props.colorLocal}
        colorRemote={props.colorRemote}
      />
    );
  });

  return <div>{chatEntryComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
  onUpdateLike: PropTypes.func,
  selectedColor: PropTypes.string,
};

export default ChatLog;