import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'
import './ChatLog.css'

const ChatLog = ({ entries, updateMessage, vladimirFontColor, estragonFontColor }) => {

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
                vladimirFontColor={vladimirFontColor}
                estragonFontColor={estragonFontColor}
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
    vladimirFontColor: PropTypes.string,
    estragonFontColor: PropTypes.string,

};

export default ChatLog;