import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

// const ChatEntry = ({ sender, body, timeStamp }) => {
const ChatEntry = (props) => {

  const msgDateFormat = new Date(props.timeStamp)
  const currentDate = new Date()
  const msgYear = msgDateFormat.getFullYear();
  const currYear = currentDate.getFullYear();
  // const seconds = dateFormat.getSeconds();

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{currYear - msgYear} years ago</p>
        <button className="like" onClick={() => null}>🤍</button>
      </section>
    </div >
  );
};


ChatEntry.propTypes = {

  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  // like: PropTypes.bool.isRequired,


}


export default ChatEntry;

