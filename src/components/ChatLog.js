import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const {entries} = props;
    // This is the same as const entries = props.entries

    const chatEntries = entries.map(entry => {
        return (
            <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked}></ChatEntry>
        );
    });
    return (
        <section>
            {chatEntries}
        </section>
    )
};

export default ChatLog;