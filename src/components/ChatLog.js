import React from 'react'
import ChatEntry from './ChatEntry'
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const messageComponents = props.entries.map(entry => {
        return (
            <div key={entry.id}>
                <ChatEntry
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    onUpdate={props.onUpdateEntry}
                ></ChatEntry>
            </div>
        );
    });

    return (
        <div>
            {messageComponents}
        </div>
    ) 
};

ChatLog.propTypes = {
    //Fill with correct proptypes
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired
        })),
    onUpdateEntry: PropTypes.func.isRequired
};

export default ChatLog;
