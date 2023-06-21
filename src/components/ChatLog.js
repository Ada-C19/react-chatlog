import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const messages = props.entries.map(message => {
        return (
            <section key={message.id}>
                <ChatEntry 
                    id={message.id}
                    sender={message.sender} 
                    body={message.body} 
                    timeStamp={message.timeStamp}
                    liked={message.liked}
                    updateLiked={props.updateLiked}
                    colorData={props.colorData}
                ></ChatEntry>
            </section>

        );
    })

    return (
        <section>
            {messages}
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                sender: PropTypes.string.isRequired,
                body: PropTypes.string.isRequired,
                timeStamp: PropTypes.string.isRequired,
                liked: PropTypes.bool.isRequired
            }
        ).isRequired
    ),
    updateLiked: PropTypes.func,
    colorData: PropTypes.object
};

export default ChatLog;