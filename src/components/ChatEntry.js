import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = (singleEntry) => {

  const heart = singleEntry.liked ? '❤️' : '🤍'; 

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{singleEntry.sender}</h2>
      <section className="entry-bubble">
        <p>{singleEntry.body}</p>
        <TimeStamp time= {singleEntry.timeStamp}> </TimeStamp>
        {/* <p className="entry-time">{singleEntry.timeStamp}</p> */}
        <button className='like' onClick={() => singleEntry.updateLike(singleEntry.id)}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
