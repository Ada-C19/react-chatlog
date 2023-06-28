import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({messageData}) => {
  // console.log(props);
  const message = messageData;

  return (
    <div className="chat-entry local">
      {/* <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp /></p>
        <button className="like">🤍</button>
      </section> */}
      <p>sender: {message.sender}</p>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
