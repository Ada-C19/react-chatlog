import React from 'react';
import ChatEntry from './ChatEntry';
import chatMessages from '../data/messages.json';

const ChatLog = (props) => {
	const entries = props.entries;

	const chatComponents = chatMessages.map((message, index) => {
		return (
			<div className="chat-log" key={index}>
				<ChatEntry
					sender={message.sender}
					body={message.body}
					timeStamp={message.timeStamp}
				></ChatEntry>
			</div>
		);
	});
	return chatComponents;
};

export default ChatLog;
