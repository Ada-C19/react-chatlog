import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from '../TimeStamp';
import './ChatEntry.css';

const ChatEntry = props => {
  const toggleLike = () => {
    props.updateLike({ ...props, liked: !props.liked });
  };

  return (
    <section>
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
  //Fill with correct proptypes
};

export default ChatEntry;
