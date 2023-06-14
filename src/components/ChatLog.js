import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'

const ChatLog = ({entries}) => {

    const chatComponents = entries.map((message) => {
        return (
            <section className='chat-log' key={message.id}>
                <ChatEntry
                sender={ message.sender }
                body= {message.body}
                timeStamp={message.timeStamp}
                id={message.id}
                />
            </section>
        )
    })

    return (
        <section>
            <h2>Chat Log</h2>
            <ul className='chat-log'>
                { chatComponents }
            </ul>
        </section>
    );

};


ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        id: PropTypes.number
    })).isRequired,

};

export default ChatLog;