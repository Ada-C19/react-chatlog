import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';


const ChatLog = (props) => { 
    return (
        <div className='chat-log'>
            {props.entries.map(entry => (
                <ChatEntry
                id={entry.id}
                sender={entry.sender} 
                body={entry.body} 
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                updateEntryData={props.updateEntryData} 
                likesCount={props.likesCount}
                toggleLikes={props.toggleLikes}
                />
            ))}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool
    })),
    updateEntryData: PropTypes.func.isRequired,
    likesCount: PropTypes.number.isRequired,
    toggleLikes: PropTypes.func.isRequired
};
  
export default ChatLog;