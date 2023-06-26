import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {


  const heart = props.liked? '❤️': '🤍';


  return(
    <div className = "chat-entry local" >
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp} />
        <button className='like'onClick={()=>props.setLikes(props.id)}>{heart}</button>
      </section>
    </div >
  );
};

ChatEntry.propTypes = {
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ChatEntry;
