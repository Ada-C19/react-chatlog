import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const updateChatLog = () => {
    props.onUpdateMessage({
      id: props.id, 
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !isLiked,
    });

    // Change the state of isLiked
    setIsLiked(!isLiked);
  };
  
  // Need to change heart emoji from white to red if message is liked
  const heart = isLiked ? '❤️' : '🤍';

  // Need to assign class 'local' if the sender is Vladimir and 'remote' if it's Estragon
  const messageSide = props.sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${messageSide}`}>
      <h2 className="entry-name">
        { props.sender }
      </h2>
      <section className='entry-bubble'>
        <p>{ props.body }</p>
        <p className="entry-time">
          <TimeStamp time={ props.timeStamp }/>
        </p>
        <button 
          onClick={ updateChatLog }
          className='like'
        >
            { heart }
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
