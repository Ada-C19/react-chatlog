import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ChatEntry from './ChatEntry';



const ChatLog = (props) => {
    const {entries} = props;
    // ^^ This is the same as const entries = props.entries

    const chatEntries = entries.map((entry) => {
        return (
            <ChatEntry 
            id={entry.id}
            sender={entry.sender} 
            body={entry.body} 
            timeStamp={entry.timeStamp} 
            liked={entry.liked}
            key={entry.id} 
            isLiked = { entry.isLiked }
            updateLike = { props.updateLike }
            />
        );
    });
    return (
        <section>
            {chatEntries}
        </section>
    )
};

ChatLog.propTypes = {
    chatEntries: PropTypes.arrayOf(
        PropTypes.shape({
            "id": PropTypes.number,
            "sender": PropTypes.string.isRequired, 
            "body": PropTypes.string.isRequired, 
            "timeStamp": PropTypes.string.isRequired,
            "liked": PropTypes.bool.isRequired,
            isLiked: PropTypes.bool,
        })
    ),
    updateLike: PropTypes.func,
};

export default ChatLog;