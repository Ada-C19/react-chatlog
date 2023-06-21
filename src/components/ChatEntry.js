import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'


const ChatEntry = (props) => {

    const onHeartButtonClick = () => {
        const updatedHeart = {
            id: props.id,
            sender: props.sender,
            body: props.body,
            timeStamp: props.timeStamp,
            liked: !props.liked
        };

        props.onUpdateChat(updatedHeart);
    };

  const heartColor = props.liked ? '❤️':'🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">{props.body}
        <p className="entry-time"><TimeStamp time={props.timeStamp}> </TimeStamp></p>
        <button className="like" onClick={onHeartButtonClick}>{heartColor}</button>
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
  onUpdateChat: PropTypes.func.isRequired
};

export default ChatEntry;
