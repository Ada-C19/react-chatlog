// // import React from 'react';
// import ChatEntry from './components/ChatEntry';
// import chatMessages from './data/messages.json';
// import './ChatLog.css';
// import PropTypes from 'prop-types';

// // const ChatLog = ( entries ) => 
// const ChatLog = ( props ) => {
//     const chatMessages = [];
//     const entries = props.entries;

//     for (const entry of entries) {
//         chatMessages.push(
//             <ChatEntry
//             id = {entry.id}
//             sender = {entry.sender}
//             body = {entry.body}
//             timeStamp = {entry.timeStamp}
//             />

//         )
//     };
// };

// ChatLog.propTypes = {
//     id: PropTypes.string.isRequired,
//     sender: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     timeStamp: PropTypes.string.isRequired,
//     entries: PropTypes.string.isRequired,
// };

// export default ChatLog;


// import React from 'react';
import ChatEntry from './ChatEntry';
import chatMessages from '../data/messages.json';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ( props ) => {
const chatMessages = [];
const entries = props.entries;


for (const entry of entries) {
    chatMessages.push(
        <ChatEntry
        id = {entry.id}
        sender = {entry.sender}
        body = {entry.body}
        timeStamp = {entry.timeStamp}
        liked = {entry.liked}
        />
    );
};

    return (
        <div className="chat-log">
            {chatMessages}
        </div>
    );
    };

    ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    })
    ).isRequired,
    };

export default ChatLog; 