import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [isLiked, setIsLiked] = useState(props['liked']);

  // console.log(props)

  const likeButtonClick = () => {
    setIsLiked( !isLiked );
    const messageData= {
      id: props['id'],
      body: props['body'],
      sender: props['sender'],
      timeStamp: props['timeStamp'],
      liked: !isLiked,
    };
    props.updatedMessage(messageData)
    // console.log(messageData)
    
  }

  return (
    <div className="chat-entry local" key={props['id']}>
      <h2 className="entry-name">{props['sender']}</h2>
      <section className="entry-bubble">
        <p>{props['body']}</p>
        <p className="entry-time"><TimeStamp time={props['timeStamp']}></TimeStamp></p>
        <button className="like" onClick={likeButtonClick}>{isLiked ? '❤️' : '🤍'}</button>
        
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  timeStamp: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  updatedMessage: PropTypes.func.isRequired
};

export default ChatEntry;
