import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';


const ChatEntry = (props) => {



  const chatColor = props.sender === 'Vladimir' ? 'local' : 'remote'
  const buttonShape = props.liked ? '❤️' : '🤍'

  return (

    <div className={`chat-entry ${chatColor}`}>

      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={() => props.onChangeLike(props.id)}>{buttonShape}</button>
      </section>
    </div >
  );
};


ChatEntry.propTypes = {

  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onChangeLike: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,

}


export default ChatEntry;

