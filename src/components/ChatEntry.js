import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    props.onClickLike(!liked);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{ props.sender }</h2>
      <section className="entry-bubble">
        <p>{ props.body }</p>
        <p className="entry-time">{ props.timeStamp }</p>
        <button className="like" onClick={toggleLike}>{ liked ? '❤️' : '🤍' }
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onClickLike: PropTypes.func.isRequired,
};

export default ChatEntry;
