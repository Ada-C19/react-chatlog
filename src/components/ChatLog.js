// import React from 'react';
// import ChatEntry from './ChatEntry';

// const ChatLog = ({ entries }) => {
//     return (
//         <div className="chat-log">
//         {entries.map((entry) => (
//             <ChatEntry
//             key={entry.id}
//             sender={entry.sender}
//             body={entry.body}
//             timeStamp={entry.timeStamp}
//             />
//         ))}
//         </div>
//     );
// };

// export default ChatLog;

import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
    return (
        <div className='chat-log'>
            {entries.map((entry) => (
                <ChatEntry
                    key={entry.id}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                />
            ))}
        </div>
    );
};

export default ChatLog;
