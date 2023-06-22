import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
	console.log(chatMessages);
	return (
		<div id='App'>
			<header>
				<h1>Chat Log</h1>
			</header>
			<main>
				<ChatLog entries={chatMessages} />
			</main>
		</div>
	);
};

export default App;
