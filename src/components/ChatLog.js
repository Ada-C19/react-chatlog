import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js'

import './ChatLog.css';


const ChatLog = (props) => {
    const chatComponents = props.entries.map((entry) => {
        return (
            <section key={entry.id}>
                <ChatEntry 
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    colorChoices={props.colorChoices}
                    onUpdate={props.onUpdateEntry}
                    local={props.local}
                    remote={props.remote}
                    />
            </section>
        )
    })

    return (
        <div className='chat-log'>
            {chatComponents}
        </div>
        
    );
}
ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
    colorChoices: PropTypes.object.isRequired,
    onUpdateEntry: PropTypes.func.isRequired,
    local: PropTypes.string.isRequired,
    remote: PropTypes.string.isRequired
}
export default ChatLog;