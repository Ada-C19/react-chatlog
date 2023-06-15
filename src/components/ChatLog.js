import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog = (props) => {
    const {entries} = props;
    const messageLog = entries.map((message, index) => (
        <ChatEntry
            key={index}
            sender={message.sender}
            body={message.body}
            time={message.time}
        />)
    )
    return (
        <section>{messageLog}</section>
    )
}
//     return (
//         <ul>
//             {
//                 messageLog.map((message) => (
//                     <li key={message.id}>
//                     <ChatEntry
//                         sender={message.sender}
//                         body={message.body}
//                         time={message.time}
//                     />
//                     </li>)
//                 ) 
//             }
//         </ul>
//     );
// };

// ChatLog.propTypes = {
//     messageLog: PropTypes.arrayOf(
//         PropTypes.shape({
//             sender: PropTypes.string,
//             body: PropTypes.string,
//             time: PropTypes.string
//         })
//     )
// }

export default ChatLog;