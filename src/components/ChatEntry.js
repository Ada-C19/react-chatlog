import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp, id, liked, updateMessage, selectedColor}) => {
  
  const style = {
    color: selectedColor,
  };
  
  const updateLikeButton = () => {
    updateMessage({
      sender,
      body,
      timeStamp,
      id,
      liked: !liked,
    });
    // console.log(`updating like status for ${sender}`)
  };

  const localOrRemote = (sender === 'Vladimir') ?  'chat-entry local' : 'chat-entry remote';

  
  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{ sender }</h2>
      <section className="entry-bubble">
        <p style={style}>{ body }</p>
        <p className="entry-time"><TimeStamp time={ timeStamp }/></p>
        <button onClick={ () => updateLikeButton() } className='like'>{ liked ? '🩷' : '🤍' }</button>
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
  updateMessage: PropTypes.func,
  selectedColor: PropTypes.string,
};

export default ChatEntry;