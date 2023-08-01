import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import moment from 'moment';

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
        <p className="entry-time">{ moment(props.timeStamp).fromNow() }</p>
        <button className="like" onClick={toggleLike}>{ liked ? '❤️' : '🤍' }
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  onClickLike: PropTypes.func,
};

export default ChatEntry;
