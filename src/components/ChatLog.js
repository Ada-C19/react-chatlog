import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import './ChatLog.css'
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatLog = 'chat-log';
    let showLike;
    console.log(props.entries);
    const chatComponents = props.entries.map((chat, index)=> {
        const entriesData = [...props.entries];
        const totalLike = [...entriesData].reduce((a,b) => a + (b.liked? 1: 0), 0)
        showLike = totalLike === 0? '🤍' : totalLike + ' ❤️s'; 

        return (
            <li key={index}> <ChatEntry  
                    className = {chatLog} 
                    id ={chat.id}
                    sender={chat.sender}
                    body={chat.body}
                    liked={chat.liked}
                    timeStamp={chat.timeStamp}
                    onUpdate = {props.onUpdateChat}
                    ></ChatEntry> 
            </li>
        ); 
    });
    
    return (
        <section>
            <h2>
                {showLike}
            </h2>
            <ul>
                {chatComponents}
            </ul>
        </section>
    )
}; 

ChatLog.propsTypes ={
    chatEntrys: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
        timestamp: PropTypes.string.isRequired
    })),
    onUpdateChat: PropTypes.func.isRequired
};

export default ChatLog;