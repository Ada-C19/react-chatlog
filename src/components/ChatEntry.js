import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';



const ChatEntry = (props) => {

  const handleClick = () => {
    props.handleLike(props.id)
  };
  
  const chatEntryClass = props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';


  return (
    <div className={chatEntryClass}>
      <h2 className='entry-name'>{props.sender} </h2>
      <section className='entry-bubble'>
        <p>{props.body}</p>
        <p className='entry-time'> <TimeStamp time={props.timeStamp} /> </p>
        <button onClick={handleClick} className="like">{props.liked ? '❤️' : '🤍'}</button>
      </section> 
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.element.isRequired,
};

export default ChatEntry;
