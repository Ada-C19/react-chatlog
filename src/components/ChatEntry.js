// import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  // const [liked, setIsLiked] = useState(false);

  // const likedMesssage = () => {
  //   setIsLiked(!liked)
  // }

  const onLikeClick = () =>{
    props.updateLikes(props.id)
  }

  const person = (props.sender === 'Vladimir') ? 'chat-entry local' : 'chat-entry remote';

  const heartColor = props.liked ? '❤️' :'🤍'; 
  return (
    <section className= {person}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button onClick = {onLikeClick}className="like">{heartColor}</button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLikes: PropTypes.func,
  id : PropTypes.number
};

export default ChatEntry;
