import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    console.log('blabla',props);
    const ChatLogs = props.entries.map((message) => {
        console.log('inside props inside chatlog', props)

    return (
        <ChatEntry
        sender={message.sender}
        body={message.body}
        key={message.id}
        time={message.timeStamp}
        liked={message.liked}
        //handleClick={handleClick}
        // this is for css styling the active Tab
        // if the selected tab id is the same as the curr message
        // id, then it will return true or false
        //isActive={selectedTab === message.id}
        />
    );
    });
    return <div className='chat-log'>{ChatLogs}</div>;
};

export default ChatLog;