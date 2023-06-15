import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'
import './ChatLog.css'

const ChatLog = ({entries, onUpdateMessage}) => {

    const chatComponents = entries.map((message) => {

        return (
            <section className='chat-log' key={message.id}>
                <ChatEntry
                key= { message.id }
                sender={ message.sender }
                body= { message.body }
                timeStamp={ message.timeStamp }
                id={ message.id }
                liked={ message.liked }
                onUpdateMessage={ onUpdateMessage }
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
        id: PropTypes.number,
        liked: PropTypes.bool,
        onUpdateMessage:PropTypes.func.isRequired
    })).isRequired,

};

export default ChatLog;