import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from '../TimeStamp';
import './ChatLog.css';

const ChatLog = props => {
  return (
    <section>
      <h2 className='entry-name'>{props.sender}</h2>
      <section className='entry-bubble'>
        <p>{props.body}</p>
        <p className='entry-time'>
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className='like'>🤍</button>
      </section>
    </section>
  );
};

ChatLog.propTypes = {
  //Fill with correct proptypes
};

export default ChatLog;
