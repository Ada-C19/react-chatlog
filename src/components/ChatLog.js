import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatLogComponents = props.entries.map((message) => {
    return (
      <div key={message.id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onUpdate={props.onUpdateMessage}
        />
      </div>
    );
  });
  return (
    <section>
      <div>{chatLogComponents}</div>
    </section>
  );
};


ChatLog.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  onUpdateMessage: PropTypes.func.isRequired,
};

export default ChatLog;


