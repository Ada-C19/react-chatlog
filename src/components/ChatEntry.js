import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({id, sender, body, timeStamp, liked, onToggleLike}) => {

  const messageColor = sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const toggleLike = () => {
    onToggleLike({
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked
    });
    console.log(`Updated id: ${id} message`)
  };

  const heart = liked ? '❤️'  : '🤍';

  
  return (
    <div className={messageColor}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
        </p>
        <button className="like" onClick={toggleLike}>{heart}</button>
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
  onToggleLike: PropTypes.func.isRequired, 
};

export default ChatEntry;
