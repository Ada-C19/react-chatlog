import React from 'react';
// import {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';



const ChatEntry = (props) => {

  const heart = props.liked ? '❤️' : '🤍';


  return (
    <div className="chat-entry local">
      <h2 className="entry-name"> { props.sender }</h2>
      <section className="entry-bubble">
        <p>{ props.body } </p>
        <p className="entry-time">
          <TimeStamp>
          time={ props.timeStamp }
        </TimeStamp>
          
        </p>
        <button onClick={() => props.setLiked(props.id, !props.liked)} className='like-heart'> {heart} </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
