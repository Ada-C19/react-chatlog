import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';



const ChatLog = (props) => {
    const ChatEntryComponents = props.entries.map((entry) =>{
    
        return (
        <ChatEntry
            key={entry.id}
            id= {entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onUpdate={props.onUpdateChatEntry}
        />
    );
    });

    return (
        <div>
                { ChatEntryComponents }
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            key:PropTypes.string,
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp:PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired  
        })  
    ).isRequired,
    onUpdateChatEntry: PropTypes.func
};

export default ChatLog;