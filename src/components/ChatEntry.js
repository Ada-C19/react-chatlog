import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = ({sender, body, timeStamp, id}) => {

  const [isLiked, setIsLiked] = useState(false);

  if (isLiked) {
    console.log('button is liked!');
  }else {
    console.log('no likeys for you');
  }

  const updateLikeButton = () => {
    setIsLiked(!isLiked);
  }

  // const heartColor = isLiked ? 'red' : 'white';
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{ sender }</h2>
      <section className="entry-bubble">
        <p>{ body }</p>
        <p className="entry-time"><TimeStamp time={ timeStamp }/></p>
        <button onClick={updateLikeButton} className='like'>{isLiked ? '🩷' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number
};

export default ChatEntry;
