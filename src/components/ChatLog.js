import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog = (props) => {
    const {entries} = props;
    console.log(props)
    const messageLog = entries.map((message, index) => (
        <ChatEntry
            key={index}
            id={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            // handleLikeClick={props.handleLikeClick}
            updateMessage={props.updateMessage}
        />)
    )
    return (
        <section>{messageLog}</section>
    )
}

// ChatLog.propTypes = {
//     entries: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             sender: PropTypes.string.isRequired,
//             body: PropTypes.string.isRequired,
//             time: PropTypes.string.isRequired,
//             liked: PropTypes.bool,
//         })
//     ).isRequired,
//     updateMessage: PropTypes.func.isRequired,
//     handleLikeClick: PropTypes.func.isRequired
// };


export default ChatLog;