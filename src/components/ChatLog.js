import React, { useState } from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ( props ) => {

    const [entries, setEntries] = useState(props.entries);

    const setLiked = (id, value) => {
        let numLikes = false;
        entries.forEach(element => {
            if(element.id === id){
            element.liked = value;
            } 
            if(element.liked) numLikes++;
        });
        setEntries([...entries]); // Force re-render https://stackoverflow.com/a/56266640
        props.setTotalLikes(numLikes);
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
        ), setTotalLikes: PropTypes.func
            }
        
    
    export default ChatLog; 