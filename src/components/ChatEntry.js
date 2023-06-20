import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';


const ChatEntry = ({entry, likeMessage}) => {
  const { id, sender, body, timeStamp, liked, messageClass } = entry;
  const buttonClass = liked ? 'liked' : 'notLiked';
  const heart = liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry">
        <div className={messageClass}>
          <h2 className="entry-name">{sender}</h2>
          <section className="entry-bubble">
            <p>{body}</p>
            <div className="entry-time">
            <TimeStamp time={timeStamp}/>
            </div>
            <button className={`like ${buttonClass}`}
            onClick={() => likeMessage(id)}>{heart}</button>
          </section>
        </div>

    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
