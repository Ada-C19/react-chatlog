import React, { useState } from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  const [isLiked, setIsLiked] = useState(props.liked);

  const toggleLikes = () => {
    // setIsLiked(!isLiked);
    props.updateLikes(props.id, isLiked)
  }

  return (
    <div className={props.id % 2 === 0 ? 'chat-entry local' : 'chat-entry remote'}>
      <h2 className="entry-name"> { props.sender } </h2>
      <section className="entry-bubble">
        <p> {props.body} </p>
        <TimeStamp className="entry-time" time={props.timeStamp}> </TimeStamp>
        <button onClick={toggleLikes} className="like">
        {props.liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool
};

export default ChatEntry;
