import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
	// const [likesCount, setLikesCount] = useState(0);
	const [entries, setEntries] = useState(chatMessages);

	const sumHearts = () => {
		let total = 0;

		entries.forEach((entry) => {
			if (entry.liked) {
				total++;
			}
		});
		return total;
	};

	const switchHeart = (updatedEntry) => {
		const updatedEntries = entries.map((entry) => {
			if (entry.id === updatedEntry.id) {
				// entry.liked = !entry.liked;

				return { ...entry, liked: !entry.liked };
			}
			return entry;
		});
		setEntries(updatedEntries);
	};

	return (
		<div id="App">
			<header>
				<h1>Allie's Chat App</h1>
				<section className="black" id="heartWidget">
					{sumHearts()} ❤️s
				</section>
			</header>

			<main>
				{/* Wave 01: Render one ChatEntry component */}

				{/* Wave 02: Render ChatLog component */}
				<ChatLog entries={entries} onUpdateHeart={switchHeart}></ChatLog>
			</main>
		</div>
	);
};

export default App;
