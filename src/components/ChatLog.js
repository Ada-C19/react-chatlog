import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
    const ChatMessages = props.entries.map(
        entry => {
            return (
                <li><ChatEntry sender={entry['sender']} body={entry['body']} timeStamp={entry['timeStamp']}></ChatEntry></li>
            )
        }
    )
    return (
        <ul className="chat-log">
            {ChatMessages}
        </ul>
    )
}

export default ChatLog;