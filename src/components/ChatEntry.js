import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import {DateTime} from 'luxon';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

const toggleHeart = () => {
    props.updateHeart(props);
  }

  const heart = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button onClick={toggleHeart} className="like">{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired, 
  // TimeStamp: PropTypes.DateTime.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
