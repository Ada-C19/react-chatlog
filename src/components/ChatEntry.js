import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const toggleLikeButton = () => {
    props.updateLiked(props.id);
  };

  // Note: Tests for waves don't pass if I have the commented-out lines :,( 
  // But if I don't use colorData, the tests will pass. 
  // Just wanted to do the optional enhancement. It works in browser!

  // const textColor = props.colorData[props.sender];

  return (
    <div className={ props.id % 2 ? 'chat-entry local' : 'chat-entry remote' }>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        {/* <p className={ textColor }> {props.body} </p> */}
        <p> {props.body} </p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={toggleLikeButton}>{props.liked ? '❤️' : '🤍'}</button>
      </section> 
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLiked: PropTypes.func,
  colorData: PropTypes.object
};

export default ChatEntry;
