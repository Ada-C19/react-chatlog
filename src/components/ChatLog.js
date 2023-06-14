import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatComponents = props.entries.map(entry => {
        return (
            <ChatEntry key={entry.id} sender={entry.sender} body={entry.body} time={entry.timeStamp} id={entry.id} isLiked={entry.liked} onUpdate={props.onUpdateChat}></ChatEntry>
        );
    });

    ChatLog.propTypes = {
        entries: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string,
            time: PropTypes.string,
            liked: PropTypes.bool.isRequired
        })),
        onUpdateChat: PropTypes.func.isRequired
      };

    return (
        <section className='chat-log'>
            {chatComponents}
        </section>
    );
};


  
  export default ChatLog;