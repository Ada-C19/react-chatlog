import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'
import './ChatLog.css'

const ChatLog = ({ entries, updateMessage, selectedColor }) => {

    const chatComponents = entries.map((message) => {
        return (
            <section className='chat-log' id={ message.sender } key={ message.id }>
                <ChatEntry
                key= { message.id }
                sender={ message.sender }
                body= { message.body }
                timeStamp={ message.timeStamp }
                id={ message.id }
                liked={ message.liked }
                updateMessage={ updateMessage }
                selectedColor={ selectedColor }
                />
            </section>
        )
    })


    return (
        <section>
            { chatComponents }
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
    })).isRequired,
    updateMessage: PropTypes.func,
    selectedColor: PropTypes.string,

};

export default ChatLog;