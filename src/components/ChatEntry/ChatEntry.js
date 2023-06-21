import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from '../TimeStamp';
import './ChatEntry.css';

const ChatEntry = props => {
  const toggleLike = () => {
    props.updateLike({ ...props, liked: !props.liked });
  };

  const sender =
    props.sender === props.local ? 'chat-entry local' : 'chat-entry remote';

  return (
    <section className={sender}>
      <h2 className='entry-name'>{props.sender}</h2>
      <section className='entry-bubble'>
        <p>{props.body}</p>
        <p className='entry-time'>
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={toggleLike} className='like'>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string,
  liked: PropTypes.bool,
  updateLike: PropTypes.func,
};

export default ChatEntry;
