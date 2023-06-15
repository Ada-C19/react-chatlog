import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp, id, liked, onUpdateMessage}) => {


  const onUpdateLikeButton = () => {
    onUpdateMessage({
      sender,
      body,
      timeStamp,
      id,
      liked: !liked,
    });
    console.log(`updating like status for ${sender}`)
  };

  
  return (
    <div className="chat-entry local" id={ sender}>
      <h2 className="entry-name">{ sender }</h2>
      <section className="entry-bubble" id={`${sender}-bubble`}>
        <p>{ body }</p>
        <p className="entry-time"><TimeStamp time={ timeStamp }/></p>
        <button onClick={onUpdateLikeButton} className='like'>{liked ? '🩷' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number,
  onUpdateMessage: PropTypes.func.isRequired,
};

export default ChatEntry;