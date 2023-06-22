import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'



const ChatEntry = ({ message, handleLike }) => {

  // const handleLike = (id) => {
  //   console.log(id)
  // }
  const heart = message.liked ? '❤️' : '🤍'
 
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{message.sender}</h2>
      <section className="entry-bubble">
        <p>{message.body}</p>
         <TimeStamp className="entry-time" message={message}/>
        <button className="like" onClick={() => handleLike(message.id)}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
