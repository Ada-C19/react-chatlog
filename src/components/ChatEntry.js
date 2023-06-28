import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
	const [likePost, setLikePost] = useState(props.liked);

	const toggleLike = () => {
		const updatedEntry = {
			id: props.id,
			sender: props.sender,
			body: props.body,
			timeStamp: props.timeStamp,
			liked: !props.liked,
		};
		setLikePost(!likePost);
		props.onUpdate(updatedEntry);
	};

	const heartState = props.liked ? '❤️' : '🤍';

	return (
		<div className="chat-entry local">
			{/* <h2 className="entry-name">Replace with name of sender</h2> */}
			<h2 className="entry-name">{props.sender}</h2>
			<section className="entry-bubble">
				{/* <p>Replace with body of ChatEntry</p> */}
				<p>{props.body}</p>
				{/* <p className="entry-time">Replace with TimeStamp component</p> */}
				<p className="entry-time">
					<TimeStamp time={props.timeStamp}></TimeStamp>
				</p>
				<button onClick={toggleLike} className="like">
					{heartState}
				</button>
			</section>
		</div>
	);
};

ChatEntry.propTypes = {
	//Fill with correct proptypes
	id: PropTypes.number,
	sender: PropTypes.string,
	body: PropTypes.string,
	timeStamp: PropTypes.string,
	liked: PropTypes.bool,
};

export default ChatEntry;
