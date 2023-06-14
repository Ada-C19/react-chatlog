import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const chatEntryClass = props.id % 2 === 0 ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={chatEntryClass}>
      <h2 className="entry-name"> { props.sender } </h2>
      <section className="entry-bubble">
        <p> {props.body} </p>
        <TimeStamp className="entry-time" time={props.timeStamp}> </TimeStamp>
        <button className="like">🤍</button> 
        {/* call props.liked boolean and use for like button */}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string,
  body: PropTypes.string
};

export default ChatEntry;
