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

  const localRemote = sender === 'Vladimir' ? 'chat-entry remote' : 'chat-entry local';
  console.log(`localRemote ${localRemote}`)
  console.log(`Sender ${sender}`)

    return (
        <div className={localRemote}>
          <div className={localRemote}>
          <h2 className='entry-name'>{sender}</h2>
          <section className='entry-bubble'>
              <p>{body}</p>
              <p className='entry-time'><TimeStamp time={timeStamp} /></p>
              <button className='like' onClick={updateLiked}>{colorHeart}</button>
          </section>
          </div>
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

// className='entry-name
// 'chat-entry local'