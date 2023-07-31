import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [liked, setLiked] = useState(false);

  const likeClickHandler = () => {
    setLiked((prevLiked) => !prevLiked);

    props.onLikeChange(!liked);
    
  };


  return (
    <div className={ `chat-entry ${liked ? 'liked': ''}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time ={props.timeStamp} />
        </p>
        <button className="like" onClick={likeClickHandler}> 
        {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onLikeChange: PropTypes.func.isRequired,
};

export default ChatEntry;
