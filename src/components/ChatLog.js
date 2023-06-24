import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = () => {
	return (
		<section>
			<ChatEntry
				sender={'Joe Biden'}
				body={"Get out by 8am.  I'll count the silverware"}
				timeStamp={'2018-05-18T22:12:03Z'}
			></ChatEntry>
			<ChatEntry
				sender={'Vladimir'}
				body={'why are you arguing with me'}
				timeStamp={'2018-05-29T22:49:06+00:00'}
			></ChatEntry>
			<ChatEntry
				sender={'Estragon'}
				body={'Because you are wrong.'}
				timeStamp={'2018-05-29T22:50:22+00:00'}
			></ChatEntry>
		</section>
	);
};

export default ChatLog;
