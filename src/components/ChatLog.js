import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {  
    return (props.entries.map(entry => (
            <div className='chat-log' key={entry.id}>
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
            </div>
            ))
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    })),
    updateEntryData: PropTypes.func,
    likesCount: PropTypes.number,
    toggleLikes: PropTypes.func
};
  
export default ChatLog;