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
}

export default ChatLog;


