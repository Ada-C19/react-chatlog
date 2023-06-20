import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

// const getTimeAgo = (timeStamp) => {
//   const currentYear = new Date().getFullYear();
//   const textYear = new Date(timeStamp).getFullYear();
//   const difference = currentYear - textYear;
//   return `${difference} years ago`;

const ChatEntry = (props) => {

  const onHeartClick = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedEntry);
  };

  const heartColor = props.liked ? '🤍' : '❤️';

  const getTimeAgo = (timeStamp) => {
    const currentYear = new Date().getFullYear();
    const textYear = new Date(timeStamp).getFullYear();
    const difference = currentYear - textYear;
    return `${difference} years ago`;
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{getTimeAgo(props.timeStamp)}</p>
        <button className={heartColor} onClick={onHeartClick}>🤍</button>
        {/* {likeColor} */}
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
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
