import React from 'react';
import ChatEntry from './ChatEntry';
import chatMessages from '../data/messages.json';

const ChatLog = () => {
	const chatComponents = chatMessages.map((message) => {
		return (
			<ChatEntry
				sender={message.sender}
				body={message.body}
				timeStamp={message.timeStamp}
			></ChatEntry>
		);
	});
	return chatComponents;
};

export default ChatLog;
