import React from 'react';
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
  const senderLocation = setMessageLocation(props.sender);

  const onLikeMessage = () => {
    // const updatedMessage = {
    //   id: props.id,
    //   sender: props.sender,
    //   body: props.body,
    //   timeStamp: props.timeStamp,
    //   liked: !props.liked
    // }
    console.log('hey ,im chatting here!!!!!');
  }

  return (
    <div className={senderLocation}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={()=> onLikeMessage()}>🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;

