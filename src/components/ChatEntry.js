import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = ({ id, sender, body, timeStamp, liked, onUpdateChatData, user, color }) => {
  const [heart, setHeart] = useState(liked);

  const toggleLike = () => {
    const updatedChat = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
      user: user,
      color: color
    };
    setHeart(!heart);
    onUpdateChatData(updatedChat);
  }
  console.log(user)
  return (
    <div className={`chat-entry ${user}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={toggleLike}>{liked ? '❤️' : '🤍'}</button>
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
  onUpdateChatData: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired  

};

export default ChatEntry;
