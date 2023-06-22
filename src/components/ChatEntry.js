import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const handleClick = () => {
    props.updateLikedMessagesCount(props.id);
};

  const chatEntryClass = props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';

  return (
    <div className={chatEntryClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className='like' onClick={handleClick}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;
