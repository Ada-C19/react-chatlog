import React from 'react'
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {

    const chatComponents = entries.map((entry) => {

        return (
            <li key={entry.id} className="chat-log">
                <ChatEntry
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}>
                    onUpdate={entries.onUpdateChatEntry}    
                </ChatEntry>
            </li>
        );

    });

    return (
        <section>
                {chatComponents}
        </section>
    )

};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })),
    onUpdateEntry: PropTypes.func.isRequired
};
export default ChatLog;