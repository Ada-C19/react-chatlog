import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp'
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  const heartColor = props.liked ? '❤️' : '🤍'
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time = {props.timeStamp} /></p>
        <button onClick={()=>props.onLiked(props.id)} className="like">{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLiked:PropTypes.func.isRequired,
};

export default ChatEntry;
