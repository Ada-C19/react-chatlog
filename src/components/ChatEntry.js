import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = (props) => {


  const updateLikeButtonClick = () =>{
    const updateChat ={
      id : props.id,
      sender : props.sender,
      body : props.body,
      liked : !props.liked, 
      timeStamp : props.timeStamp,
    }
    props.onUpdate(updateChat);
  }

  const heartColor = props.liked ? '❤️': '🤍'; 

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p> {props.body} </p>
        <p className="entry-time"><TimeStamp time = {props.timeStamp}></TimeStamp></p>
        <button onClick ={updateLikeButtonClick} className="like">{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;
