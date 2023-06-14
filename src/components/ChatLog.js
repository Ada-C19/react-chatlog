import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    return (
        <div className="chat-log">
            
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired
};

export default ChatLog;