import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  //const [liked, setLiked] = useState(props.liked);

  const messageSide = props.sender === 'Vladimir' ? 'local' : 'remote';

  const likedColor = props.liked ? 'like':'unliked';
  
  const toggleLiked = () =>{
    props.onLikeEntry(props.liked);
  };

  return (
    <div className={`chat-entry ${messageSide}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className={likedColor} onClick={event=>toggleLiked()}></button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeEntry: PropTypes.func.isRequired
};

export default ChatEntry;
