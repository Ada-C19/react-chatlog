import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, likeMessage, colorChoice = 'black' }) => {
	const likedHeart = '❤️';
	const notLikedHeart = '🤍';
	const likedClass = liked ? likedHeart : notLikedHeart;

	const bubbleClass = colorChoice[sender] ?? 'black'

	// console.log(bubbleClass)

	const stateMessage = (sender) => {
		return sender === 'Vladimir' ? 'local' : 'remote';
	};

	return (
		<div className={'chat-entry ' + stateMessage(sender)}>
			<h2 className={`entry-name ${bubbleClass}`}>{sender}</h2>
			<section className={`entry-bubble ${bubbleClass}`}>
				<p>{body}</p>
				<p className="entry-time">
					<TimeStamp time={timeStamp} />
				</p>
				<button className="like" onClick={() => likeMessage(id)}>
					{likedClass}
				</button>
			</section>
		</div>
	);
};

ChatEntry.propTypes = {
	id: PropTypes.number.isRequired,
	sender: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	timeStamp: PropTypes.string.isRequired,
	liked: PropTypes.bool.isRequired,
	colorChoice: PropTypes.func
};

export default ChatEntry;
