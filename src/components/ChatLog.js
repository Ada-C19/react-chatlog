import React from 'react';
import './ChatLog.css'; 
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    // console.log(props.onLikeChange)

    const chatEntryComponents = props.entries.map((entry) => (
        <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            onLikeChange={props.onLikeChange}
        />
    ));

    return (
        <div>
            <h1>Conversation</h1>
            {chatEntryComponents}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
    onLikeChange: PropTypes.func.isRequired,
};


ChatLog.defaultProps = {
    onLikeChange: () => {},
};

export default ChatLog;