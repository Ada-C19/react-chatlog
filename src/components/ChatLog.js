import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatComponents = props.entries.map(entry => {
        return (
            <ChatEntry sender={entry.sender} body={entry.body} time={entry.timeStamp} id={entry.id}></ChatEntry>
        );
    });

    return (
        <section className='chat-log'>
            {chatComponents}
        </section>
    );
}

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired
  };
  
  export default ChatLog;