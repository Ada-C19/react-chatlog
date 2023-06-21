import React from 'react';
import PropTypes from 'prop-types';

import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((chatMsg, index) => {
        return (
            <li key={index}>
                <ChatEntry 
                id={chatMsg.id}
                sender={chatMsg.sender} 
                body={chatMsg.body} 
                timeStamp={chatMsg.timeStamp}
                isLiked={chatMsg.liked}
                onUpdate={props.onUpdateChat}
                ></ChatEntry>
            </li>
        )
    });

    return (
        <div className="chat-log">
            <ul>
                {chatEntryComponents}
            </ul>
        </div>
    );
}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        isLiked: PropTypes.bool
    })),
    onUpdate: PropTypes.func
}

export default ChatLog;