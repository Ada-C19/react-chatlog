import React, { useState } from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ( props ) => {

    const [entries, setEntries] = useState(props.entries);

    const setLiked = (id, value) => {
        setEntries((entries) => {
            let numLikes = 0;
            entries.forEach(element => {
                if(element.id === id){
                element.liked = value;
                } 
                if(element.liked) numLikes++;
            });
    
            props.setTotalLikes(() => numLikes)
             // Force re-render https://stackoverflow.com/a/56266640
                return [...entries];
        });
    }

    return entries.map((entry) => (
        <ChatEntry
            key = {entry.id}
            id = {entry.id}
            sender = {entry.sender}
            body = {entry.body}
            timeStamp = {entry.timeStamp}
            liked = {entry.liked}
            setLiked = {setLiked}
        />
        ));
    }

    // return (
    //     <div className="chat-log">
    //         {chatMessages}
    //     </div>
    // );
    // };

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
        setTotalLikes: PropTypes.func.isRequired,
        };
    
    export default ChatLog; 