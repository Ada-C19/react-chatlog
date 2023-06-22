import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
	return (
		<div className='chat-log '>
			{props.entries.map((message, i) => (
				<ChatEntry
					sender={message.sender}
					body={message.body}
					timeStamp={message.timeStamp}
				/>
			))}
		</div>
	);
};

export default ChatLog;
