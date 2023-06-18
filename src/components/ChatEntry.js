import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = ({ id, sender, body, timeStamp, liked, onUpdateChatData }) => {
  const [heart, setHeart] = useState(liked)

  const toggleLike = () => {
    const updatedChat = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    };
    setHeart(!heart)
    onUpdateChatData(updatedChat)
  }

  return (
    <div className={`chat-entry ${sender === 'Vladimir' ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={toggleLike}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateChatData: PropTypes.func.isRequired
};

export default ChatEntry;
