import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// // const ChatEntry = (props) => {
// //   return (
// //     <div className="chat-entry local">
// //       <h2 className="entry-name">Replace with name of sender</h2>
// //       <section className="entry-bubble">
// //         <p>Replace with body of ChatEntry</p>
// //         <p className="entry-time">Replace with TimeStamp component</p>
// //         <button className="like">🤍</button>
// //       </section>
// //     </div>
// //   );
// // };

// // ChatEntry.propTypes = {
// //   //Fill with correct proptypes
// // };

// // export default ChatEntry;

const ChatEntry = (props) => {
  const entryClassName = props.sender === 'Vladimir'? 'chat-entry local': 'chat-entry remote';

  const [likeCount, setLikeCount] = useState(0);
  const increaseLikeCount = () => {
    setLikeCount(likeCount + 1);
  }
  const [heartColor, setHeartColor] = useState('🤍')
  const changeHeartColor = () => {
    setHeartColor(heartColor === '❤️'? '🤍' : '❤️') 
  }
  const clickLike = () => {
    increaseLikeCount();
    changeHeartColor();
  }

  const onLikeButtonClick = () => {
    const updateLike = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    }

  };


  return (
    <div className={entryClassName}>
      <h2 className="entry-name">{props['sender']}</h2>
      <section className="entry-bubble">
        <p>{props['body']}</p>
        <p><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={clickLike}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool
};

export default ChatEntry;


