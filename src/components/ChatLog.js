import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';



const ChatLog = (props) => {
    const ChatEntryComponents = props.entries.map(entry =>{
        return (
        <ChatEntry
            key={entry.id}
            id= {entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
        />
    );
    });

    return (
        <section>
                { ChatEntryComponents }
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf({
        key:PropTypes.string,
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp:PropTypes.string.isRequired
        
    })
}

export default ChatLog;