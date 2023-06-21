import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const buttonContent = props.liked ? '❤️' :  '🤍';

  return (
    <div className={props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local'}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className=''>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={() => props.onSetLike(props.id)}>{buttonContent}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onSetLike: PropTypes.func
};

export default ChatEntry;
