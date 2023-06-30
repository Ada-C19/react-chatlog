import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';


const ChatEntry = ({sender, body, timeStamp, liked, id, updateChatData}) => {

  const location = sender === 'Vladimir' ? 'local' : 'remote';
  const heartColor = liked ? '❤️' : '🤍';

  const onHeartClick = () => {
    const updatedEntry = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    };
    updateChatData(updatedEntry);
  };
  
  return (
    <div className={`chat-entry ${location}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
        </p>
        <button className="like" onClick={onHeartClick}>{heartColor}</button>
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
  updateChatData: PropTypes.func.isRequired,
};

export default ChatEntry;
  