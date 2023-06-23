import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types'; 

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    props.updateLikedCount(props.id);
  }

  //   const updateChat = {
  //     id: props.id,
  //     sender: props.sender,
  //     body: props.body,
  //     timeStamp: props.timeStamp,
  //     liked: !props.liked,
  //   };
  // };
  //   props.onLike(updateChat);

  const formatMessages = props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';
    return (
      <div className={formatMessages}>
        <h2 className="entry-name">{props.sender}</h2>
        <section className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time">
            <TimeStamp time={props.timeStamp}/>
          </p>
          <button className='like'onClick={onLikeButtonClick}>
            {props.liked ? '❤️' : '🤍'}
          </button>
        </section>
      </div>
    )};


ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func
};

export default ChatEntry;
