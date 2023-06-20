// import React from 'react';
// import './ChatEntry.css';
// import PropTypes from 'prop-types';
// import TimeStamp from './TimeStamp';


// const ChatEntry = (props, selectedColor) => {
//   const senderClass =
//   props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';

//   const heart = props.liked ? '❤️' : '🤍';

//   const entryStyle = {
//     color: selectedColor
//   };


//   return (
//     <div key={props.id} className={senderClass} style={entryStyle}>
//       <h2 className="entry-name">{props.sender}</h2>
//       <section className="entry-bubble">
//         <p>{props.body}</p>
//         <p className="entry-time">
//           <TimeStamp time={props.timeStamp}></TimeStamp>
//         </p>
//         <button
//           className="like"
//           onClick={() => {
//             props.onUpdateLike(props.id);
//             props.onHeartClicks(props.liked);
//           }}
//         >
//           {heart}
//         </button>
//       </section>
//     </div>
//   );
// };

// ChatEntry.propTypes = {
//   id: PropTypes.number,
//   sender: PropTypes.string,
//   body: PropTypes.string,
//   timeStamp: PropTypes.string,
//   liked: PropTypes.bool,
// };

// export default ChatEntry;



// ChatEntry.js
import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const senderClass = props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';

  const heart = props.liked ? '❤️' : '🤍';

  const entryStyle = {
    color: props.selectedColor,
  };

  return (
    <div key={props.id} className={`${senderClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p style={entryStyle}>{props.body} </p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}/>
        </p>
        <button
          className="like"
          onClick={() => {
            props.onUpdateLike(props.id);
            props.onHeartClicks(props.liked);
          }}
        >
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  selectedColor: PropTypes.string,
};

export default ChatEntry;
