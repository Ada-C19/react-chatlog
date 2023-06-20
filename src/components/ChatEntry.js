import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';



const ChatEntry = (props) => {
  console.log(`inside chatEntry`, props)
  //const first = props.entry[0];
  //console.log('this is the time',first.TimeStamp);
  const [like, setLiked] = useState(props.liked);

  const handleClick = () => {
    setLiked(!like);
  };
  console.log('heres the like',like)
  //const chatLikedClass = props.sender === true ? 'chat-entry remote' : 'chat-entry local';
  const chatEntryClass = props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';

  return (
    <div className={chatEntryClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time ={props.timeStamp}/></p>
        <span onClick={handleClick}>
          {like ? '❤️' : '🤍'}
        </span>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
