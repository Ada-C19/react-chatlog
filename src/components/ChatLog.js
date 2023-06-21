import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog = (props) => {

    const ChatMessages = props.entries.map(
        entry => {
            return (
                <section><ChatEntry 

                sender={entry.sender} 
                body={entry.body} 
                id = {entry.id}
                timeStamp={entry.timeStamp}
                liked = {entry.liked}
                updateLikes = {props.updateLikes}

                ></ChatEntry></section>
            )
        }
    )
    return (
        <div className="chat-log">
            {ChatMessages}
        </div>
    )
}

ChatLog.protoTypes ={
    ChatMessages : PropTypes.arrayOf(
        PropTypes.shape({

            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            id : PropTypes.number
            
        })
    ),
    updateLikes: PropTypes.func
}

export default ChatLog;