import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    return (
        <section>
            <ul>
                {props.entries.map((entry) => (
                    <ChatEntry
                        sender={entry.sender}
                        body={entry.body}
                        timeStamp={entry.timeStamp}
                        liked={entry.liked}
                        key={entry.id}
                        onLikeToggle={props.onLikeToggle}
                        id={entry.id}
                    />
                ))}
            </ul>
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired
        })
    ).isRequired,
    onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;