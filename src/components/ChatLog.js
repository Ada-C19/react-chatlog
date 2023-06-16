import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';



const ChatLog = (props) => {
   const getMessage = props.messages.map((message) =>{
        return (
            <ChatEntry id={message.id} sender = {message.sender} key = {message.id}
            body = {message.body} timeStamp = {message.timeStamp }/>
        )

    })
   return <div className='chats'>{getMessage}</div>
};

ChatLog.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired
        }
        )
    ).isRequired
}



export default ChatLog;