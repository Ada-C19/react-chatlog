import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
  // const {entries} = props;
  // ^^ This is the same as const entries = props.entries
  const chatEntries = entries.map(entry => {
    return (
        <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} />
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
  )
};

export default ChatLog