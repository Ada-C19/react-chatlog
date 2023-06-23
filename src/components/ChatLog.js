import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';


const ChatLog = ({ entries, onToggleLike, names, textColor }) => {
    const chatEntries = entries.map((entry) => {
        return <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onToggleLike={onToggleLike}
            textColor={textColor}
            names={names}
        />
    });

    const getCount = (data) => {
        let count = 0;
        for (const message of data) {
            if (message.liked) {
                count += 1
            }
        };
        return count;
    };

    const likeCount = getCount(entries);

    return (
        <div className='chat-log'>
            <h2>{likeCount} ❤️{likeCount > 1 ? 's' : ''}</h2>
            {chatEntries}
        </div>
    );

};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onToggleLike: PropTypes.func.isRequired,

};



export default ChatLog;


