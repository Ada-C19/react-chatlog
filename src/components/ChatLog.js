import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const { entries, onLikeChange } = props;
    const handleLikeChange = (id, liked) => {
        onLikeChange(liked);
    };

    return (
        <div className='chat-log'>
            {entries.map((entry) => (
                <ChatEntry
                    key={entry.id}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    onLikeChange={handleLikeChange}
                />
            ))}
        </div>
    );
};
export default ChatLog;






