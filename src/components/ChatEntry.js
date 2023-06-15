import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';

const ChatEntry = ({sender, body, timeStamp, id, liked, onUpdateMessage}) => {

  // const [isLiked, setIsLiked] = useState(false);

  // const [likeCount, setLikeCount] = useState(0)


  const onUpdateLikeButton = () => {
    onUpdateMessage({
      sender,
      body,
      timeStamp,
      id,
      liked: !liked,
    });
    console.log(`updating like status for ${sender}`)

    // setIsLiked(!isLiked);
    // liked = isLiked;
    // // if (!liked) {
    // //   setLikeCount(likeCount + 1);
    // // }else {
    // //   setLikeCount(likeCount - 1);
    // // }
  };

  
  return (
    <div className="chat-entry local">
      {/* <section>{likeCount}</section> */}
      <h2 className="entry-name">{ sender }</h2>
      <section className="entry-bubble">
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