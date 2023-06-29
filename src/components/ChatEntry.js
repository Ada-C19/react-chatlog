import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import './ChatEntry.css';

const setMessageLocation = (userName) => {

  if (userName === 'Vladimir') {
    return 'chat-entry local'; 
  } else if (userName === 'Estragon') {
    return 'chat-entry remote'; 
  };

}

const ChatEntry = (props) => {
  const [likeBool, setLikeBool] = useState(false);

  // setLikeBool(!likeBool);
  const updateLike = () => {
    setLikeBool(!likeBool);
  };

  const senderLocation = setMessageLocation(props.sender);

  // const heartVersion = props.liked ? '❤️' : '🤍';

  const onLikeMessage = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    
    props.onLikeMessage(updatedMessage);
  };

  return (
    <div className={senderLocation}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <p>it is {`${likeBool}`} that u like this message</p>
        <button className="like" onClick={updateLike}>🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;

