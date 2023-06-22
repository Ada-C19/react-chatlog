
import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const entryComponents = props.entries.map((entry) => {

        return (
            <div className='chat-log' key={entry.id}>
                <ChatEntry
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    onUpdateEntry={props.onUpdateEntry}
                ></ChatEntry>
            </div>
        );
    });
    return <div>{entryComponents}</div>;
};


ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool
    })),
    onUpdateEntry: PropTypes.func.isRequired
};

export default ChatLog;



