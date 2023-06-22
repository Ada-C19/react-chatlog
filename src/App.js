import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
const App = () => {
	return (
		<div id='App'>
			<header>
				<h1>Chat Log</h1>
			</header>
			<main>
				<div className='widget' id='heartWidget'>
					3 ❤️s
				</div>
				<ChatLog entries={chatMessages} />
			</main>
		</div>
	);
};
export default App;
