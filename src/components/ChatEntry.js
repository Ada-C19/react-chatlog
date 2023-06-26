import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
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
				<button className="like">🤍</button>
			</section>
		</div>
	);
};

ChatEntry.propTypes = {
	//Fill with correct proptypes
	sender: PropTypes.string,
	body: PropTypes.string,
	timeStamp: PropTypes.string,
};

export default ChatEntry;
