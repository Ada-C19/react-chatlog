import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import entries from '../data/messages.json';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const {entries} = props;
    

    const chatEntries = entries.map(entry => {
        return (
            <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} />
        );
    });
    
    return (
    <section>
            {chatEntries}
        </section>
    )
};

export default ChatLog;