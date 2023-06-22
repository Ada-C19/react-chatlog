import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

import {useState} from 'react';

const ChatEntry = (props) => {

  const [isLiked, setIsLiked] = useState(false);

  console.log(props)

  const likeButtonClick = () => {
    setIsLiked( !isLiked );
    props.onLike( !isLiked );
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
  // time: PropTypes.TimeStamp.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default ChatEntry;
