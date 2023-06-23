import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';



const ChatLog = (props) => {
   
    const getMessage = props.entries.map((message) =>{
        
        return (
            <ChatEntry id={message.id} sender = {message.sender} key = {message.id}
            body = {message.body} timeStamp = {message.timeStamp } liked ={message.liked} onLiked = {props.likedFunc} />
        )

    })
    return <div className='chat-log'>{getMessage}</div>
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired
        }
        )
    ).isRequired,
    likedFunc: PropTypes.func
};



export default ChatLog;