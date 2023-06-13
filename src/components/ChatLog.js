import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map(chatMsg => {
        return (
            <ul>
                <ChatEntry sender={chatMsg.sender} body={chatMsg.body} timeStamp={chatMsg.timeStamp}></ChatEntry>
            </ul>
        )
    });

    return (
        <div>
            {chatEntryComponents}
        </div>
    );
}

export default ChatLog;