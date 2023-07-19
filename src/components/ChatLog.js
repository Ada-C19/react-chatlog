import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css'

const ChatLog = (props) => {
    const getChat = props.entries.map((chat) => {
        return ( 
            <ChatEntry id={chat.id} 
            sender={chat.sender} 
            body={chat.body}
            timeStamp={chat.timeStamp}
            liked={chat.liked}
            onClick={props.onClick}
            key={chat.id}
            />
        )
    })
    return <div className='chat-log'>{getChat}</div>
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
    onClick: PropTypes.func.isRequired
};


export default ChatLog;