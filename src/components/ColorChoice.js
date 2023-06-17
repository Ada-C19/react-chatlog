import React from 'react';

const ColorChoice = ({ setColorCallback, sender, color }) => {
  // Return JSX for displaying color choice buttons
  // that set text colors for each user
	return (
		<section className='widget'>
			<h3 className={color}>{sender}'s color:</h3>
			<nav>
				<button onClick={() => setColorCallback('red')}>🔴</button>
				<button onClick={() => setColorCallback('orange')}>🟠</button>
				<button onClick={() => setColorCallback('yellow')}>🟡</button>
				<button onClick={() => setColorCallback('green')}>🟢</button>
				<button onClick={() => setColorCallback('blue')}>🔵</button>
				<button onClick={() => setColorCallback('purple')}>🟣</button>
			</nav>
		</section>
	);
};

export default ColorChoice;
