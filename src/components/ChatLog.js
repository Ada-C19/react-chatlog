import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateLikeStatus }) => {
  const chatEntries = entries.map(entry => {
    return (
        <ChatEntry id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} updateLikeStatus={updateLikeStatus} />
    );
  });
  
  return (
    <section>
      {chatEntries}
    </section>
  )
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      "id": Number.isRequired,
      "sender": String.isRequired,
      "body": String.isRequired,
      "timeStamp": DateTime.isRequired,
      "liked": Boolean.isRequired,
    })
  ),
  updateLikeStatus: PropTypes.func.isRequired
};

export default ChatLog