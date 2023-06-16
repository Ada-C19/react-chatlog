import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onUpdateChat}) => {

  // Event handler for Liked
  const updateLiked = () => {
    const updatedChatData = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked
    };

    onUpdateChat(updatedChatData)
  }

    // Conditional for button heart
  const colorHeart = liked ? '❤️' : '🤍';
  // console.log(`id: ${id}, heart: ${colorHeart} and ${liked}`)

    return (
        <div className='chat-entry local'>
        <h2 className='entry-name'>{sender}</h2>
        <section className='entry-bubble'>
            <p>{body}</p>
            <p className='entry-time'><TimeStamp time={timeStamp} /></p>
            <button className='like' onClick={updateLiked}>{colorHeart}</button>
        </section>
        </div>
    );
};


ChatEntry.propTypes = {
  //   //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;