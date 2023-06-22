import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {

  // const determineClassName = () => {
  //   if (props.sender === props.entrie[0].sender) {
  //     const localMessages = true;
  //     return localMessages ? 'chat-entry local' : 'chat-entry remote';
  //   }
  // }


  const onHeartClick = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedEntry);
  };

  const heartColor = props.liked ? '❤️' : '🤍';


  const getTimeAgo = (timeStamp) => {
    const currentYear = new Date().getFullYear();
    const textYear = new Date(timeStamp).getFullYear();
    const difference = currentYear - textYear;
    return `${difference} years ago`;
  };
  return (
    <div className="chat-entry local">
    {/* <div className={determineClassName()}> */}
      {/* <h2 className="entry-name">{props.sender}</h2> */}
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{getTimeAgo(props.timeStamp)}</p>
        <button onClick={onHeartClick}>{heartColor}</button>
        {/* {likeColor} */}
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
  onUpdate: PropTypes.func,
  // isRequired
};

// ChatEntry.defaultProps = {
//   onUpdate: () => {} // Provide a default empty function as the value
// };

export default ChatEntry;
